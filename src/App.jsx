import React from 'react';
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const car = {
    make: "Tesla",
    model: "Model 3",
    year: 2024,
    price: 45000,
    mileage: 12000,
    fuel_type: "Eléctrico",
    transmission: "Automático",
    color: "Blanco",
    description: "Este es un vehículo de prueba para mi proyecto escolar."
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '900px', margin: 'auto', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <button style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', marginBottom: '20px' }}>
        <ArrowLeft size={16} /> Volver
      </button>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0' }}>{car.year} {car.make} {car.model}</h1>
        <p style={{ fontSize: '28px', color: '#2563eb', fontWeight: 'bold', marginTop: '10px' }}>{formatPrice(car.price)}</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ background: '#f3f4f6', padding: '15px', borderRadius: '12px' }}>
            <Calendar size={18} color="#6b7280" /> <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#6b7280' }}>Año</p> <strong>{car.year}</strong>
          </div>
          <div style={{ background: '#f3f4f6', padding: '15px', borderRadius: '12px' }}>
            <Gauge size={18} color="#6b7280" /> <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#6b7280' }}>Km</p> <strong>{car.mileage}</strong>
          </div>
          <div style={{ background: '#f3f4f6', padding: '15px', borderRadius: '12px' }}>
            <Fuel size={18} color="#6b7280" /> <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#6b7280' }}>Motor</p> <strong>{car.fuel_type}</strong>
          </div>
        </div>

        <h3 style={{ marginTop: '30px' }}>Descripción</h3>
        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{car.description}</p>
        
        <button style={{ width: '100%', padding: '16px', backgroundColor: '#111827', color: 'white', border: 'none', borderRadius: '12px', marginTop: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Contactar Vendedor
        </button>
      </motion.div>
    </div>
  );
}