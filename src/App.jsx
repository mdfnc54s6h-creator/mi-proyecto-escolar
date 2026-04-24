import React, { useState, useEffect } from 'react';
import { generarAutos } from './autos';
import { X, ArrowLeft, Fuel, Gauge, ShieldCheck, Zap, Timer, Activity } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  // Bloquea el scroll del fondo solo cuando el modal está abierto
  useEffect(() => {
    if (mostrarDetalles) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mostrarDetalles]);

  const verDetalles = (auto) => {
    setAutoSeleccionado(auto);
    setMostrarDetalles(true);
  };

  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-serif">
        <header className="relative py-24 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-[#050505]">
          <div className="text-center">
            <h1 className="text-8xl font-black tracking-tighter uppercase italic bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-2">
              6r7 cars
            </h1>
            <p className="text-neutral-500 tracking-[0.8em] text-[10px] uppercase italic">Pinnacle of Automotive Excellence</p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 font-sans">
          {autos.slice(0, 50).map((auto) => (
            <div key={auto.id} className="group relative transition-all duration-1000">
              <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 group-hover:border-amber-500/50 transition-all shadow-2xl">
                <img src={auto.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={auto.make} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-10">
                  <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-2 font-bold">{auto.year} Edition</p>
                  <h3 className="text-4xl font-light tracking-tighter mb-6">{auto.make}</h3>
                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                    <p className="text-2xl font-bold italic text-neutral-200">${auto.price.toLocaleString()}</p>
                    <button 
                      onClick={() => verDetalles(auto)}
                      className="bg-white text-black px-6 py-4 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all text-center shadow-lg"
                    >
                      ver mas detalles y contactar vendedor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mostrarDetalles && autoSeleccionado && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl">
            <div className="min-h-screen flex items-center justify-center p-4 md:p-10">
              <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(255,255,255,0.05)] relative">
                
                <button onClick={() => setMostrarDetalles(false)} className="absolute top-6 right-6 z-50 bg-black/60 p-4 rounded-full text-white hover:bg-white hover:text-black transition-all border border-white/10">
                  <X size={24} />
                </button>

                <div className="w-full md:w-3/5 h-[400px] md:h-auto relative">
                  <img src={autoSeleccionado.image} className="w-full h-full object-cover" alt="detail" />
                </div>

                <div className="w-full md:w-2/5 p-12 lg:p-16 flex flex-col justify-center bg-[#0d0d0d]">
                  <h2 className="text-5xl font-light tracking-tighter mb-4">{autoSeleccionado.make}</h2>
                  <div className="h-1 w-20 bg-amber-500 mb-8"></div>
                  
                  <p className="text-neutral-400 italic text-lg leading-relaxed mb-8">"{autoSeleccionado.description}"</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="border-l border-white/5 pl-4">
                      <p className="text-[9px] uppercase text-neutral-500 tracking-widest flex items-center gap-2"><Zap size={12}/> Potencia</p>
                      <p className="text-sm font-bold text-neutral-200">{autoSeleccionado.hp || '394'} HP</p>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <p className="text-[9px] uppercase text-neutral-500 tracking-widest flex items-center gap-2"><Timer size={12}/> 0-100 km/h</p>
                      <p className="text-sm font-bold text-neutral-200">{autoSeleccionado.accel || '4.1'}s</p>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <p className="text-[9px] uppercase text-neutral-500 tracking-widest flex items-center gap-2"><Fuel size={12}/> Motor</p>
                      <p className="text-sm font-bold text-neutral-200">{autoSeleccionado.fuel_type}</p>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <p className="text-[9px] uppercase text-neutral-500 tracking-widest flex items-center gap-2"><Activity size={12}/> Recorrido</p>
                      <p className="text-sm font-bold text-neutral-200">{autoSeleccionado.mileage?.toLocaleString()} KM</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setMostrarDetalles(false); setVista('formulario'); window.scrollTo(0,0); }}
                    className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-amber-600 hover:text-white transition-all shadow-2xl"
                  >
                    contactar vendedor de 6r7 cars
                  </button>
                </div>
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
        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/5 p-20 rounded-[4rem] shadow-2xl relative">
          <button onClick={() => setVista('catalogo')} className="absolute top-12 left-12 text-neutral-500 hover:text-white flex items-center gap-2 uppercase text-[10px] tracking-widest transition-all">
            <ArrowLeft size={14}/> Volver
          </button>
          <div className="text-center mb-16">
            <ShieldCheck className="text-amber-500 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-light tracking-tighter uppercase">Concierge 6r7 cars</h2>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] mt-4 italic">Unidad: {autoSeleccionado.make}</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setVista('exito'); }} className="space-y-10">
            <input type="text" placeholder="Nombre Completo" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-all placeholder:text-neutral-800 uppercase text-[10px] tracking-widest" required />
            <input type="email" placeholder="Email de Contacto" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-all placeholder:text-neutral-800 uppercase text-[10px] tracking-widest" required />
            <div className="grid grid-cols-2 gap-12">
               <input type="tel" placeholder="Teléfono" className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 placeholder:text-neutral-800 uppercase text-[10px] tracking-widest" required />
               <input type="text" placeholder="ID Registro" maxLength="7" className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 placeholder:text-neutral-800 uppercase text-[10px] tracking-widest" required />
            </div>
            <button type="submit" className="w-full bg-white text-black py-7 rounded-full font-black uppercase text-[11px] tracking-[0.5em] hover:bg-amber-600 hover:text-white transition-all duration-700 mt-10 shadow-xl">
              Confirmar Interés con 6r7 cars
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-center p-8 font-serif italic text-white">
        <div className="max-w-2xl border border-white/5 p-20 rounded-[4rem] bg-[#0a0a0a]">
          <div className="w-20 h-[1px] bg-amber-500 mx-auto mb-12"></div>
          <h1 className="text-6xl font-light tracking-tighter mb-8">Gestión Iniciada.</h1>
          <p className="text-neutral-400 text-sm tracking-[0.4em] uppercase mb-16 leading-relaxed">
            recibira un email dentro de 6 o 7 dias habiles para coordinar la inspección y entrega de su {autoSeleccionado.make}.
          </p>
          <button onClick={() => setVista('catalogo')} className="text-amber-500/40 hover:text-amber-500 transition-all uppercase text-[9px] tracking-[0.4em] border-b border-amber-500/10 pb-4">Retornar a 6r7 cars</button>
        </div>
      </div>
    );
  }
}

export default App;