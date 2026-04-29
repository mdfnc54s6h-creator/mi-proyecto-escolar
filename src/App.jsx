// src/App.jsx
import React, { useState } from 'react';
import catálogoAutos from './autos'; 
import { X, MessageCircle, Send, ShieldCheck, ArrowLeft } from 'lucide-react';

function App() {
  const [autos] = useState(catálogoAutos);

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Mi Catálogo de Autos</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px', 
        padding: '20px' 
      }}>
        {autos.map(auto => (
          <div key={auto.id} style={{ 
            border: '1px solid #333', 
            borderRadius: '10px', 
            padding: '15px', 
            backgroundColor: '#1e1e1e' 
          }}>
            <h2 style={{ color: '#e0e0e0' }}>{auto.nombre}</h2>
            <p style={{ fontSize: '0.9rem', color: '#bbb' }}>{auto.descripcion}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <img 
                src={auto.imagenes.delantero} 
                alt={`${auto.nombre} delantero`} 
                style={{ width: '100%', borderRadius: '5px', objectFit: 'cover', height: '180px' }} 
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
              <MessageCircle size={20} />
              <ShieldCheck size={20} />
              <Send size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;