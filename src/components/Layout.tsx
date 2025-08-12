import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, toggleTheme }) => {
  const backgroundColor = darkMode ? '#121212' : '#f4f6f8';
  const textColor = darkMode ? '#f4f6f8' : '#000';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor,
        color: textColor,
        transition: 'all 0.3s ease',
      }}
    >
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main style={{ flexGrow: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
