import React, { useState, useEffect } from 'react';
import { generarAutos } from './autos';
import { X, MessageCircle, Send, ShieldCheck, ArrowLeft } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [botAbierto, setBotAbierto] = useState(false);

  const numeroWhatsApp = "1234567890"; // Cambia por tu número

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      
      {/* BOT VIP - EL QUE QUEREMOS ACTIVAR */}
      <div className="fixed bottom-6 right-6 z-[200]">
        {botAbierto ? (
          <div className="bg-[#0f0f0f] border border-white/10 w-80 rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="bg-white p-4 flex justify-between items-center text-black">
              <span className="font-black text-[10px] uppercase tracking-widest">Asistente 6r7</span>
              <button onClick={() => setBotAbierto(false)}><X size={18}/></button>
            </div>
            <div className="p-6 bg-black/40 text-[11px] italic text-neutral-300">
              "Bienvenido. ¿Desea recibir el catálogo PDF o hablar con un asesor VIP?"
            </div>
            <div className="p-4">
              <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-xl font-bold text-[9px] uppercase hover:bg-amber-500 transition-all">
                Ir a WhatsApp <Send size={14}/>
              </a>
            </div>
          </div>
        ) : (
          <button onClick={() => setBotAbierto(true)} className="bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
            <MessageCircle size={28} />
          </button>
        )}
      </div>

      <header className="py-16 text-center">
        <h1 className="text-6xl font-black italic uppercase tracking-tighter">6r7 cars</h1>
        <p className="text-amber-500 text-[10px] tracking-[0.8em] uppercase mt-2">The Collection</p>
      </header>

      {vista === 'catalogo' && (
        <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {autos.map((auto) => (
            <div key={auto.id} className="rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-4">
              <img src={auto.images[0]} className="w-full h-48 object-cover rounded-[1.5rem] mb-4" alt="car" />
              <p className="text-amber-500 text-[9px] font-bold uppercase">{auto.year}</p>
              <h3 className="text-xl font-light italic mb-4">{auto.make}</h3>
              <button onClick={() => { setAutoSeleccionado(auto); setVista('detalles'); }} className="w-full bg-white/5 border border-white/10 py-3 rounded-xl text-[9px] font-bold uppercase hover:bg-white hover:text-black transition-all">Explorar</button>
            </div>
          ))}
        </main>
      )}

      {vista === 'detalles' && autoSeleccionado && (
        <div className="max-w-4xl mx-auto p-10 bg-[#0a0a0a] rounded-[3rem] border border-white/10 mt-10">
          <button onClick={() => setVista('catalogo')} className="mb-8 text-neutral-500 uppercase text-[9px] flex items-center gap-2"><ArrowLeft size={14}/> Volver</button>
          <img src={autoSeleccionado.images[0]} className="w-full h-96 object-cover rounded-[2rem] mb-8" alt="car" />
          <h2 className="text-4xl font-black italic mb-4">{autoSeleccionado.make}</h2>
          <div className="grid grid-cols-2 gap-4 text-[10px] text-neutral-400 mb-10">
            <p className="border-b border-white/5 pb-2">MOTOR: {autoSeleccionado.specs.motor}</p>
            <p className="border-b border-white/5 pb-2">POTENCIA: {autoSeleccionado.hp} HP</p>
          </div>
          <button onClick={() => setVista('exito')} className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[10px]">Reservar Unidad</button>
        </div>
      )}

      {vista === 'exito' && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <ShieldCheck size={60} className="text-amber-500 mb-6"/>
          <h2 className="text-2xl font-black uppercase italic">Solicitud Recibida</h2>
          <button onClick={() => setVista('catalogo')} className="mt-8 text-amber-500 text-[10px] uppercase border-b border-amber-500 pb-1">Regresar</button>
        </div>
      )}
    </div>
  );
}

export default App;