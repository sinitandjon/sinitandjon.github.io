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
import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}

