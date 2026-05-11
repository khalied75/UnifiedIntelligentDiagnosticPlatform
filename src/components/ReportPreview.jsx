const reportItems = [
  'Patient case summary placeholder',
  'Imaging mode and scan metadata',
  'Highlighted risk regions',
  'Differential diagnosis suggestions',
  'Stage/progression notes',
  'Doctor review section',
]

export default function ReportPreview() {
  return (
    <div className="report-workspace">
      <article className="report-paper">
        <p className="report-label">Mock Scientific Report</p>
        <h2>Unified Diagnostic AI - Case Summary</h2>

        <dl className="report-meta">
          <div>
            <dt>Scan Type:</dt>
            <dd>Hybrid MRI + CT + X-ray simulation</dd>
          </div>
          <div>
            <dt>Detected Regions:</dt>
            <dd>2 highlighted regions</dd>
          </div>
          <div>
            <dt>Risk Score:</dt>
            <dd>
              <span className="risk-score" aria-label="Risk score preview">
                <span />
              </span>
            </dd>
          </div>
        </dl>

        <ul className="report-summary">
          <li>Primary observation: abnormal highlighted pattern in simulated tissue region.</li>
          <li>Suggested next step: specialist review and confirmed medical imaging interpretation.</li>
          <li>Report purpose: decision support, documentation, and research formatting.</li>
        </ul>
      </article>

      <aside className="report-includes">
        <h2>What the report includes</h2>
        <ul>
          {reportItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
