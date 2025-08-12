import React from 'react';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  pais: string;
  edad: number;
  estado: string;
  fecha: string;
}

interface TableProps {
  data: Usuario[];
  darkMode: boolean;
}

const UserTable: React.FC<TableProps> = ({ data, darkMode }) => {
  const thStyle: React.CSSProperties = {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: darkMode ? '#2a2a2a' : '#e0e0e0',
    color: darkMode ? '#f4f4f4' : '#000',
    borderBottom: `1px solid ${darkMode ? '#444' : '#ccc'}`
  };

  const tdStyle: React.CSSProperties = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: `1px solid ${darkMode ? '#444' : '#ddd'}`,
    backgroundColor: darkMode ? '#1e1e1e' : '#fff',
    color: darkMode ? '#f4f4f4' : '#000'
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#1e1e1e' : '#fff',
      color: darkMode ? '#f4f6f8' : '#000',
      boxShadow: darkMode ? '0 0 10px rgba(255,255,255,0.1)' : '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '1200px',
      width: '100%',
      overflowX: 'auto',
      transition: 'all 0.3s ease'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Usuarios Registrados</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>País</th>
            <th style={thStyle}>Edad</th>
            <th style={thStyle}>Estado</th>
            <th style={thStyle}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr key={usuario.id}>
              <td style={tdStyle}>{usuario.id}</td>
              <td style={tdStyle}>{usuario.nombre}</td>
              <td style={tdStyle}>{usuario.email}</td>
              <td style={tdStyle}>{usuario.pais}</td>
              <td style={tdStyle}>{usuario.edad}</td>
              <td style={tdStyle}>{usuario.estado}</td>
              <td style={tdStyle}>{usuario.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
