import React, { useState } from 'react';
import UserTable from '../components/UserTable';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const themeStyles = {
    backgroundColor: darkMode ? '#121212' : '#f4f6f8',
    color: darkMode ? '#f4f6f8' : '#000',
    transition: 'all 0.3s ease'
  };

  const contentStyles = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '2rem',
    overflowY: 'auto'
  };

  const data = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    nombre: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@mail.com`,
    pais: ['España', 'México', 'Argentina', 'Chile', 'Perú'][i % 5],
    edad: 20 + (i % 30),
    estado: i % 2 === 0 ? 'Activo' : 'Inactivo',
    fecha: `2023-0${(i % 9) + 1}-${(i % 28) + 1}`
  }));

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      ...themeStyles
    }}>
      <main style={contentStyles}>
        <UserTable data={data} darkMode={darkMode} />
      </main>
    </div>
  );
};

export default Home;
