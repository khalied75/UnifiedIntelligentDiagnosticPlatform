import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

export default function Layout() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>Built with HTML - CSS - JavaScript - Three.js</span>
        <span>AI Expo Jordan 2026 Concept Prototype</span>
      </footer>
    </div>
  )
}
