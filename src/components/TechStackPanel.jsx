const stackCards = [
  {
    title: 'React Interface',
    tag: 'Frontend',
    description:
      'Single-page application with routed sections for the idea, simulation, 3D mapping, reports, and tech overview.',
  },
  {
    title: 'Three.js Scene',
    tag: 'Visual Engine',
    description:
      'Animated DNA particles and medical-style orbit lines create the scientific prototype atmosphere.',
  },
  {
    title: 'Image Simulation',
    tag: 'AI Prototype',
    description:
      'Uploaded images are sampled in-browser to estimate brightness, contrast, and edge activity for demo analysis.',
  },
  {
    title: 'Report Output',
    tag: 'Scientific UX',
    description:
      'Structured case summaries show how scan metadata, risk regions, and review notes could be organized.',
  },
]

const pipelineSteps = [
  'Upload scan image',
  'Extract visual metrics',
  'Compare scan mode context',
  'Map suspected region',
  'Generate report preview',
]

export default function TechStackPanel() {
  return (
    <div className="tech-workspace">
      <section className="tech-pipeline" aria-label="Platform pipeline">
        <div className="tech-pipeline-core">
          <span className="tech-orbit tech-orbit-a" />
          <span className="tech-orbit tech-orbit-b" />
          <span className="tech-core-dot" />
          <span className="tech-core-ring" />
        </div>

        <ol className="pipeline-list">
          {pipelineSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="tech-card-grid">
        {stackCards.map((card) => (
          <article className="tech-card" key={card.title}>
            <p>{card.tag}</p>
            <h2>{card.title}</h2>
            <span>{card.description}</span>
          </article>
        ))}
      </div>

      <section className="tech-system-note">
        <h2>Prototype architecture</h2>
        <p>
          The current build keeps the AI demo local for presentation safety. A
          production version would connect certified datasets, validated ML
          services, secure storage, audit logs, and physician approval workflows.
        </p>
      </section>
    </div>
  )
}
