import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Full Idea', to: '/idea' },
  { label: 'Simulation', to: '/simulation' },
  { label: '3D Mapping', to: '/mapping' },
  { label: 'Report', to: '/report' },
  { label: 'Tech', to: '/tech' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Unified Diagnostic AI home">
        <span className="brand-mark">*</span>
        <span>Unified Diagnostic AI</span>
      </NavLink>

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
