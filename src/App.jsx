import React, { useState } from 'react';
import { listaAutos } from './autos';

export default function App() {
  const [filtro, setFiltro] = useState("");
  const [categoriaActual, setCategoriaActual] = useState("todos");

  const categorias = ["todos", "pickup", "hypercars", "sedan", "coupes", "SUV", "deportivos", "luxury"];

  const autosFiltrados = listaAutos.filter(auto => {
    const coincideNombre = auto.make.toLowerCase().includes(filtro.toLowerCase());
    const coincideCat = categoriaActual === "todos" || auto.category === categoriaActual;
    return coincideNombre && coincideCat;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🏎️ Luxury Dealer: 350 Vehículos</h1>
      
      {/* Filtros por Categoría */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {categorias.map(cat => (
          <button 
            key={cat}
            onClick={() => setCategoriaActual(cat)}
            style={{ 
              padding: '10px', 
              borderRadius: '8px',
              backgroundColor: categoriaActual === cat ? 'black' : '#eee',
              color: categoriaActual === cat ? 'white' : 'black',
              cursor: 'pointer',
              border: 'none',
              textTransform: 'capitalize'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <input 
        type="text" 
        placeholder="Buscar marca..." 
        onChange={(e) => setFiltro(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}
      />

      <p>Mostrando: <strong>{autosFiltrados.length}</strong> autos</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {autosFiltrados.map(auto => (
          <div key={auto.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '10px' }}>
            <img src={auto.image} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{auto.make} {auto.model}</h3>
            <p>Categoría: <strong>{auto.category}</strong></p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${auto.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}