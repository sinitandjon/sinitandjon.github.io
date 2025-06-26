import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 fixed h-full">
      <h1 className="text-2xl font-bold mb-6">Djon Yeo</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
      </nav>
    </div>
  )
}

export default Sidebar
