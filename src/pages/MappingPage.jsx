import MappingViewer from '../components/MappingViewer.jsx'
import MedicalScene from '../components/MedicalScene.jsx'

export default function MappingPage() {
  return (
    <section className="mapping-page">
      <MedicalScene />

      <div className="mapping-content">
        <div className="mapping-intro">
          <p className="eyebrow">Multi-Layered Body View</p>
          <h1>
            3D mapping and <strong>risk localization.</strong>
          </h1>
          <p>
            This page explains how the platform visualizes the affected region:
            where it is, which layer is involved, and what type of damage is suspected.
          </p>
        </div>

        <MappingViewer />
      </div>
    </section>
  )
}
