// App.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto bg-white text-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
