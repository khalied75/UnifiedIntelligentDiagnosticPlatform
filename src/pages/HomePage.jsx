import { Link } from 'react-router-dom'
import MedicalScene from '../components/MedicalScene.jsx'

const scanRows = [
  ['Imaging Mode', 'MRI + CT + X-ray'],
  ['3D Layer Map', 'Generated'],
  ['Risk Highlight', '2 Regions'],
  ['Report Status', 'Ready'],
]

export default function HomePage() {
  return (
    <section className="home-page">
      <MedicalScene />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Medical Imaging - AI Analysis - 3D Mapping</p>
          <h1>
            <span>One smart</span>
            <span>platform for</span>
            <strong>hybrid</strong>
            <strong>diagnosis</strong>
          </h1>
          <p className="hero-text">
            A competition-ready concept website for AI Expo Jordan 2026. It
            presents the unified diagnostic idea, separates the live simulation into
            its own page, and explains the complete system clearly and
            professionally.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" to="/simulation">
              Open Simulation
            </Link>
            <Link className="secondary-action" to="/idea">
              Read Full Idea
            </Link>
          </div>
        </div>

        <div className="scan-card" aria-label="Hybrid scan status">
          <div className="scan-toolbar">
            <div className="traffic-lights" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <strong>Hybrid Scan Active</strong>
          </div>
          <div className="scan-viewport">
            <div className="grid-lines" />
            <div className="body-outline">
              <span className="head" />
              <span className="torso" />
              <span className="risk risk-one" />
              <span className="risk risk-two" />
            </div>
            <span className="scan-beam" />
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="orbit orbit-c" />
          </div>
          <dl className="scan-data">
            {scanRows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
