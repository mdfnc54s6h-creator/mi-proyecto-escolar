import React, { useState } from 'react';
import catálogoAutos from './autos'; 
import { X, MessageCircle, Send, ShieldCheck, ArrowLeft } from 'lucide-react';

function App() {
  // Asegúrate de que tu lógica use 'catálogoAutos'
  const [autos, setAutos] = useState(catálogoAutos);

  return (
    <div className="App">
      <h1>Mi Catálogo de 50 Autos</h1>
      <div className="grid">
        {autos.map(auto => (
          <div key={auto.id} className="card">
            <h2>{auto.nombre}</h2>
            <p>{auto.descripcion}</p>
            <img src={auto.imagenes.delantero} alt={auto.nombre} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;