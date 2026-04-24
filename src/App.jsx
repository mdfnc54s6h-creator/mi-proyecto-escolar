import React, { useState, useEffect } from 'react';
import { generarAutos } from './autos';
import { X, ArrowLeft, Fuel, ShieldCheck, Zap, Timer, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [fotoActual, setFotoActual] = useState(0);

  useEffect(() => {
    document.body.style.overflow = mostrarDetalles ? 'hidden' : 'unset';
  }, [mostrarDetalles]);

  const verDetalles = (auto) => {
    setAutoSeleccionado(auto);
    setFotoActual(0);
    setMostrarDetalles(true);
  };

  const cambiarFoto = (direccion) => {
    const total = autoSeleccionado.images.length;
    if (direccion === 'sig') setFotoActual((fotoActual + 1) % total);
    else setFotoActual((fotoActual - 1 + total) % total);
  };

  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-serif">
        <header className="py-20 border-b border-white/5 text-center">
          <h1 className="text-7xl font-black uppercase italic tracking-tighter">6r7 cars</h1>
          <p className="text-neutral-500 tracking-[1em] text-[10px] uppercase mt-2">Master Collection</p>
        </header>

        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
          {autos.map((auto) => (
            <div key={auto.id} className="group relative rounded-[2rem] overflow-hidden border border-white/10">
              <img src={auto.images[0]} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="car" />
              <div className="p-8 bg-[#0a0a0a]">
                <h3 className="text-2xl font-bold mb-4">{auto.make}</h3>
                <p className="text-amber-500 font-bold mb-6">${auto.price.toLocaleString()}</p>
                <button 
                  onClick={() => verDetalles(auto)}
                  className="w-full bg-white text-black py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all"
                >
                  ver mas detalles y contactar vendedor
                </button>
              </div>
            </div>
          ))}
        </div>

        {mostrarDetalles && autoSeleccionado && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 flex items-center justify-center p-4">
            <div className="bg-[#0d0d0d] border border-white/10 w-full max-w-5xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative">
              <button onClick={() => setMostrarDetalles(false)} className="absolute top-6 right-6 z-50 text-white bg-black/50 p-2 rounded-full"><X/></button>
              
              <div className="w-full md:w-1/2 h-[400px] md:h-auto relative group">
                <img src={autoSeleccionado.images[fotoActual]} className="w-full h-full object-cover" alt="gallery" />
                <button onClick={() => cambiarFoto('ant')} className="absolute left-4 top-1/2 bg-black/50 p-2 rounded-full"><ChevronLeft/></button>
                <button onClick={() => cambiarFoto('sig')} className="absolute right-4 top-1/2 bg-black/50 p-2 rounded-full"><ChevronRight/></button>
              </div>

              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">{autoSeleccionado.make}</h2>
                <p className="text-neutral-400 mb-8">"{autoSeleccionado.description}"</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-[10px] uppercase text-neutral-500 tracking-widest">Potencia: <span className="text-white block text-sm">{autoSeleccionado.hp} HP</span></div>
                  <div className="text-[10px] uppercase text-neutral-500 tracking-widest">0-100: <span className="text-white block text-sm">{autoSeleccionado.accel}s</span></div>
                </div>
                <button 
                  onClick={() => { setMostrarDetalles(false); setVista('formulario'); }}
                  className="bg-white text-black py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest"
                >
                  contactar vendedor de 6r7 cars
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (vista === 'formulario') {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-8 text-white font-sans">
        <div className="w-full max-w-xl bg-[#0a0a0a] p-12 rounded-[3rem] border border-white/5">
          <button onClick={() => setVista('catalogo')} className="text-neutral-500 mb-8 uppercase text-[10px] flex items-center gap-2"><ArrowLeft size={14}/> Volver</button>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter text-center">Concierge 6r7 cars</h2>
          <form onSubmit={(e) => { e.preventDefault(); setVista('exito'); }} className="space-y-6">
            <input type="text" placeholder="Nombre Completo" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-amber-500 transition-all text-[10px] uppercase" required />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-amber-500 transition-all text-[10px] uppercase" required />
            <button type="submit" className="w-full bg-white text-black py-5 rounded-full font-black uppercase text-[10px] tracking-widest mt-6">Confirmar Interés</button>
          </form>
        </div>
      </div>
    );
  }

  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-center text-white">
        <div className="max-w-md">
          <ShieldCheck className="mx-auto text-amber-500 mb-6" size={60} />
          <h1 className="text-4xl font-bold mb-4 uppercase italic">Solicitud Recibida</h1>
          <p className="text-neutral-500 text-sm mb-10 uppercase tracking-widest leading-loose">Recibirá respuesta de 6r7 cars en un plazo de 6 a 7 días hábiles.</p>
          <button onClick={() => setVista('catalogo')} className="text-amber-500 uppercase text-[10px] tracking-widest border-b border-amber-500/20 pb-2">Regresar</button>
        </div>
      </div>
    );
  }
}

export default App;