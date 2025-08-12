import React from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  LineChart, Line, CartesianGrid, Legend
} from "recharts";
import { useTheme } from "../context/ThemeContext";

const pieData = [
  { name: "Apple", value: 400 },
  { name: "Samsung", value: 300 },
  { name: "Huawei", value: 300 },
  { name: "Xiaomi", value: 200 }
];
const barData = [
  { name: "Enero", ventas: 400 },
  { name: "Febrero", ventas: 300 },
  { name: "Marzo", ventas: 500 },
  { name: "Abril", ventas: 200 }
];
const lineData = [
  { mes: "Enero", visitas: 400 },
  { mes: "Febrero", visitas: 700 },
  { mes: "Marzo", visitas: 500 },
  { mes: "Abril", visitas: 900 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts: React.FC = () => {
  const { darkMode } = useTheme();

  const cardStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#2c2c2c" : "#fff",
    color: darkMode ? "#f4f6f8" : "#000",
    gap: "2rem"
  };

  const chartWrapper: React.CSSProperties = {
    flex: "1",
    display: "flex",
    justifyContent: "center"
  };

  const textWrapper: React.CSSProperties = {
    flex: "1",
    fontSize: "1rem",
    lineHeight: "1.5"
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      padding: "2rem"
    }}>
      {/* Gráfico de Torta */}
      <div style={cardStyle}>
        <div style={chartWrapper}>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div style={textWrapper}>
          <h3>Distribución de Marcas</h3>
          <p>
            Este gráfico de torta muestra la cuota de mercado de diferentes marcas de teléfonos
            móviles. Es útil para identificar qué marcas dominan en el mercado.
          </p>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <div style={cardStyle}>
        <div style={chartWrapper}>
          <BarChart width={400} height={200} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="ventas" fill="#82ca9d" />
          </BarChart>
        </div>
        <div style={textWrapper}>
          <h3>Ventas Mensuales</h3>
          <p>
            Este gráfico de barras representa las ventas mensuales en los primeros cuatro meses
            del año. Ayuda a visualizar el crecimiento o la caída en las ventas.
          </p>
        </div>
      </div>

      {/* Gráfico de Líneas */}
      <div style={cardStyle}>
        <div style={chartWrapper}>
          <LineChart width={400} height={200} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visitas" stroke="#8884d8" />
          </LineChart>
        </div>
        <div style={textWrapper}>
          <h3>Tendencia de Visitas</h3>
          <p>
            El gráfico de líneas muestra la evolución de las visitas mensuales.
            Es útil para analizar tendencias a lo largo del tiempo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
