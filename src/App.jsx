import React, { useState } from 'react';
import catálogoAutos from './autos'; 
import { X, MessageCircle, Send, ShieldCheck, Info } from 'lucide-react';

function App() {
  const [autos] = useState(catálogoAutos);
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

  const abrirWhatsApp = (nombreAuto) => {
    const mensaje = `Hola, estoy interesado en el ${nombreAuto} que vi en el catálogo.`;
    window.open(`https://wa.me/18493528972?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ padding: '50px 20px', textAlign: 'center', borderBottom: '1px solid #222' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-1px' }}>VIP DEALER</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Fichas Técnicas Oficiales y Exclusivas</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px', padding: '40px' 
      }}>
        {autos.map(auto => (
          <div 
            key={auto.id} 
            onClick={() => setAutoSeleccionado(auto)}
            style={{ 
              backgroundColor: '#161616', borderRadius: '20px', overflow: 'hidden', 
              cursor: 'pointer', border: '1px solid #222', transition: '0.3s' 
            }}
          >
            <img src={auto.imagenes.delantero} alt={auto.nombre} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '1.3rem', margin: '0 0 15px 0' }}>{auto.nombre}</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                <MessageCircle size={22} onClick={(e) => { e.stopPropagation(); abrirWhatsApp(auto.nombre); }} />
                <Info size={22} />
                <ShieldCheck size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DETALLES + FICHA TÉCNICA + FORMULARIO */}
      {autoSeleccionado && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', 
          alignItems: 'center', zIndex: 9999, padding: '20px' 
        }}>
          <div style={{ 
            backgroundColor: '#121212', width: '100%', maxWidth: '1000px', 
            maxHeight: '90vh', borderRadius: '25px', overflowY: 'auto', position: 'relative',
            padding: '40px', border: '1px solid #333'
          }}>
            <button onClick={() => setAutoSeleccionado(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={35} />
            </button>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', fontWeight: 'bold' }}>{autoSeleccionado.nombre}</h2>
            
            {/* GALERÍA 3 FOTOS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '40px' }}>
              <img src={autoSeleccionado.imagenes.delantero} style={{ width: '100%', borderRadius: '12px', border: '1px solid #333' }} alt="Front" />
              <img src={autoSeleccionado.imagenes.trasero} style={{ width: '100%', borderRadius: '12px', border: '1px solid #333' }} alt="Rear" />
              <img src={autoSeleccionado.imagenes.interior} style={{ width: '100%', borderRadius: '12px', border: '1px solid #333' }} alt="Interior" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }}>
              {/* FICHA TÉCNICA */}
              <div>
                <h3 style={{ borderBottom: '2px solid #3b82f6', display: 'inline-block', paddingBottom: '5px' }}>FICHA TÉCNICA</h3>
                <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.05rem', marginTop: '20px' }}>
                  {autoSeleccionado.descripcion}
                </p>
                <button 
                  onClick={() => abrirWhatsApp(autoSeleccionado.nombre)}
                  style={{ marginTop: '30px', padding: '15px 30px', backgroundColor: '#25D366', color: 'black', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <MessageCircle size={20} /> CHATEAR CON ASESOR
                </button>
              </div>

              {/* FORMULARIO */}
              <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', border: '1px solid #333' }}>
                <h3 style={{ marginTop: 0 }}>SOLICITUD VIP</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Solicitud enviada correctamente. Un asesor se contactará con usted.'); setAutoSeleccionado(null); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input type="text" placeholder="Nombre Completo" required style={inputStyle} />
                  <input type="email" placeholder="Gmail" required style={inputStyle} />
                  <input type="text" placeholder="Cédula" required style={inputStyle} />
                  <input type="tel" placeholder="Número Telefónico" required style={inputStyle} />
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '5px' }}>Fecha de Nacimiento</label>
                    <input type="date" required style={inputStyle} />
                  </div>
                  <button type="submit" style={{ padding: '15px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                    ENVIAR DATOS
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #333',
  backgroundColor: '#0a0a0a',
  color: 'white',
  width: '100%'
};

export default App;