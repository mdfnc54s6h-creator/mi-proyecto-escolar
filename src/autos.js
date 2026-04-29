// src/autos.js

const generarImagenes = (nombre) => {
  const query = nombre.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, "-");
  return {
    delantero: `https://source.unsplash.com/800x600/?${query},car,front`,
    trasero: `https://source.unsplash.com/800x600/?${query},car,rear`,
    interior: `https://source.unsplash.com/800x600/?${query},car,interior`,
  };
};

const tasa = 60;

const autos = [
  {
    id: 1,
    nombre: "Porsche 911 Carrera (992)",
    precioUSD: 125000,
    descripcion: "Motor: 3.0L Boxer Bi-Turbo. Potencia: 394 PS. Torque: 450 Nm. 0-100 km/h: 4.1s. Velocidad Máx: 294 km/h. Transmisión: PDK 8 velocidades. Tracción: RWD. Tecnología: PASM y frenos monobloque."
  },
  {
    id: 2,
    nombre: "Tesla Model 3 Performance",
    precioUSD: 55000,
    descripcion: "Motor: Dual eléctrico. Potencia: 510 hp. Torque: 741 Nm. 0-100 km/h: 3.1s. Velocidad Máx: 262 km/h. Tracción: AWD. Tecnología: modo pista y frenado regenerativo."
  },
  {
    id: 3,
    nombre: "Toyota Hilux SRX",
    precioUSD: 48000,
    descripcion: "Motor: 2.8L Turbo Diesel. Potencia: 204 hp. Torque: 500 Nm. 0-100 km/h: 10.1s. Tracción: 4x4. Tecnología: Toyota Safety Sense."
  },
  {
    id: 4,
    nombre: "Ferrari SF90 Stradale",
    precioUSD: 520000,
    descripcion: "Motor: V8 + 3 eléctricos. Potencia: 1000 hp. Torque: 800 Nm. 0-100 km/h: 2.5s. Tracción: AWD. Tecnología: eSSC y aerodinámica activa."
  },
  {
    id: 5,
    nombre: "BMW M4 Competition",
    precioUSD: 85000,
    descripcion: "Motor: 3.0L Twin Turbo. Potencia: 510 hp. Torque: 650 Nm. 0-100 km/h: 3.9s. Tracción: RWD. Tecnología: diferencial M activo."
  },

  // 🔥 NO, no desaparecieron… aquí siguen todos:

  { id: 6, nombre: "Ford Mustang GT", precioUSD: 60000, descripcion: "Motor: V8 5.0L. Potencia: 480 hp. Torque: 560 Nm. 0-100: 4.3s." },
  { id: 7, nombre: "Lamborghini Revuelto", precioUSD: 600000, descripcion: "Motor: V12 híbrido. Potencia: 1015 hp. 0-100: 2.5s." },
  { id: 8, nombre: "Bugatti Chiron Super Sport", precioUSD: 3900000, descripcion: "Motor: W16 quad-turbo. Potencia: 1600 hp. Velocidad: 440 km/h." },
  { id: 9, nombre: "Jeep Wrangler Rubicon", precioUSD: 55000, descripcion: "Motor: V6 3.6L. Potencia: 285 hp. 4x4 extremo." },
  { id: 10, nombre: "Audi RS6 Avant", precioUSD: 120000, descripcion: "Motor: V8 BiTurbo. Potencia: 600 hp. 0-100: 3.6s." },

  { id: 11, nombre: "Nissan GT-R Nismo", precioUSD: 210000, descripcion: "Motor: V6 Twin Turbo. Potencia: 600 hp. 0-100: 2.8s." },
  { id: 12, nombre: "Mercedes AMG G63", precioUSD: 180000, descripcion: "Motor: V8 Biturbo. Potencia: 585 hp. 4x4 lujo." },
  { id: 13, nombre: "Corvette Z06", precioUSD: 110000, descripcion: "Motor: V8 LT6. Potencia: 670 hp. 0-100: 2.6s." },
  { id: 14, nombre: "Civic Type R", precioUSD: 45000, descripcion: "Motor: 2.0L Turbo. Potencia: 315 hp. FWD." },
  { id: 15, nombre: "Defender 110", precioUSD: 75000, descripcion: "Motor: 3.0L. Potencia: 300 hp. Off-road premium." },

  { id: 16, nombre: "McLaren 750S", precioUSD: 330000, descripcion: "Motor: V8 TT. Potencia: 750 hp. 0-100: 2.8s." },
  { id: 17, nombre: "Golf R", precioUSD: 48000, descripcion: "Motor: 2.0 TSI. Potencia: 320 hp. AWD." },
  { id: 18, nombre: "Hellcat Redeye", precioUSD: 95000, descripcion: "Motor: V8 Supercharged. Potencia: 797 hp." },
  { id: 19, nombre: "WRX STI", precioUSD: 42000, descripcion: "Motor: 2.5 Turbo. AWD rally." },
  { id: 20, nombre: "RAM TRX", precioUSD: 95000, descripcion: "Motor: V8 Hellcat. 702 hp. Off-road." },

  { id: 21, nombre: "Koenigsegg Jesko", precioUSD: 3200000, descripcion: "Motor: V8 TT. 1600 hp." },
  { id: 22, nombre: "Aston Martin DBS", precioUSD: 330000, descripcion: "Motor: V12. 725 hp." },
  { id: 23, nombre: "Rimac Nevera", precioUSD: 2000000, descripcion: "Motor: eléctrico. 1914 hp." },
  { id: 24, nombre: "GR Yaris", precioUSD: 45000, descripcion: "Motor: 3 cilindros turbo AWD." },
  { id: 25, nombre: "Cadillac Blackwing", precioUSD: 95000, descripcion: "Motor: V8 SC. 668 hp." },

  { id: 26, nombre: "Lotus Emira", precioUSD: 85000, descripcion: "Motor: V6 SC. 400 hp." },
  { id: 27, nombre: "Hummer EV", precioUSD: 110000, descripcion: "Motor: eléctrico. 1000 hp." },
  { id: 28, nombre: "Giulia Quadrifoglio", precioUSD: 85000, descripcion: "Motor: V6 TT. 510 hp." },
  { id: 29, nombre: "Pagani Huayra", precioUSD: 3500000, descripcion: "Motor: V12 TT. 800 hp." },
  { id: 30, nombre: "Raptor R", precioUSD: 110000, descripcion: "Motor: V8 SC. 720 hp." },

  { id: 31, nombre: "Maserati MC20", precioUSD: 220000, descripcion: "Motor: V6 TT. 630 hp." },
  { id: 32, nombre: "BMW M5", precioUSD: 120000, descripcion: "Motor: V8 TT. 625 hp." },
  { id: 33, nombre: "Rolls Royce Spectre", precioUSD: 420000, descripcion: "Motor: eléctrico lujo." },
  { id: 34, nombre: "Audi RS e-tron GT", precioUSD: 140000, descripcion: "Motor: eléctrico. 646 hp." },
  { id: 35, nombre: "Bentley GT Speed", precioUSD: 300000, descripcion: "Motor: W12. 659 hp." },

  { id: 36, nombre: "Range Rover SV", precioUSD: 180000, descripcion: "Motor: V8 TT. 635 hp." },
  { id: 37, nombre: "Mazda Miata", precioUSD: 35000, descripcion: "Ligero, RWD, divertido." },
  { id: 38, nombre: "Nissan Z", precioUSD: 55000, descripcion: "V6 TT. 400 hp." },
  { id: 39, nombre: "Ioniq 5 N", precioUSD: 70000, descripcion: "Eléctrico deportivo 650 hp." },
  { id: 40, nombre: "Gordon Murray T50", precioUSD: 3000000, descripcion: "V12 NA. 12,000 rpm." },

  { id: 41, nombre: "Bronco Raptor", precioUSD: 90000, descripcion: "Off-road extremo." },
  { id: 42, nombre: "Cayman GT4 RS", precioUSD: 180000, descripcion: "Motor GT3 derivado." },
  { id: 43, nombre: "Ariel Atom 4", precioUSD: 90000, descripcion: "Peso pluma brutal." },
  { id: 44, nombre: "Silverado EV", precioUSD: 75000, descripcion: "Pickup eléctrica." },
  { id: 45, nombre: "Ferrari Purosangue", precioUSD: 400000, descripcion: "SUV V12 Ferrari." },

  { id: 46, nombre: "Lamborghini Urus", precioUSD: 250000, descripcion: "SUV 666 hp." },
  { id: 47, nombre: "Zenvo Aurora", precioUSD: 2800000, descripcion: "V12 híbrido 1450 hp." },
  { id: 48, nombre: "Lucid Sapphire", precioUSD: 250000, descripcion: "Eléctrico 1200+ hp." },
  { id: 49, nombre: "Lexus LFA", precioUSD: 700000, descripcion: "V10 legendario." },
  { id: 50, nombre: "Gordon Murray T33", precioUSD: 1800000, descripcion: "V12 purista." }
];

export default autos.map(auto => ({
  ...auto,
  precioDOP: auto.precioUSD * tasa,
  imagenes: generarImagenes(auto.nombre)
}));