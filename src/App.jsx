import React, { useState } from 'react';
import { generarAutos } from './autos';
import { X, ArrowLeft, CheckCircle, Info, Phone, Fuel, Gauge, ShieldCheck } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const verDetalles = (auto) => {
    setAutoSeleccionado(auto);
    setMostrarDetalles(true);
  };

  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-serif">
        <header className="relative py-24 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-[#050505]">
          <div className="text-center">
            <h1 className="text-7xl font-black tracking-tighter uppercase italic bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-2">
              Luxury Dealer
            </h1>
            <p className="text-neutral-500 tracking-[0.8em] text-[10px] uppercase">The Pinnacle of Automotive Excellence</p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 font-sans">
          {autos.slice(0, 50).map((auto) => (
            <div key={auto.id} className="group relative transition-all duration-1000">
              <div className="relative h-[450px] overflow-hidden rounded-[2rem] border border-white/10 group-hover:border-white/30 transition-all shadow-2xl">
                <img src={auto.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="car" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-10">
                  <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-2 font-bold">{auto.year} Edition</p>
                  <h3 className="text-4xl font-light tracking-tighter mb-6">{auto.make}</h3>
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <p className="text-2xl font-bold italic">${auto.price.toLocaleString()}</p>
                    <button 
                      onClick={() => verDetalles(auto)}
                      className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mostrarDetalles && autoSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/98 backdrop-blur-3xl">
            <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 h-[500px] md:h-auto relative">
                <img src={autoSeleccionado.image} className="w-full h-full object-cover" alt="detail" />
                <button onClick={() => setMostrarDetalles(false)} className="absolute top-8 left-8 bg-black/50 p-4 rounded-full text-white hover:bg-white hover:text-black transition-all">
                  <X size={24} />
                </button>
              </div>
              <div className="w-full md:w-2/5 p-16 flex flex-col justify-center">
                <h2 className="text-5xl font-light tracking-tighter mb-4">{autoSeleccionado.make}</h2>
                <div className="h-1 w-20 bg-amber-500 mb-8"></div>
                <p className="text-neutral-400 italic text-lg leading-relaxed mb-10">"{autoSeleccionado.description}"</p>
                <div className="flex gap-8 mb-12 text-neutral-500 uppercase text-[10px] tracking-[0.2em]">
                  <span className="flex items-center gap-2"><Fuel size={14}/> {autoSeleccionado.fuel_type}</span>
                  <span className="flex items-center gap-2"><Gauge size={14}/> {autoSeleccionado.mileage.toLocaleString()} KM</span>
                </div>
                <button 
                  onClick={() => { setMostrarDetalles(false); setVista('formulario'); window.scrollTo(0,0); }}
                  className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-amber-500 hover:text-white transition-all shadow-xl"
                >
                  Inquire Acquisition
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
        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/5 p-20 rounded-[4rem] shadow-2xl relative">
          <button onClick={() => setVista('catalogo')} className="absolute top-12 left-12 text-neutral-500 hover:text-white flex items-center gap-2 uppercase text-[10px] tracking-widest transition-all">
            <ArrowLeft size={14}/> Return
          </button>
          <div className="text-center mb-16">
            <ShieldCheck className="text-amber-500 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-light tracking-tighter text-white uppercase">Client Registration</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setVista('exito'); }} className="space-y-10">
            <input type="text" placeholder="Full Legal Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-amber-500 transition-all placeholder:text-neutral-700 uppercase text-[10px] tracking-widest" required />
            <input type="email" placeholder="Private Email" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-amber-500 transition-all placeholder:text-neutral-700 uppercase text-[10px] tracking-widest" required />
            <div className="grid grid-cols-2 gap-12">
               <input type="tel" placeholder="Mobile" className="bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-amber-500 placeholder:text-neutral-700 uppercase text-[10px] tracking-widest" required />
               <input type="text" placeholder="ID Number" maxLength="7" className="bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-amber-500 placeholder:text-neutral-700 uppercase text-[10px] tracking-widest" required />
            </div>
            <button type="submit" className="w-full bg-white text-black py-7 rounded-full font-black uppercase text-xs tracking-[0.5em] hover:bg-amber-500 hover:text-white transition-all duration-700 mt-10">
              Confirm Interest
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-center p-8 font-serif italic text-white">
        <div className="max-w-xl">
          <h1 className="text-7xl text-white font-light tracking-tighter mb-8">Access Granted.</h1>
          <button onClick={() => setVista('catalogo')} className="text-white/20 hover:text-white transition-all uppercase text-[9px] tracking-[0.4em] border-b border-white/5 pb-4">Exit Gallery</button>
        </div>
      </div>
    );
  }
}

export default App;