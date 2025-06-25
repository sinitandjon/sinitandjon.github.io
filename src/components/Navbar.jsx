import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">MyPortfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/publications" className="hover:underline">Publications</Link>
      </div>
    </nav>
  );
}
