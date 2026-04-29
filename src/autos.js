// src/autos.js
const catálogoAutos = [
  {
    id: 1,
    nombre: "Porsche 911 Carrera (992)",
    descripcion: "Motor: 3.0L Boxer de 6 cilindros con Bi-Turbo. Potencia: 394 PS (290 kW). Torque: 450 Nm. Aceleración: 0-100 km/h en 4.1s. Velocidad Máxima: 294 km/h. Transmisión: PDK de 8 velocidades. Tracción: Trasera (RWD). Tecnología: Sistema Porsche Active Suspension Management (PASM) y frenos monobloque de aluminio de 4 pistones.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 2,
    nombre: "Tesla Model 3 Performance",
    descripcion: "Motor: Dual Motor Eléctrico de alta eficiencia. Potencia: 510 hp. Torque: 741 Nm. Aceleración: 0-100 km/h en 3.1s. Velocidad Máxima: 262 km/h. Transmisión: Direct Drive de una velocidad. Tracción: Integral (AWD). Tecnología: Suspensión adaptativa controlada por software, modo Pista V3 y sistema de frenado regenerativo de alto desempeño.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 3,
    nombre: "Toyota Hilux SRX",
    descripcion: "Motor: 2.8L Turbo Diesel Intercooler. Potencia: 204 hp. Torque: 500 Nm. Aceleración: 0-100 km/h en 10.1s. Velocidad Máxima: 175 km/h. Transmisión: Automática de 6 velocidades con modo secuencial. Tracción: 4x4 con reductora. Tecnología: Chasis reforzado con tecnología Toyota Safety Sense (TSS) y bloqueo de diferencial trasero.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 4,
    nombre: "Ferrari SF90 Stradale",
    descripcion: "Motor: 4.0L V8 Bi-Turbo + 3 Motores Eléctricos. Potencia: 1,000 cv combinados. Torque: 800 Nm. Aceleración: 0-100 km/h en 2.5s. Velocidad Máxima: 340 km/h. Transmisión: F1 Dual Clutch de 8 velocidades. Tracción: Integral eléctrica (eAWD). Tecnología: Sistema eSSC (Electronic Side Slip Control) y aerodinámica activa con flap Gurney soplado.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 38,
    nombre: "Nissan Z Performance",
    descripcion: "Motor: 3.0L V6 Twin-Turbo. Potencia: 400 hp. Torque: 475 Nm. Aceleración: 0-100 km/h en 4.5s. Velocidad Máxima: 250 km/h. Transmisión: Manual de 6 velocidades con SynchroRev Match. Tracción: Trasera (RWD). Tecnología: Eje de transmisión de fibra de carbono y diferencial de deslizamiento limitado mecánico.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621348651810-7467389f7f45?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 39,
    nombre: "Hyundai Ioniq 5 N",
    descripcion: "Motor: Dual Electric Motors. Potencia: 650 hp (con N Grin Boost). Torque: 770 Nm. Aceleración: 0-100 km/h en 3.4s. Velocidad Máxima: 260 km/h. Transmisión: N e-Shift (emulación de DCT). Tracción: AWD. Tecnología: Sistema N Drift Optimizer y distribución de par N Torque Distribution (11 niveles).",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 40,
    nombre: "Gordon Murray T.50",
    descripcion: "Motor: 3.9L V12 Atmosférico Cosworth. Potencia: 663 hp. Torque: 467 Nm. Aceleración: 0-100 km/h en 2.8s. Velocidad Máxima: 363 km/h. Transmisión: Manual de 6 velocidades. Tracción: Trasera (RWD). Tecnología: Ventilador trasero de 400mm para aerodinámica de efecto suelo y motor que revoluciona hasta 12,100 rpm.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 45,
    nombre: "Ferrari Purosangue",
    descripcion: "Motor: 6.5L V12 Atmosférico a 65°. Potencia: 725 hp. Torque: 716 Nm. Aceleración: 0-100 km/h en 3.3s. Velocidad Máxima: 310 km/h. Transmisión: DCT de 8 velocidades. Tracción: AWD avanzada. Tecnología: Sistema de suspensión activa Multimatic con actuadores eléctricos para control de balanceo.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 49,
    nombre: "Lexus LFA",
    descripcion: "Motor: 4.8L V10 Atmosférico (1LR-GUE). Potencia: 560 hp. Torque: 480 Nm. Aceleración: 0-100 km/h en 3.7s. Velocidad Máxima: 325 km/h. Transmisión: ASG secuencial de 6 velocidades. Tracción: Trasera (RWD). Tecnología: Tacómetro digital de reacción rápida y escape afinado acústicamente por Yamaha.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 50,
    nombre: "Gordon Murray T.33",
    descripcion: "Motor: 3.9L V12 Atmosférico Cosworth. Potencia: 615 hp. Torque: 451 Nm. Aceleración: 0-100 km/h en 2.9s. Velocidad Máxima: 335 km/h. Transmisión: Manual de 6 velocidades Xtrac. Tracción: Trasera (RWD). Tecnología: Chasis 'iStream' de fibra de carbono superligero y enfoque en la conexión purista conductor-máquina.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
    }
  }
];

export default catálogoAutos;   