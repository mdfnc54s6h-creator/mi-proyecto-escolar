import React, { useState } from 'react';
import { generarAutos } from './autos';
import { X, MessageCircle, Send, ShieldCheck, ArrowLeft } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [botAbierto, setBotAbierto] = useState(false);

  const numeroWhatsApp = "1234567890"; 

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">
      
      {/* BOT VIP FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-[200]">
        {botAbierto ? (
          <div className="bg-[#0f0f0f] border border-white/10 w-72 rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-white p-4 flex justify-between items-center text-black">
              <span className="font-black text-[9px] uppercase tracking-[0.2em]">Asistente 6r7</span>
              <button onClick={() => setBotAbierto(false)}><X size={16}/></button>
            </div>
            <div className="p-5 bg-black/40 text-[10px] italic text-neutral-400 leading-relaxed">
              "Bienvenido a la experiencia 6r7. ¿Desea consultar disponibilidad de una unidad?"
            </div>
            <div className="p-4 border-t border-white/5">
              <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-xl font-bold text-[9px] uppercase hover:bg-amber-500 transition-all">
                Contactar VIP <Send size={12}/>
              </a>
            </div>
          </div>
        ) : (
          <button onClick={() => setBotAbierto(true)} className="bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-black">
            <MessageCircle size={28} />
          </button>
        )}
      </div>

      <header className="py-12 text-center border-b border-white/5">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter">6r7 cars</h1>
        <p className="text-amber-500 text-[9px] tracking-[0.7em] uppercase mt-2 opacity-80">The Master Collection</p>
      </header>

      {vista === 'catalogo' && (
        <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {autos.map((auto) => (
            <div key={auto.id} className="group rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-4 hover:border-amber-500/30 transition-all">
              <img src={auto.images[0]} className="w-full h-48 object-cover rounded-[1.5rem] mb-4 grayscale group-hover:grayscale-0 transition-all" alt="car" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-light italic leading-tight">{auto.make}</h3>
                <span className="text-amber-500 text-[9px] font-bold">{auto.year}</span>
              </div>
              <button onClick={() => { setAutoSeleccionado(auto); setVista('detalles'); }} className="w-full mt-4 bg-white/5 border border-white/10 py-3 rounded-xl text-[9px] font-bold uppercase hover:bg-white hover:text-black transition-all">Ver Ficha</button>
            </div>
          ))}
        </main>
      )}

      {vista === 'detalles' && autoSeleccionado && (
        <div className="max-w-4xl mx-auto p-6 md:p-12 bg-[#0a0a0a] rounded-[3rem] border border-white/10 mt-10 mx-4">
          <button onClick={() => setVista('catalogo')} className="mb-8 text-neutral-500 uppercase text-[9px] flex items-center gap-2 hover:text-white transition-all"><ArrowLeft size={14}/> Volver al catálogo</button>
          <img src={autoSeleccionado.images[0]} className="w-full h-64 md:h-96 object-cover rounded-[2rem] mb-8 shadow-2xl" alt="car" />
          <h2 className="text-4xl font-black italic mb-6 uppercase">{autoSeleccionado.make}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] text-neutral-400 mb-10">
            <p className="bg-white/5 p-4 rounded-xl border border-white/5">MOTOR: <span className="text-white font-bold ml-2">{autoSeleccionado.specs.motor}</span></p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/5">POTENCIA: <span className="text-white font-bold ml-2">{autoSeleccionado.hp} HP</span></p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/5">0-100 KM/H: <span className="text-white font-bold ml-2">{autoSeleccionado.accel}s</span></p>
            <p className="bg-white/5 p-4 rounded-xl border border-white/5">MÁXIMA: <span className="text-white font-bold ml-2">{autoSeleccionado.specs.topSpeed}</span></p>
          </div>
          <button onClick={() => setVista('exito')} className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-all">Solicitar Información</button>
        </div>
      )}

      {vista === 'exito' && (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <ShieldCheck size={64} className="text-amber-500 mb-6 animate-pulse"/>
          <h2 className="text-3xl font-black uppercase italic mb-2">Solicitud Enviada</h2>
          <p className="text-neutral-500 text-[10px] tracking-widest uppercase">Un concierge VIP le contactará pronto</p>
          <button onClick={() => setVista('catalogo')} className="mt-10 text-amber-500 text-[9px] uppercase border-b border-amber-500/30 pb-1 hover:text-white hover:border-white transition-all">Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default App;