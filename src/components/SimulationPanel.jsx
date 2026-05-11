import { useMemo, useState } from 'react'

const modes = [
  {
    id: 'mri',
    label: 'MRI Mode',
    shortLabel: 'MRI Mode',
    description: 'Best for soft tissue visualization and internal structure analysis.',
    consoleText: 'Soft tissue contrast, organ structure, and internal tissue detail.',
    focus: 'Thoracic soft tissue',
    depth: '42 mm',
    confidence: '82%',
    accent: 'soft-tissue',
  },
  {
    id: 'ct',
    label: 'CT Mode',
    shortLabel: 'CT Mode',
    description: 'Useful for slices, internal layers, and complex injury visualization.',
    consoleText: 'Layered slice review, dense tissue boundaries, and injury depth.',
    focus: 'Internal layer boundary',
    depth: '31 mm',
    confidence: '88%',
    accent: 'layered',
  },
  {
    id: 'xray',
    label: 'X-ray Mode',
    shortLabel: 'X-ray Mode',
    description: 'Fast view for bones, fractures, and structural abnormalities.',
    consoleText: 'Bone structure, fractures, alignment, and fast screening output.',
    focus: 'Bone alignment region',
    depth: '18 mm',
    confidence: '79%',
    accent: 'bone',
  },
  {
    id: 'hybrid',
    label: 'Hybrid AI Mode',
    shortLabel: 'Hybrid AI',
    description: 'Combines imaging information with AI pattern comparison.',
    consoleText: 'Cross-mode evidence fusion with pattern similarity scoring.',
    focus: 'Multi-scan risk cluster',
    depth: '55 mm',
    confidence: '91%',
    accent: 'hybrid',
  },
]

const stats = [
  ['HR', '78'],
  ['SpO2', '98%'],
  ['Temp', '36.8'],
]

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function makeAnalysis(metrics, selectedMode) {
  if (!metrics) {
    return {
      confidence: selectedMode.confidence,
      depth: selectedMode.depth,
      focus: selectedMode.focus,
      summary: selectedMode.consoleText,
      findings: [
        'Upload a medical image to generate a prototype AI-style review.',
        'The scan console will estimate contrast, brightness, and suspected focus zones.',
      ],
      risk: 'Awaiting image',
    }
  }

  const contrastScore = Math.round(metrics.contrast * 100)
  const brightnessScore = Math.round(metrics.brightness * 100)
  const edgeScore = Math.round(metrics.edgeDensity * 100)
  const confidence = clamp(62 + contrastScore * 0.18 + edgeScore * 0.2, 64, 94)
  const densityLabel = metrics.brightness > 0.56 ? 'bright-density' : 'low-density'
  const contrastLabel = metrics.contrast > 0.24 ? 'high-contrast' : 'soft-contrast'
  const modeFocus = {
    mri: 'Soft tissue signal variation',
    ct: 'Layer boundary and density shift',
    xray: 'Bone edge and alignment pattern',
    hybrid: 'Combined image evidence cluster',
  }

  return {
    confidence: `${Math.round(confidence)}%`,
    depth: `${clamp(Math.round(18 + edgeScore * 0.45 + contrastScore * 0.28), 16, 72)} mm`,
    focus: modeFocus[selectedMode.id],
    summary: `${selectedMode.shortLabel} analysis found ${contrastLabel} structure with ${densityLabel} regions.`,
    findings: [
      `Image size: ${metrics.width} x ${metrics.height}px.`,
      `Estimated brightness: ${brightnessScore}%, contrast: ${contrastScore}%, edge activity: ${edgeScore}%.`,
      metrics.contrast > 0.24
        ? 'Highlighted area has enough separation for focused review.'
        : 'Low contrast image may need enhanced capture or additional scan mode.',
    ],
    risk: confidence > 84 ? 'Priority review' : confidence > 72 ? 'Moderate review' : 'Needs clearer input',
  }
}

export default function SimulationPanel() {
  const [selectedMode, setSelectedMode] = useState(modes[0])
  const [imagePreview, setImagePreview] = useState('')
  const [imageName, setImageName] = useState('')
  const [metrics, setMetrics] = useState(null)

  const analysis = useMemo(
    () => makeAnalysis(metrics, selectedMode),
    [metrics, selectedMode]
  )

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const imageUrl = reader.result
      const image = new Image()

      image.onload = () => {
        const canvas = document.createElement('canvas')
        const sampleSize = 96
        const context = canvas.getContext('2d', { willReadFrequently: true })

        canvas.width = sampleSize
        canvas.height = sampleSize
        context.drawImage(image, 0, 0, sampleSize, sampleSize)

        const imageData = context.getImageData(0, 0, sampleSize, sampleSize).data
        let brightnessTotal = 0
        let contrastTotal = 0
        let edgeTotal = 0
        const luminance = []

        for (let i = 0; i < imageData.length; i += 4) {
          const value = (imageData[i] * 0.299 + imageData[i + 1] * 0.587 + imageData[i + 2] * 0.114) / 255
          luminance.push(value)
          brightnessTotal += value
        }

        const brightness = brightnessTotal / luminance.length

        luminance.forEach((value, index) => {
          contrastTotal += Math.abs(value - brightness)
          if (index > 0) edgeTotal += Math.abs(value - luminance[index - 1])
        })

        setImagePreview(imageUrl)
        setImageName(file.name)
        setMetrics({
          brightness,
          contrast: contrastTotal / luminance.length,
          edgeDensity: edgeTotal / luminance.length,
          height: image.naturalHeight,
          width: image.naturalWidth,
        })
      }

      image.src = imageUrl
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="simulation-workspace">
      <div className="mode-list" aria-label="Imaging modes">
        <label className="upload-card">
          <span>Upload Medical Image</span>
          <small>MRI, CT, X-ray, or any prototype scan image</small>
          <input accept="image/*" type="file" onChange={handleImageUpload} />
        </label>

        {modes.map((mode) => (
          <button
            key={mode.id}
            className={`mode-card${selectedMode.id === mode.id ? ' active' : ''}`}
            type="button"
            onClick={() => setSelectedMode(mode)}
          >
            <span>{mode.label}</span>
            <small>{mode.description}</small>
          </button>
        ))}
      </div>

      <section className={`simulation-console ${selectedMode.accent}`}>
        <div className="simulation-mode-label">{selectedMode.shortLabel}</div>

        <div className="scan-device uploaded-scan" aria-label={`${selectedMode.label} animated scan`}>
          {imagePreview ? (
            <img src={imagePreview} alt={imageName || 'Uploaded medical scan'} />
          ) : (
            <>
              <span className="scan-arch" />
              <span className="scan-ring scan-ring-a" />
              <span className="scan-ring scan-ring-b" />
              <span className="scan-table" />
              <span className="scan-table-glow" />
            </>
          )}
          <span className="scan-column" />
          <span className="scan-sweep" />
          <span className="scan-focus" />
        </div>

        <aside className="diagnostic-console">
          <p className="console-kicker">AI Image Analysis</p>
          <p className="console-copy">{analysis.summary}</p>

          <div className="vital-grid">
            {stats.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="analysis-findings">
            {analysis.findings.map((finding) => (
              <p key={finding}>{finding}</p>
            ))}
          </div>

          <dl className="console-data">
            <div>
              <dt>Slice Depth</dt>
              <dd>{analysis.depth}</dd>
            </div>
            <div>
              <dt>Highlighted Area</dt>
              <dd>{analysis.focus}</dd>
            </div>
            <div>
              <dt>Review Level</dt>
              <dd>{analysis.risk}</dd>
            </div>
            <div>
              <dt>AI Confidence</dt>
              <dd>{analysis.confidence}</dd>
            </div>
          </dl>

          <div className="confidence-meter" aria-hidden="true">
            <span style={{ width: analysis.confidence }} />
          </div>

          <p className="prototype-note">
            Prototype only. This is not a medical diagnosis and must be reviewed by certified specialists.
          </p>
        </aside>
      </section>
    </div>
  )
}
