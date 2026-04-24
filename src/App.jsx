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

  const finalizarCompra = (e) => {
    e.preventDefault();
    setVista('exito');
  };

  // --- VISTA 1: CATÁLOGO ---
  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-4 font-sans">
        <header className="text-center py-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            Luxury Dealer
          </h1>
          <p className="text-slate-400 text-lg">La colección más exclusiva de 50 vehículos</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {autos.map((auto) => (
            <div key={auto.id} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="relative overflow-hidden">
                <img src={auto.image} className="w-full h-56 object-cover transform group-hover:scale-110 transition-duration-500" alt="auto" />
                <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {auto.category}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-1">{auto.make}</h3>
                <p className="text-blue-400 text-3xl font-black mb-4">${auto.price.toLocaleString()}</p>
                <button 
                  onClick={() => verDetalles(auto)}
                  className="w-full bg-slate-700 hover:bg-blue-600 text-white font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Info size={18} className="group-hover:rotate-12 transition-transform" />
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DE DETALLES */}
        {mostrarDetalles && autoSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
              <button onClick={() => setMostrarDetalles(false)} className="absolute top-6 right-6 z-10 bg-black/50 p-2 rounded-full hover:bg-red-500 transition-colors">
                <X size={24} />
              </button>
              
              <img src={autoSeleccionado.image} className="w-full h-72 object-cover" alt="detalle" />
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-white">{autoSeleccionado.make}</h2>
                    <p className="text-blue-400 font-bold text-xl">{autoSeleccionado.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm uppercase tracking-widest">Precio Final</p>
                    <p className="text-3xl font-black text-emerald-400">${autoSeleccionado.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800 p-4 rounded-2xl flex items-center gap-3">
                    <Fuel className="text-blue-400" />
                    <div><p className="text-xs text-slate-400">Combustible</p><p className="font-bold">{autoSeleccionado.fuel_type}</p></div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl flex items-center gap-3">
                    <Gauge className="text-blue-400" />
                    <div><p className="text-xs text-slate-400">Millaje</p><p className="font-bold">{autoSeleccionado.mileage.toLocaleString()} km</p></div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl flex items-center gap-3">
                    <Palette className="text-blue-400" />
                    <div><p className="text-xs text-slate-400">Color</p><p className="font-bold">{autoSeleccionado.color}</p></div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl flex items-center gap-3">
                    <Calendar className="text-blue-400" />
                    <div><p className="text-xs text-slate-400">Estado</p><p className="font-bold">Disponible</p></div>
                  </div>
                </div>

                <p className="text-slate-300 italic mb-8 border-l-4 border-blue-500 pl-4">"{autoSeleccionado.description}"</p>

                <button 
                  onClick={irAFormulario}
                  className="w-full bg-[#1e293b] hover:bg-[#334155] border-2 border-blue-500/50 text-white font-black py-4 rounded-2xl text-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3"
                >
                  <Phone size={24} />
                  Contactar Vendedor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- VISTA 2: FORMULARIO ---
  if (vista === 'formulario') {
    return (
      <div className="min-h-screen bg-[#0f172a] p-6 flex items-center justify-center font-sans">
        <div className="bg-slate-800 border border-slate-700 p-10 rounded-[3rem] shadow-2xl max-w-lg w-full relative">
          <button onClick={() => setVista('catalogo')} className="absolute -top-12 left-0 flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
            <ArrowLeft size={24} className="mr-2" /> Volver al catálogo
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Solicitud de Compra</h2>
            <p className="text-slate-400">Estás a un paso de tu <span className="text-blue-400 font-bold">{autoSeleccionado.make}</span></p>
          </div>

          <form onSubmit={finalizarCompra} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-2">Tu Identidad</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input type="text" placeholder="Nombre Completo" className="w-full bg-slate-900 border border-slate-600 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-2">Contacto Directo</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input type="email" placeholder="Correo Electrónico" className="w-full bg-slate-900 border border-slate-600 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input type="tel" placeholder="Teléfono" className="w-full bg-slate-900 border border-slate-600 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 transition-all" required />
              </div>
              <div className="relative">
                <CreditCard className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input type="text" placeholder="Cédula (7 dig)" maxLength="7" pattern="\d{7}" className="w-full bg-slate-900 border border-slate-600 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-500 transition-all" required />
              </div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl text-center">
              <p className="text-blue-400 text-sm font-bold italic">✨ Pago Seguro & Entrega VIP ✨</p>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black py-5 rounded-[2rem] text-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all active:scale-95">
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- VISTA 3: ÉXITO ---
  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-emerald-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <CheckCircle size={60} className="text-emerald-500" />
          </div>
          <h1 className="text-5xl font-black text-white mb-6">¡FELICIDADES!</h1>
          <div className="bg-slate-800 border-2 border-emerald-500/30 p-8 rounded-[3rem] mb-10 shadow-2xl">
            <p className="text-emerald-400 text-2xl font-bold mb-2">Pago Realizado con Éxito</p>
            <p className="text-white text-xl">
              Su vehículo será entregado dentro de <span className="text-emerald-400 font-black underline">6 o 7 días hábiles</span>.
            </p>
          </div>
          <button 
            onClick={() => setVista('catalogo')}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full transition-all"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }
}

export default App;