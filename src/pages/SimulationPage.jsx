import MedicalScene from '../components/MedicalScene.jsx'
import SimulationPanel from '../components/SimulationPanel.jsx'

export default function SimulationPage() {
  return (
    <section className="simulation-page">
      <MedicalScene />

      <div className="simulation-content">
        <div className="simulation-intro">
          <p className="eyebrow">Interactive Prototype</p>
          <h1>
            Hybrid scan <strong>simulation.</strong>
          </h1>
          <p>
            Choose an imaging mode. The interface updates the displayed mode and
            explains what each scan can contribute to the diagnostic workflow.
          </p>
        </div>

        <SimulationPanel />
      </div>
    </section>
  )
}
