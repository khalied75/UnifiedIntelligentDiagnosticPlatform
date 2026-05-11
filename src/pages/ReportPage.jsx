import MedicalScene from '../components/MedicalScene.jsx'
import ReportPreview from '../components/ReportPreview.jsx'

export default function ReportPage() {
  return (
    <section className="report-page">
      <MedicalScene />

      <div className="report-content">
        <div className="report-intro">
          <p className="eyebrow">Automated Scientific Output</p>
          <h1>
            Medical-style <strong>report</strong> preview.
          </h1>
          <p>
            A clean report page helps judges understand the final output of the platform.
          </p>
        </div>

        <ReportPreview />
      </div>
    </section>
  )
}
