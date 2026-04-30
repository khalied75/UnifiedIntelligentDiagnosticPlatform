import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="idea" element={<HomePage />} />
          <Route path="simulation" element={<HomePage />} />
          <Route path="mapping" element={<HomePage />} />
          <Route path="report" element={<HomePage />} />
          <Route path="body-systems" element={<HomePage />} />
          <Route path="tech" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
