import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  return (
    <nav style={{
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
      boxShadow: darkMode ? '0 2px 4px rgba(255,255,255,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
      color: darkMode ? '#f4f6f8' : '#000'
    }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mi App</h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tabla</Link>
        <Link to="/charts" style={{ textDecoration: 'none', color: 'inherit' }}>Gráficos</Link>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          color: darkMode ? '#f4f6f8' : '#000'
        }}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
