import MedicalScene from '../components/MedicalScene.jsx'
import TechStackPanel from '../components/TechStackPanel.jsx'

export default function TechPage() {
  return (
    <section className="tech-page">
      <MedicalScene />

      <div className="tech-content">
        <div className="tech-intro">
          <p className="eyebrow">System Technology</p>
          <h1>
            The engine behind the <strong>diagnostic prototype.</strong>
          </h1>
          <p>
            This page explains the technical layers that make the concept feel
            interactive: routing, scan simulation, 3D visualization, and report output.
          </p>
        </div>

        <TechStackPanel />
      </div>
    </section>
  )
}
