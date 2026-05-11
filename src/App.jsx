import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import FullIdeaPage from './pages/FullIdeaPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MappingPage from './pages/MappingPage.jsx'
import ReportPage from './pages/ReportPage.jsx'
import SimulationPage from './pages/SimulationPage.jsx'
import TechPage from './pages/TechPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="idea" element={<FullIdeaPage />} />
          <Route path="simulation" element={<SimulationPage />} />
          <Route path="mapping" element={<MappingPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="tech" element={<TechPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
