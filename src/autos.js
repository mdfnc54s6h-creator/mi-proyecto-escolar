// src/autos.js
const catálogoAutos = [
  {
    id: 1,
    nombre: "Porsche 911 Carrera (992)",
    descripcion: "Motor: 3.0L Boxer de 6 cilindros con Bi-Turbo. Potencia: 394 PS (290 kW). Torque: 450 Nm. Aceleración: 0-100 km/h en 4.1s. Velocidad Máxima: 294 km/h. Transmisión: PDK de 8 velocidades. Tracción: Trasera (RWD). Tecnología: Sistema Porsche Active Suspension Management (PASM) y frenos monobloque de aluminio de 4 pistones.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?w=800" }
  },
  {
    id: 2,
    nombre: "Tesla Model 3 Performance",
    descripcion: "Motor: Dual Motor Eléctrico de alta eficiencia. Potencia: 510 hp. Torque: 741 Nm. Aceleración: 0-100 km/h en 3.1s. Velocidad Máxima: 262 km/h. Transmisión: Direct Drive de una velocidad. Tracción: Integral (AWD). Tecnología: Suspensión adaptativa controlada por software, modo Pista V3 y sistema de frenado regenerativo de alto desempeño.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800", trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800", interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?w=800" }
  },
  {
    id: 3,
    nombre: "Toyota Hilux SRX",
    descripcion: "Motor: 2.8L Turbo Diesel Intercooler. Potencia: 204 hp. Torque: 500 Nm. Aceleración: 0-100 km/h en 10.1s. Velocidad Máxima: 175 km/h. Transmisión: Automática de 6 velocidades con modo secuencial. Tracción: 4x4 con reductora. Tecnología: Chasis reforzado con tecnología Toyota Safety Sense (TSS) y bloqueo de diferencial trasero.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?w=800", interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?w=800" }
  },
  {
    id: 4,
    nombre: "Ferrari SF90 Stradale",
    descripcion: "Motor: 4.0L V8 Bi-Turbo + 3 Motores Eléctricos. Potencia: 1,000 cv combinados. Torque: 800 Nm. Aceleración: 0-100 km/h en 2.5s. Velocidad Máxima: 340 km/h. Transmisión: F1 Dual Clutch de 8 velocidades. Tracción: Integral eléctrica (eAWD). Tecnología: Sistema eSSC (Electronic Side Slip Control) y aerodinámica activa con flap Gurney soplado.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800" }
  },
  {
    id: 5,
    nombre: "BMW M4 Competition",
    descripcion: "Motor: 3.0L M TwinPower Turbo de 6 cilindros en línea. Potencia: 510 hp. Torque: 650 Nm. Aceleración: 0-100 km/h en 3.9s. Velocidad Máxima: 290 km/h (con M Driver's Package). Transmisión: M Steptronic de 8 velocidades con Drivelogic. Tracción: Trasera (RWD) con diferencial M activo. Tecnología: Chasis con refuerzos de torsión lateral y frenos M compuestos.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", trasero: "https://images.unsplash.com/photo-1606155015708-026868d1898c?w=800", interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800" }
  },
  {
    id: 6,
    nombre: "Ford Mustang GT",
    descripcion: "Motor: 5.0L V8 Coyote de 4ta generación. Potencia: 480 hp. Torque: 560 Nm. Aceleración: 0-100 km/h en 4.3s. Velocidad Máxima: 250 km/h. Transmisión: Manual de 6 velocidades con Rev-Matching. Tracción: Trasera (RWD). Tecnología: Escape de válvula activa y diferencial de deslizamiento limitado Torsen con relación 3.73.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800", trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 7,
    nombre: "Lamborghini Revuelto",
    descripcion: "Motor: 6.5L V12 Atmosférico + Sistema Híbrido. Potencia: 1,015 cv. Torque: 725 Nm. Aceleración: 0-100 km/h en 2.5s. Velocidad Máxima: 350 km/h. Transmisión: e-DCT de 8 velocidades transversal. Tracción: Integral (AWD). Tecnología: Chasis 'Monofuselage' de fibra de carbono.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800", trasero: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800", interior: "https://images.unsplash.com/photo-1632245889027-e436faf3225e?w=800" }
  },
  {
    id: 8,
    nombre: "Bugatti Chiron Super Sport",
    descripcion: "Motor: 8.0L W16 con 4 turbocompresores. Potencia: 1,600 hp. Torque: 1,600 Nm. Aceleración: 0-100 km/h en 2.4s. Velocidad Máxima: 440 km/h. Transmisión: DSG de 7 velocidades. Tracción: Integral permanente. Tecnología: Carrocería 'Longtail' de baja resistencia.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 9,
    nombre: "Jeep Wrangler Rubicon",
    descripcion: "Motor: 3.6L V6 Pentastar. Potencia: 285 hp. Torque: 353 Nm. Aceleración: 0-100 km/h en 7.5s. Velocidad Máxima: 160 km/h. Transmisión: Automática 8HP50. Tracción: 4x4 Rock-Trac HD Full Time. Tecnología: Ejes Dana 44 Heavy Duty.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?w=800", interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?w=800" }
  },
  {
    id: 10,
    nombre: "Audi RS6 Avant",
    descripcion: "Motor: 4.0L V8 Bi-Turbo MHEV. Potencia: 600 hp. Torque: 800 Nm. Aceleración: 0-100 km/h en 3.6s. Velocidad Máxima: 305 km/h. Transmisión: Tiptronic de 8 velocidades. Tracción: Quattro con diferencial deportivo.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 11,
    nombre: "Nissan GT-R Nismo",
    descripcion: "Motor: 3.8L V6 Twin-Turbo VR38DETT. Potencia: 600 hp. Torque: 652 Nm. Aceleración: 0-100 km/h en 2.8s. Velocidad Máxima: 315 km/h. Transmisión: Dual Clutch de 6 velocidades. Tracción: ATTESA E-TS AWD.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?w=800", interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?w=800" }
  },
  {
    id: 12,
    nombre: "Mercedes-AMG G63",
    descripcion: "Motor: 4.0L V8 Biturbo AMG. Potencia: 585 hp. Torque: 850 Nm. Aceleración: 0-100 km/h en 4.5s. Velocidad Máxima: 220 km/h. Transmisión: AMG Speedshift TCT 9G. Tracción: 4Matic Performance.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?w=800", trasero: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800", interior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800" }
  },
  {
    id: 13,
    nombre: "Chevrolet Corvette Z06",
    descripcion: "Motor: 5.5L V8 LT6 con cigüeñal de plano plano. Potencia: 670 hp. Torque: 623 Nm. Aceleración: 0-100 km/h en 2.6s. Velocidad Máxima: 312 km/h. Transmisión: DCT de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1597404294360-fedeca443dd8?w=800", trasero: "https://images.unsplash.com/photo-1552519507-87122e2363b8?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 14,
    nombre: "Honda Civic Type R (FL5)",
    descripcion: "Motor: 2.0L VTEC Turbo K20C1. Potencia: 315 hp. Torque: 420 Nm. Aceleración: 0-100 km/h en 5.4s. Velocidad Máxima: 275 km/h. Transmisión: Manual de 6 velocidades. Tracción: Delantera (FWD).",
    imagenes: { delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?w=800", trasero: "https://images.unsplash.com/photo-1611651338412-81016134315c?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 15,
    nombre: "Land Rover Defender 110",
    descripcion: "Motor: 3.0L 6 cilindros Diesel MHEV. Potencia: 300 hp. Torque: 650 Nm. Aceleración: 0-100 km/h en 7.0s. Velocidad Máxima: 191 km/h. Transmisión: ZF de 8 velocidades. Tracción: AWD Permanente.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=800", trasero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 16,
    nombre: "McLaren 750S",
    descripcion: "Motor: 4.0L V8 Twin-Turbo. Potencia: 750 hp. Torque: 800 Nm. Aceleración: 0-100 km/h en 2.8s. Velocidad Máxima: 332 km/h. Transmisión: SSG de 7 velocidades. Tracción: Trasera (RWD).",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 17,
    nombre: "Volkswagen Golf R",
    descripcion: "Motor: 2.0L TSI EA888 Gen 4. Potencia: 320 hp. Torque: 420 Nm. Aceleración: 0-100 km/h en 4.7s. Velocidad Máxima: 270 km/h. Transmisión: DSG de 7 velocidades. Tracción: 4Motion.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621348651810-7467389f7f45?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 18,
    nombre: "Dodge Challenger Hellcat Redeye",
    descripcion: "Motor: 6.2L V8 Supercharged H.O. Potencia: 797 hp. Torque: 959 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 326 km/h. Transmisión: TorqueFlite de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?w=800", trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 19,
    nombre: "Subaru WRX STI Final Edition",
    descripcion: "Motor: 2.5L Turbo Boxer EJ25. Potencia: 310 hp. Torque: 407 Nm. Aceleración: 0-100 km/h en 4.9s. Velocidad Máxima: 255 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800", trasero: "https://images.unsplash.com/photo-1594144408218-097533036498?w=800", interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?w=800" }
  },
  {
    id: 20,
    nombre: "Ram 1500 TRX",
    descripcion: "Motor: 6.2L V8 HEMI Supercharged. Potencia: 702 hp. Torque: 881 Nm. Aceleración: 0-100 km/h en 4.5s. Velocidad Máxima: 190 km/h. Transmisión: ZF de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?w=800", trasero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 21,
    nombre: "Koenigsegg Jesko Absolut",
    descripcion: "Motor: 5.0L V8 Twin-Turbo. Potencia: 1,600 hp. Torque: 1,500 Nm. Aceleración: 0-100 km/h en 2.5s. Velocidad Máxima: +500 km/h. Transmisión: LST de 9 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 22,
    nombre: "Aston Martin DBS V12",
    descripcion: "Motor: 5.2L V12 Bi-Turbo. Potencia: 725 hp. Torque: 900 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 340 km/h. Transmisión: ZF de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?w=800", trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?w=800", interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?w=800" }
  },
  {
    id: 23,
    nombre: "Rimac Nevera",
    descripcion: "Motor: 4 Motores Eléctricos. Potencia: 1,914 hp. Torque: 2,360 Nm. Aceleración: 0-100 km/h en 1.81s. Velocidad Máxima: 412 km/h. Tecnología: Vectorización de par avanzada.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800", trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800", interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?w=800" }
  },
  {
    id: 24,
    nombre: "Toyota GR Yaris",
    descripcion: "Motor: 1.6L de 3 cilindros Turbo. Potencia: 261 hp. Torque: 360 Nm. Aceleración: 0-100 km/h en 5.5s. Velocidad Máxima: 230 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 25,
    nombre: "Cadillac CT5-V Blackwing",
    descripcion: "Motor: 6.2L V8 Supercharged. Potencia: 668 hp. Torque: 893 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 322 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?w=800", trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 26,
    nombre: "Lotus Emira V6",
    descripcion: "Motor: 3.5L V6 Supercharged. Potencia: 400 hp. Torque: 420 Nm. Aceleración: 0-100 km/h en 4.3s. Velocidad Máxima: 290 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 27,
    nombre: "GMC Hummer EV Edition 1",
    descripcion: "Motor: 3 motores eléctricos. Potencia: 1,000 hp. Torque: 1,017 Nm. Aceleración: 0-100 km/h en 3.0s. Tecnología: CrabWalk (marcha diagonal).",
    imagenes: { delantero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?w=800", trasero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 28,
    nombre: "Alfa Romeo Giulia Quadrifoglio",
    descripcion: "Motor: 2.9L V6 Bi-Turbo. Potencia: 510 hp. Torque: 600 Nm. Aceleración: 0-100 km/h en 3.9s. Velocidad Máxima: 307 km/h. Transmisión: Automática de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 29,
    nombre: "Pagani Huayra Roadster BC",
    descripcion: "Motor: 6.0L V12 Bi-Turbo AMG. Potencia: 800 hp. Torque: 1,050 Nm. Aceleración: 0-100 km/h en 3.0s. Velocidad Máxima: 370 km/h.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 30,
    nombre: "Ford F-150 Raptor R",
    descripcion: "Motor: 5.2L V8 Supercharged. Potencia: 720 hp. Torque: 868 Nm. Aceleración: 0-100 km/h en 4.4s. Velocidad Máxima: 180 km/h. Transmisión: Automática de 10 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?w=800", interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?w=800" }
  },
  {
    id: 31,
    nombre: "Maserati MC20",
    descripcion: "Motor: 3.0L V6 Nettuno Twin-Turbo. Potencia: 630 hp. Torque: 730 Nm. Aceleración: 0-100 km/h en 2.9s. Velocidad Máxima: 325 km/h. Tecnología: Combustión de precámara.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 32,
    nombre: "BMW M5 Competition",
    descripcion: "Motor: 4.4L V8 M TwinPower Turbo. Potencia: 625 hp. Torque: 750 Nm. Aceleración: 0-100 km/h en 3.3s. Velocidad Máxima: 305 km/h. Transmisión: M Steptronic de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", trasero: "https://images.unsplash.com/photo-1606155015708-026868d1898c?w=800", interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800" }
  },
  {
    id: 33,
    nombre: "Rolls-Royce Spectre",
    descripcion: "Motor: Dual Motors Eléctricos. Potencia: 584 hp. Torque: 900 Nm. Aceleración: 0-100 km/h en 4.5s. Transmisión: Direct Drive. Tracción: Integral (AWD).",
    imagenes: { delantero: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800", trasero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?w=800", interior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800" }
  },
  {
    id: 34,
    nombre: "Audi RS e-tron GT",
    descripcion: "Motor: Dos motores eléctricos. Potencia: 646 hp. Torque: 830 Nm. Aceleración: 0-100 km/h en 3.3s. Velocidad Máxima: 250 km/h. Tracción: Quattro eléctrica.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", trasero: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 35,
    nombre: "Bentley Continental GT Speed",
    descripcion: "Motor: 6.0L W12 TSI. Potencia: 659 hp. Torque: 900 Nm. Aceleración: 0-100 km/h en 3.6s. Velocidad Máxima: 335 km/h. Transmisión: Dual Clutch de 8 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800", trasero: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800", interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800" }
  },
  {
    id: 36,
    nombre: "Range Rover Sport SV",
    descripcion: "Motor: 4.4L V8 Twin-Turbo MHEV. Potencia: 635 hp. Torque: 750 Nm. Aceleración: 0-100 km/h en 3.8s. Velocidad Máxima: 290 km/h. Tecnología: Suspensión 6D Dynamics.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=800", trasero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 37,
    nombre: "Mazda MX-5 Miata ND",
    descripcion: "Motor: 2.0L SkyActiv-G. Potencia: 184 hp. Torque: 205 Nm. Aceleración: 0-100 km/h en 6.5s. Velocidad Máxima: 219 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1552642762-f55d06580015?w=800", trasero: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=800", interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800" }
  },
  {
    id: 38,
    nombre: "Nissan Z Performance",
    descripcion: "Motor: 3.0L V6 Twin-Turbo. Potencia: 400 hp. Torque: 475 Nm. Aceleración: 0-100 km/h en 4.5s. Transmisión: Manual de 6 velocidades con SynchroRev Match.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621348651810-7467389f7f45?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?w=800" }
  },
  {
    id: 39,
    nombre: "Hyundai Ioniq 5 N",
    descripcion: "Motor: Dual Electric Motors. Potencia: 650 hp. Torque: 770 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 260 km/h. Tecnología: Modo Drift.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 40,
    nombre: "Gordon Murray T.50",
    descripcion: "Motor: 3.9L V12 Atmosférico Cosworth. Potencia: 663 hp. Torque: 467 Nm. Aceleración: 0-100 km/h en 2.8s. Velocidad Máxima: 363 km/h. Tecnología: Ventilador de efecto suelo.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", trasero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800", interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800" }
  },
  {
    id: 41,
    nombre: "Ford Bronco Raptor",
    descripcion: "Motor: 3.0L V6 EcoBoost Twin-Turbo. Potencia: 418 hp. Torque: 596 Nm. Aceleración: 0-100 km/h en 6.0s. Tracción: 4x4 avanzada. Tecnología: Suspensión HOSS 4.0 FOX.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?w=800", interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?w=800" }
  },
  {
    id: 42,
    nombre: "Porsche 718 Cayman GT4 RS",
    descripcion: "Motor: 4.0L Atmosférico Flat-6. Potencia: 500 hp. Torque: 450 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 315 km/h. Transmisión: PDK de 7 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?w=800" }
  },
  {
    id: 43,
    nombre: "Ariel Atom 4",
    descripcion: "Motor: 2.0L i-VTEC Turbo. Potencia: 320 hp. Torque: 420 Nm. Aceleración: 0-100 km/h en 2.8s. Velocidad Máxima: 261 km/h. Transmisión: Manual de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621348651810-7467389f7f45?w=800", trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 44,
    nombre: "Chevrolet Silverado EV",
    descripcion: "Motor: Dual Motors Eléctricos. Potencia: 754 hp. Torque: 1,064 Nm. Aceleración: 0-100 km/h en 4.5s. Tracción: eAWD. Tecnología: Dirección en las cuatro ruedas.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?w=800", trasero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=800", interior: "https://images.unsplash.com/photo-1632154917570-523118949514?w=800" }
  },
  {
    id: 45,
    nombre: "Ferrari Purosangue",
    descripcion: "Motor: 6.5L V12 Atmosférico. Potencia: 725 hp. Torque: 716 Nm. Aceleración: 0-100 km/h en 3.3s. Velocidad Máxima: 310 km/h. Tracción: AWD avanzada.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800" }
  },
  {
    id: 46,
    nombre: "Lamborghini Urus Performante",
    descripcion: "Motor: 4.0L V8 Bi-Turbo. Potencia: 666 hp. Torque: 850 Nm. Aceleración: 0-100 km/h en 3.3s. Velocidad Máxima: 306 km/h. Tecnología: Capó y alerón de fibra de carbono.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?w=800", trasero: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800", interior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800" }
  },
  {
    id: 47,
    nombre: "Zenvo Aurora Tur",
    descripcion: "Motor: 6.6L V12 Quad-Turbo Híbrido. Potencia: 1,450 hp. Torque: 1,400 Nm. Aceleración: 0-100 km/h en 2.3s. Velocidad Máxima: 450 km/h. Tracción: AWD.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 48,
    nombre: "Lucid Air Sapphire",
    descripcion: "Motor: Triple Motor Eléctrico. Potencia: 1,234 hp. Torque: 1,939 Nm. Aceleración: 0-100 km/h en 1.89s. Velocidad Máxima: 330 km/h. Tracción: Integral (AWD).",
    imagenes: { delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800", trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800", interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?w=800" }
  },
  {
    id: 49,
    nombre: "Lexus LFA",
    descripcion: "Motor: 4.8L V10 Atmosférico. Potencia: 560 hp. Torque: 480 Nm. Aceleración: 0-100 km/h en 3.7s. Velocidad Máxima: 325 km/h. Transmisión: ASG secuencial de 6 velocidades.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800", trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800" }
  },
  {
    id: 50,
    nombre: "Gordon Murray T.33",
    descripcion: "Motor: 3.9L V12 Atmosférico Cosworth. Potencia: 615 hp. Torque: 451 Nm. Aceleración: 0-100 km/h en 2.9s. Velocidad Máxima: 335 km/h. Transmisión: Manual de 6 velocidades Xtrac.",
    imagenes: { delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800", trasero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800", interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800" }
  }
];

export default catálogoAutos;