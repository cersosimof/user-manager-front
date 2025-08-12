import React from 'react';
import UserTable from '../components/UserTable';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <UserTable data={data} darkMode={darkMode} />
    </div>
  );
};

export default Home;

