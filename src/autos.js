// src/autos.js

const generarImagenes = (nombre) => {
  const query = nombre
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-");

  return {
    delantero: `https://source.unsplash.com/800x600/?${query},car,front`,
    trasero: `https://source.unsplash.com/800x600/?${query},car,rear`,
    interior: `https://source.unsplash.com/800x600/?${query},car,interior`
  };
};

const catalogoAutos = [
  { id: 1, nombre: "Porsche 911 Carrera (992)", ficha: { motor: "3.0L Boxer Bi-Turbo", potencia: "394 PS", torque: "450 Nm", aceleracion: "4.1s", velocidadMax: "294 km/h", transmision: "PDK 8", traccion: "RWD", tecnologia: "PASM" }},
  { id: 2, nombre: "Tesla Model 3 Performance", ficha: { motor: "Dual Motor eléctrico", potencia: "510 hp", torque: "741 Nm", aceleracion: "3.1s", velocidadMax: "262 km/h", transmision: "Direct Drive", traccion: "AWD", tecnologia: "Modo pista" }},
  { id: 3, nombre: "Toyota Hilux SRX", ficha: { motor: "2.8L Turbo Diesel", potencia: "204 hp", torque: "500 Nm", aceleracion: "10.1s", velocidadMax: "175 km/h", transmision: "AT 6", traccion: "4x4", tecnologia: "TSS" }},
  { id: 4, nombre: "Ferrari SF90 Stradale", ficha: { motor: "V8 + eléctricos", potencia: "1000 cv", torque: "800 Nm", aceleracion: "2.5s", velocidadMax: "340 km/h", transmision: "DCT 8", traccion: "AWD", tecnologia: "eSSC" }},
  { id: 5, nombre: "BMW M4 Competition", ficha: { motor: "3.0L TwinTurbo", potencia: "510 hp", torque: "650 Nm", aceleracion: "3.9s", velocidadMax: "290 km/h", transmision: "AT 8", traccion: "RWD", tecnologia: "Diff M" }},
  { id: 6, nombre: "Ford Mustang GT", ficha: { motor: "5.0L V8", potencia: "480 hp", torque: "560 Nm", aceleracion: "4.3s", velocidadMax: "250 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Active exhaust" }},
  { id: 7, nombre: "Lamborghini Revuelto", ficha: { motor: "V12 híbrido", potencia: "1015 cv", torque: "725 Nm", aceleracion: "2.5s", velocidadMax: "350 km/h", transmision: "DCT 8", traccion: "AWD", tecnologia: "Monofuselage" }},
  { id: 8, nombre: "Bugatti Chiron Super Sport", ficha: { motor: "W16 Quad Turbo", potencia: "1600 hp", torque: "1600 Nm", aceleracion: "2.4s", velocidadMax: "440 km/h", transmision: "DSG 7", traccion: "AWD", tecnologia: "Longtail" }},
  { id: 9, nombre: "Jeep Wrangler Rubicon", ficha: { motor: "3.6L V6", potencia: "285 hp", torque: "353 Nm", aceleracion: "7.5s", velocidadMax: "160 km/h", transmision: "AT 8", traccion: "4x4", tecnologia: "Dana 44" }},
  { id: 10, nombre: "Audi RS6 Avant", ficha: { motor: "4.0L V8 BiTurbo", potencia: "600 hp", torque: "800 Nm", aceleracion: "3.6s", velocidadMax: "305 km/h", transmision: "AT 8", traccion: "AWD", tecnologia: "Quattro" }},
  { id: 11, nombre: "Nissan GT-R Nismo", ficha: { motor: "3.8L V6 TT", potencia: "600 hp", torque: "652 Nm", aceleracion: "2.8s", velocidadMax: "315 km/h", transmision: "DCT 6", traccion: "AWD", tecnologia: "ATTESA" }},
  { id: 12, nombre: "Mercedes-AMG G63", ficha: { motor: "4.0L V8 TT", potencia: "585 hp", torque: "850 Nm", aceleracion: "4.5s", velocidadMax: "220 km/h", transmision: "9G", traccion: "AWD", tecnologia: "4Matic" }},
  { id: 13, nombre: "Chevrolet Corvette Z06", ficha: { motor: "5.5L V8", potencia: "670 hp", torque: "623 Nm", aceleracion: "2.6s", velocidadMax: "312 km/h", transmision: "DCT 8", traccion: "RWD", tecnologia: "Flat-plane" }},
  { id: 14, nombre: "Honda Civic Type R", ficha: { motor: "2.0L Turbo", potencia: "315 hp", torque: "420 Nm", aceleracion: "5.4s", velocidadMax: "275 km/h", transmision: "Manual 6", traccion: "FWD", tecnologia: "LSD" }},
  { id: 15, nombre: "Land Rover Defender 110", ficha: { motor: "3.0L Diesel", potencia: "300 hp", torque: "650 Nm", aceleracion: "7.0s", velocidadMax: "191 km/h", transmision: "AT 8", traccion: "AWD", tecnologia: "Terrain Response" }},
  { id: 16, nombre: "McLaren 750S", ficha: { motor: "4.0L V8 TT", potencia: "750 hp", torque: "800 Nm", aceleracion: "2.8s", velocidadMax: "332 km/h", transmision: "SSG 7", traccion: "RWD", tecnologia: "Proactive chassis" }},
  { id: 17, nombre: "Volkswagen Golf R", ficha: { motor: "2.0L TSI", potencia: "320 hp", torque: "420 Nm", aceleracion: "4.7s", velocidadMax: "270 km/h", transmision: "DSG 7", traccion: "AWD", tecnologia: "Drift mode" }},
  { id: 18, nombre: "Dodge Challenger Hellcat Redeye", ficha: { motor: "6.2L V8 SC", potencia: "797 hp", torque: "959 Nm", aceleracion: "3.4s", velocidadMax: "326 km/h", transmision: "AT 8", traccion: "RWD", tecnologia: "Power chiller" }},
  { id: 19, nombre: "Subaru WRX STI", ficha: { motor: "2.5L Boxer", potencia: "310 hp", torque: "407 Nm", aceleracion: "4.9s", velocidadMax: "255 km/h", transmision: "Manual 6", traccion: "AWD", tecnologia: "DCCD" }},
  { id: 20, nombre: "Ram 1500 TRX", ficha: { motor: "6.2L V8 SC", potencia: "702 hp", torque: "881 Nm", aceleracion: "4.5s", velocidadMax: "190 km/h", transmision: "AT 8", traccion: "4x4", tecnologia: "Bilstein" }},
  { id: 21, nombre: "Koenigsegg Jesko Absolut", ficha: { motor: "5.0L V8 TT", potencia: "1600 hp", torque: "1500 Nm", aceleracion: "2.5s", velocidadMax: "500+ km/h", transmision: "LST", traccion: "RWD", tecnologia: "Light Speed" }},
  { id: 22, nombre: "Aston Martin DBS V12", ficha: { motor: "5.2L V12 TT", potencia: "725 hp", torque: "900 Nm", aceleracion: "3.4s", velocidadMax: "340 km/h", transmision: "AT 8", traccion: "RWD", tecnologia: "Carbon brakes" }},
  { id: 23, nombre: "Rimac Nevera", ficha: { motor: "4 motores eléctricos", potencia: "1914 hp", torque: "2360 Nm", aceleracion: "1.81s", velocidadMax: "412 km/h", transmision: "Direct", traccion: "AWD", tecnologia: "Torque vectoring" }},
  { id: 24, nombre: "Toyota GR Yaris", ficha: { motor: "1.6L Turbo", potencia: "261 hp", torque: "360 Nm", aceleracion: "5.5s", velocidadMax: "230 km/h", transmision: "Manual 6", traccion: "AWD", tecnologia: "GR-Four" }},
  { id: 25, nombre: "Cadillac CT5-V Blackwing", ficha: { motor: "6.2L V8 SC", potencia: "668 hp", torque: "893 Nm", aceleracion: "3.4s", velocidadMax: "322 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Magnetic Ride" }},
  { id: 26, nombre: "Lotus Emira V6", ficha: { motor: "3.5L V6 SC", potencia: "400 hp", torque: "420 Nm", aceleracion: "4.3s", velocidadMax: "290 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Hydraulic steering" }},
  { id: 27, nombre: "GMC Hummer EV", ficha: { motor: "Triple motor", potencia: "1000 hp", torque: "1017 Nm", aceleracion: "3.0s", velocidadMax: "170 km/h", transmision: "Direct", traccion: "AWD", tecnologia: "CrabWalk" }},
  { id: 28, nombre: "Alfa Romeo Giulia Quadrifoglio", ficha: { motor: "2.9L V6 TT", potencia: "510 hp", torque: "600 Nm", aceleracion: "3.9s", velocidadMax: "307 km/h", transmision: "AT 8", traccion: "RWD", tecnologia: "Carbon aero" }},
  { id: 29, nombre: "Pagani Huayra BC", ficha: { motor: "6.0L V12 TT", potencia: "800 hp", torque: "1050 Nm", aceleracion: "3.0s", velocidadMax: "370 km/h", transmision: "AMT 7", traccion: "RWD", tecnologia: "Carbotitanium" }},
  { id: 30, nombre: "Ford F-150 Raptor R", ficha: { motor: "5.2L V8 SC", potencia: "720 hp", torque: "868 Nm", aceleracion: "4.4s", velocidadMax: "180 km/h", transmision: "AT 10", traccion: "4x4", tecnologia: "FOX" }},
  { id: 31, nombre: "Maserati MC20", ficha: { motor: "3.0L V6 TT", potencia: "630 hp", torque: "730 Nm", aceleracion: "2.9s", velocidadMax: "325 km/h", transmision: "DCT 8", traccion: "RWD", tecnologia: "Nettuno" }},
  { id: 32, nombre: "BMW M5 Competition", ficha: { motor: "4.4L V8 TT", potencia: "625 hp", torque: "750 Nm", aceleracion: "3.3s", velocidadMax: "305 km/h", transmision: "AT 8", traccion: "AWD", tecnologia: "xDrive" }},
  { id: 33, nombre: "Rolls-Royce Spectre", ficha: { motor: "Dual motor", potencia: "584 hp", torque: "900 Nm", aceleracion: "4.5s", velocidadMax: "250 km/h", transmision: "Direct", traccion: "AWD", tecnologia: "Planar" }},
  { id: 34, nombre: "Audi RS e-tron GT", ficha: { motor: "Dual motor", potencia: "646 hp", torque: "830 Nm", aceleracion: "3.3s", velocidadMax: "250 km/h", transmision: "2-speed", traccion: "AWD", tecnologia: "Rear steering" }},
  { id: 35, nombre: "Bentley Continental GT Speed", ficha: { motor: "6.0L W12", potencia: "659 hp", torque: "900 Nm", aceleracion: "3.6s", velocidadMax: "335 km/h", transmision: "DCT 8", traccion: "AWD", tecnologia: "48V" }},
  { id: 36, nombre: "Range Rover Sport SV", ficha: { motor: "4.4L V8", potencia: "635 hp", torque: "750 Nm", aceleracion: "3.8s", velocidadMax: "290 km/h", transmision: "AT 8", traccion: "AWD", tecnologia: "6D Dynamics" }},
  { id: 37, nombre: "Mazda MX-5 Miata", ficha: { motor: "2.0L NA", potencia: "184 hp", torque: "205 Nm", aceleracion: "6.5s", velocidadMax: "219 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "KPC" }},
  { id: 38, nombre: "Nissan Z Performance", ficha: { motor: "3.0L V6 TT", potencia: "400 hp", torque: "475 Nm", aceleracion: "4.5s", velocidadMax: "250 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Carbon shaft" }},
  { id: 39, nombre: "Hyundai Ioniq 5 N", ficha: { motor: "Dual motor", potencia: "650 hp", torque: "770 Nm", aceleracion: "3.4s", velocidadMax: "260 km/h", transmision: "e-Shift", traccion: "AWD", tecnologia: "Drift mode" }},
  { id: 40, nombre: "Gordon Murray T.50", ficha: { motor: "3.9L V12", potencia: "663 hp", torque: "467 Nm", aceleracion: "2.8s", velocidadMax: "363 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Fan aero" }},
  { id: 41, nombre: "Ford Bronco Raptor", ficha: { motor: "3.0L V6 TT", potencia: "418 hp", torque: "596 Nm", aceleracion: "6.0s", velocidadMax: "161 km/h", transmision: "AT 10", traccion: "4x4", tecnologia: "HOSS" }},
  { id: 42, nombre: "Porsche 718 Cayman GT4 RS", ficha: { motor: "4.0L Flat-6", potencia: "500 hp", torque: "450 Nm", aceleracion: "3.4s", velocidadMax: "315 km/h", transmision: "PDK 7", traccion: "RWD", tecnologia: "GT3 derived" }},
  { id: 43, nombre: "Ariel Atom 4", ficha: { motor: "2.0L Turbo", potencia: "320 hp", torque: "420 Nm", aceleracion: "2.8s", velocidadMax: "261 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "Tubular chassis" }},
  { id: 44, nombre: "Chevrolet Silverado EV", ficha: { motor: "Dual motor", potencia: "754 hp", torque: "1064 Nm", aceleracion: "4.5s", velocidadMax: "180 km/h", transmision: "Direct", traccion: "AWD", tecnologia: "4WS" }},
  { id: 45, nombre: "Ferrari Purosangue", ficha: { motor: "6.5L V12", potencia: "725 hp", torque: "716 Nm", aceleracion: "3.3s", velocidadMax: "310 km/h", transmision: "DCT 8", traccion: "AWD", tecnologia: "Active suspension" }},
  { id: 46, nombre: "Lamborghini Urus Performante", ficha: { motor: "4.0L V8 TT", potencia: "666 hp", torque: "850 Nm", aceleracion: "3.3s", velocidadMax: "306 km/h", transmision: "AT 8", traccion: "AWD", tecnologia: "Rally mode" }},
  { id: 47, nombre: "Zenvo Aurora Tur", ficha: { motor: "V12 híbrido", potencia: "1450 hp", torque: "1400 Nm", aceleracion: "2.3s", velocidadMax: "450 km/h", transmision: "7-speed", traccion: "AWD", tecnologia: "Carbon mono" }},
  { id: 48, nombre: "Lucid Air Sapphire", ficha: { motor: "Triple motor", potencia: "1234 hp", torque: "1939 Nm", aceleracion: "1.89s", velocidadMax: "330 km/h", transmision: "Direct", traccion: "AWD", tecnologia: "Torque vectoring" }},
  { id: 49, nombre: "Lexus LFA", ficha: { motor: "4.8L V10", potencia: "560 hp", torque: "480 Nm", aceleracion: "3.7s", velocidadMax: "325 km/h", transmision: "ASG 6", traccion: "RWD", tecnologia: "Yamaha exhaust" }},
  { id: 50, nombre: "Gordon Murray T.33", ficha: { motor: "3.9L V12", potencia: "615 hp", torque: "451 Nm", aceleracion: "2.9s", velocidadMax: "335 km/h", transmision: "Manual 6", traccion: "RWD", tecnologia: "iStream" }}
];

export default catalogoAutos.map(auto => ({
  ...auto,
  imagenes: generarImagenes(auto.nombre)
}));