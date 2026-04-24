import React, { useState } from 'react';
import { generarAutos } from './autos';
import { X, ArrowLeft, CheckCircle } from 'lucide-react';

const autos = generarAutos();

function App() {
  // Estados para la navegación
  const [vista, setVista] = useState('catalogo'); // 'catalogo', 'formulario', 'exito'
  const [autoSeleccionado, setAutoSeleccionado] = useState(null);

  // Función para ir al formulario
  const irAComprar = (auto) => {
    setAutoSeleccionado(auto);
    setVista('formulario');
    window.scrollTo(0, 0);
  };

  // Al completar el formulario
  const finalizarCompra = (e) => {
    e.preventDefault();
    setVista('exito');
  };

  // --- VISTA 1: CATÁLOGO ---
  if (vista === 'catalogo') {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">6R7 CARS: 350 Vehículos</h1>
          <p className="text-gray-400">Selecciona tu próximo auto de lujo</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {autos.map((auto) => (
            <div key={auto.id} className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
              <img src={auto.image} className="w-full h-48 object-cover" alt="auto" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{auto.make} {auto.model}</h3>
                <p className="text-green-500 text-2xl font-bold my-2">${auto.price.toLocaleString()}</p>
                <button 
                  onClick={() => irAComprar(auto)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all"
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- VISTA 2: FORMULARIO (La "otra página") ---
  if (vista === 'formulario') {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl max-w-md w-full">
          <button onClick={() => setVista('catalogo')} className="flex items-center text-blue-600 mb-6 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Volver al catálogo
          </button>
          
          <h2 className="text-2xl font-bold mb-2">Finalizar Compra</h2>
          <p className="text-gray-500 mb-6">Estás adquiriendo un <strong>{autoSeleccionado.make} {autoSeleccionado.model}</strong></p>

          <form onSubmit={finalizarCompra} className="space-y-4">
            <input type="text" placeholder="Nombre Completo" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" placeholder="Correo Electrónico" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="tel" placeholder="Teléfono" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Cédula (7 dígitos)" maxLength="7" pattern="\d{7}" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" required />
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 font-semibold text-center italic">
                * Simulación de pago seguro activada *
              </p>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-transform active:scale-95">
              Confirmar Pago y Pedido
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- VISTA 3: ÉXITO ---
  if (vista === 'exito') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <div className="max-w-sm">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">¡PAGO REALIZADO!</h1>
          <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl mb-8">
            <p className="text-green-800 text-xl font-medium">
              Su vehículo será entregado dentro de **6 o 7 días hábiles**.
            </p>
          </div>
          <p className="text-gray-500 mb-8">Gracias por confiar en Luxury Dealer. Hemos enviado un comprobante a su correo.</p>
          <button 
            onClick={() => setVista('catalogo')}
            className="text-blue-600 font-bold hover:underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
}

export default App;