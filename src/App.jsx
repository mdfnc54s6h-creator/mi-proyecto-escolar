import React, { useState } from 'react';
import { generarAutos } from './autos';
import { X, ArrowLeft, CheckCircle, Info, Phone, User, Mail, CreditCard, Calendar, Fuel, Gauge, Palette } from 'lucide-react';

const autos = generarAutos();

function App() {
  const [vista, setVista] = useState('catalogo'); 
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const verDetalles = (auto) => {
    setAutoSeleccionado(auto);
    setMostrarDetalles(true);
  };

  const irAFormulario = () => {
    setMostrarDetalles(false);
    setVista('formulario');
    window.scrollTo(0, 0);
  };

  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-4 font-sans">
        <header className="text-center py-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            Luxury Dealer
          </h1>
          <p className="text-slate-400 text-lg">Exclusividad en 50 vehículos</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {autos.map((auto) => (
            <div key={auto.id} className="bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all">
              <img src={auto.image} className="w-full h-56 object-cover" alt="auto" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-1">{auto.make}</h3>
                <p className="text-blue-400 text-3xl font-black mb-4">${auto.price.toLocaleString()}</p>
                <button 
                  onClick={() => verDetalles(auto)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Info size={18} /> Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {mostrarDetalles && autoSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <button onClick={() => setMostrarDetalles(false)} className="absolute top-6 right-6 z-10 bg-black/50 p-2 rounded-full hover:bg-red-500 transition-colors">
                <X size={24} />
              </button>
              <img src={autoSeleccionado.image} className="w-full h-64 object-cover" alt="detalle" />
              <div className="p-8">
                <h2 className="text-3xl font-black mb-4">{autoSeleccionado.make} ({autoSeleccionado.year})</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 p-3 rounded-xl flex items-center gap-2 text-sm"><Fuel size={16}/> {autoSeleccionado.fuel_type}</div>
                  <div className="bg-slate-800 p-3 rounded-xl flex items-center gap-2 text-sm"><Gauge size={16}/> {autoSeleccionado.mileage.toLocaleString()} km</div>
                </div>
                <p className="text-slate-300 italic mb-8 border-l-4 border-blue-500 pl-4">{autoSeleccionado.description}</p>
                <button 
                  onClick={irAFormulario}
                  className="w-full bg-[#1e293b] hover:bg-blue-900 border-2 border-blue-500 text-white font-black py-4 rounded-2xl text-xl shadow-lg flex items-center justify-center gap-3 transition-all"
                >
                  <Phone size={24} /> Contactar Vendedor
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
      <div className="min-h-screen bg-[#0f172a] p-6 flex items-center justify-center">
        <div className="bg-slate-800 border border-slate-700 p-10 rounded-[3rem] shadow-2xl max-w-lg w-full relative">
          <button onClick={() => setVista('catalogo')} className="absolute -top-12 left-0 text-blue-400 font-bold flex items-center">
            <ArrowLeft size={20} className="mr-2"/> Volver
          </button>
          <h2 className="text-3xl font-black text-center text-white mb-6">Solicitud para {autoSeleccionado.make}</h2>
          <form onSubmit={(e) => { e.preventDefault(); setVista('exito'); }} className="space-y-4">
            <input type="text" placeholder="Nombre Completo" className="w-full bg-slate-900 border border-slate-600 p-4 rounded-2xl text-white outline-none focus:border-blue-500" required />
            <input type="email" placeholder="Correo Electrónico" className="w-full bg-slate-900 border border-slate-600 p-4 rounded-2xl text-white outline-none focus:border-blue-500" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Teléfono" className="w-full bg-slate-900 border border-slate-600 p-4 rounded-2xl text-white outline-none" required />
              <input type="text" placeholder="Cédula (7 dig)" maxLength="7" className="w-full bg-slate-900 border border-slate-600 p-4 rounded-2xl text-white outline-none" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-[2rem] text-xl shadow-xl transition-all">
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 text-center">
        <div>
          <CheckCircle size={80} className="text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl font-black text-white mb-4">¡RESERVA EXITOSA!</h1>
          <p className="text-slate-300 text-xl max-w-md">Tu {autoSeleccionado.make} llegará en <span className="text-emerald-400 font-bold underline">6-7 días hábiles</span>.</p>
          <button onClick={() => setVista('catalogo')} className="mt-10 text-blue-400 font-bold hover:underline">Volver al inicio</button>
        </div>
      </div>
    );
  }
}

export default App; 