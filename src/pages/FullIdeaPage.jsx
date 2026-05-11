import IdeaCard from '../components/IdeaCard.jsx'
import MedicalScene from '../components/MedicalScene.jsx'

const conceptCards = [
  {
    title: 'Unified Imaging Hub',
    description:
      'One central interface that represents MRI, CT, and X-ray workflows in a unified diagnostic experience.',
  },
  {
    title: 'Differential Diagnosis',
    description:
      'Compares similar disease patterns and ranks possible cases to help doctors separate diseases with overlapping symptoms.',
  },
  {
    title: '3D Anatomical Mapping',
    description:
      'Displays the affected location, layer, and damage type using a layered three-dimensional visualization.',
  },
  {
    title: 'Scientific Reporting',
    description:
      'Generates a structured medical-style report with highlighted risk regions and organized observations.',
  },
]

const workflowCards = [
  {
    number: '01',
    title: 'Input',
    description:
      'The system receives medical images and basic patient case information.',
  },
  {
    number: '02',
    title: 'Analyze',
    description:
      'AI modules compare visual patterns, symptoms, and disease similarity indicators.',
  },
  {
    number: '03',
    title: 'Map',
    description:
      'The affected area is placed on a layered 3D body model for clearer understanding.',
  },
  {
    number: '04',
    title: 'Report',
    description:
      'The platform prepares a clear scientific report for review by medical specialists.',
  },
]

export default function FullIdeaPage() {
  return (
    <section className="full-idea-page">
      <MedicalScene />

      <div className="idea-content">
        <div className="idea-intro">
          <p className="eyebrow">Complete Project Concept</p>
          <h1>
            The full <strong>diagnostic platform</strong> idea.
          </h1>
          <p>
            The project is presented as a medical decision-support prototype. It
            does not replace doctors; it organizes imaging, analysis, mapping,
            and reporting into one intelligent workflow.
          </p>
        </div>

        <div className="idea-grid concept-grid">
          {conceptCards.map((card) => (
            <IdeaCard key={card.title} {...card} />
          ))}
        </div>

        <div className="idea-grid workflow-grid">
          {workflowCards.map((card) => (
            <IdeaCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
