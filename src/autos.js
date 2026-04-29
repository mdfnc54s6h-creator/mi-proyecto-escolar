const catálogoAutos = [
  {
    id: 1,
    nombre: "Porsche 911 Carrera (2024)",
    descripcion: "Motor: 3.0L Boxer de 6 cilindros con Bi-Turbo. Potencia: 394 PS. Aceleración: 0-100 km/h en 4.1s.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 2,
    nombre: "Tesla Model 3 Performance (2024)",
    descripcion: "Motor: Dual Motor Eléctrico. Potencia: 510 hp. Aceleración: 0-100 km/h en 3.1s.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 3,
    nombre: "Ferrari SF90 Stradale (2023)",
    descripcion: "Motor: 4.0L V8 Bi-Turbo Híbrido. Potencia: 1,000 cv. Aceleración: 2.5s.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 4,
    nombre: "BMW M4 Competition (2024)",
    descripcion: "Motor: 3.0L TwinPower Turbo. Potencia: 510 hp. Tracción: Trasera.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1606155015708-026868d1898c?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 5,
    nombre: "Lamborghini Revuelto (2024)",
    descripcion: "Motor: 6.5L V12 Híbrido. Potencia: 1,015 cv. Velocidad: 350 km/h.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1632245889027-e436faf3225e?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 6,
    nombre: "Audi RS6 Avant (2024)",
    descripcion: "Motor: 4.0L V8 Bi-Turbo. Potencia: 600 hp. Carrocería: Familiar.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 7,
    nombre: "Mercedes-AMG G63 (2023)",
    descripcion: "Motor: 4.0L V8 Biturbo. Potencia: 585 hp. Icono del lujo Off-road.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 8,
    nombre: "Nissan GT-R Nismo (2024)",
    descripcion: "Motor: 3.8L V6 Twin-Turbo. Potencia: 600 hp. Tracción: AWD.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 9,
    nombre: "Range Rover Sport SV (2024)",
    descripcion: "Motor: 4.4L V8. Potencia: 635 hp. SUV de alto rendimiento.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1632154917570-523118949514?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 10,
    nombre: "McLaren 750S (2024)",
    descripcion: "Motor: 4.0L V8. Potencia: 750 hp. Aceleración: 2.8s.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1632154917570-523118949514?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 11,
    nombre: "Ford Mustang GT (2024)",
    descripcion: "Motor: 5.0L V8 Coyote. Potencia: 480 hp. Transmisión: Manual.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 12,
    nombre: "Jeep Wrangler Rubicon (2023)",
    descripcion: "Motor: 3.6L V6. Capacidad Off-Road extrema. Tracción: 4x4.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 13,
    nombre: "Chevrolet Corvette Z06 (2023)",
    descripcion: "Motor: 5.5L V8 LT6. Potencia: 670 hp. Motor central.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1597404294360-fedeca443dd8?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1552519507-87122e2363b8?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 14,
    nombre: "Honda Civic Type R (2024)",
    descripcion: "Motor: 2.0L Turbo. Potencia: 315 hp. Tracción delantera.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1611651338412-81016134315c?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 15,
    nombre: "Volkswagen Golf R (2023)",
    descripcion: "Motor: 2.0L TSI. Potencia: 320 hp. Tracción: 4Motion.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621348651810-7467389f7f45?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 16,
    nombre: "Aston Martin DBS (2023)",
    descripcion: "Motor: 5.2L V12. Potencia: 725 hp. Elegancia británica.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 17,
    nombre: "Subaru WRX STI (2021)",
    descripcion: "Motor: 2.5L Turbo Boxer. Potencia: 310 hp. Tracción: AWD.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1594144408218-097533036498?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1611651338412-81016134315c?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 18,
    nombre: "Maserati MC20 (2023)",
    descripcion: "Motor: 3.0L V6 Nettuno. Potencia: 630 hp.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 19,
    nombre: "Toyota GR Yaris (2024)",
    descripcion: "Motor: 1.6L 3-cilindros Turbo. Potencia: 261 hp. ADN de Rally.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 20,
    nombre: "Cadillac CT5-V Blackwing (2024)",
    descripcion: "Motor: 6.2L V8 Supercharged. Potencia: 668 hp.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 21,
    nombre: "Mazda MX-5 Miata (2024)",
    descripcion: "Motor: 2.0L. Diversión pura al volante.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1552642762-f55d06580015?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 22,
    nombre: "Nissan Z (2024)",
    descripcion: "Motor: V6 Twin-Turbo. Potencia: 400 hp. Estilo retro.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1627454820516-dc767da4b3bf?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 23,
    nombre: "Hyundai Ioniq 5 N (2024)",
    descripcion: "Motor: Eléctrico. Potencia: 650 hp. Eléctrico radical.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1630136641349-ad97482d334f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 24,
    nombre: "Alfa Romeo Giulia QV (2024)",
    descripcion: "Motor: 2.9L V6 Bi-Turbo. Potencia: 510 hp. Pasión italiana.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 25,
    nombre: "Dodge Challenger Hellcat (2023)",
    descripcion: "Motor: 6.2L V8 Supercharged. Potencia: 797 hp.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 26,
    nombre: "Audi R8 V10 Performance",
    descripcion: "Motor: 5.2L V10. Un superdeportivo con motor atmosférico legendario.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 27,
    nombre: "Jaguar F-Type R",
    descripcion: "Motor: 5.0L V8 Supercharged. Elegancia y sonido inconfundible.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 28,
    nombre: "Lotus Emira",
    descripcion: "Motor: 3.5L V6. El último deportivo de combustión de Lotus.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 29,
    nombre: "Bentley Continental GT",
    descripcion: "Motor: 6.0L W12. El pináculo del lujo y la velocidad.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 30,
    nombre: "Rolls-Royce Spectre",
    descripcion: "El primer Rolls-Royce totalmente eléctrico. Silencio absoluto.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 31,
    nombre: "Pagani Utopia",
    descripcion: "Motor: 6.0L V12. Una obra de arte mecánica con cambio manual.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 32,
    nombre: "Mercedes-AMG ONE",
    descripcion: "Tecnología de F1 trasladada a la calle con un motor 1.6L V6 híbrido.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1520031441870-4c041ad35613?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 33,
    nombre: "Koenigsegg Jesko",
    descripcion: "Motor: 5.0L V8 Bi-Turbo. Diseñado para superar los 480 km/h.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 34,
    nombre: "Bugatti Mistral",
    descripcion: "Motor: 8.0L W16. El roadster más rápido jamás creado.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 35,
    nombre: "Rimac Nevera",
    descripcion: "El coche eléctrico de producción más rápido en aceleración.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 36,
    nombre: "Gordon Murray T.50",
    descripcion: "Motor: V12 Atmosférico. Pureza mecánica con ventilador aerodinámico.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 37,
    nombre: "De Tomaso P72",
    descripcion: "Un homenaje al diseño de los prototipos de carreras de los 60.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 38,
    nombre: "Pininfarina Battista",
    descripcion: "1900 hp eléctricos envueltos en el diseño italiano más exquisito.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 39,
    nombre: "Hennessey Venom F5",
    descripcion: "Motor: V8 'Fury'. Diseñado para ser el coche de calle más rápido.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1590362891175-3794ef1e882a?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 40,
    nombre: "GMA T.33",
    descripcion: "La visión de Gordon Murray del superdeportivo diario perfecto.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 41,
    nombre: "Acura NSX Type S",
    descripcion: "La despedida del superdeportivo híbrido japonés con 600 hp.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1611651338412-81016134315c?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1600102139165-1442a4727f7f?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 42,
    nombre: "BMW XM",
    descripcion: "El SUV híbrido enchufable más potente de la división BMW M.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1606155015708-026868d1898c?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 43,
    nombre: "Lucid Air Sapphire",
    descripcion: "Tres motores eléctricos y más de 1200 hp en un sedán de lujo.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 44,
    nombre: "McMurtry Spéirling",
    descripcion: "Un diminuto eléctrico capaz de generar 2000kg de carga aerodinámica parado.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1630136641349-ad97482d334f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 45,
    nombre: "Czinger 21C",
    descripcion: "Superdeportivo impreso en 3D con una disposición de asientos en tándem.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 46,
    nombre: "Ford Bronco Raptor",
    descripcion: "Motor: 3.0L V6 EcoBoost. El todoterreno definitivo de Ford.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1539411615147-3801f4661001?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1542362567-b052f7596048?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 47,
    nombre: "GMC Hummer EV",
    descripcion: "Un SUV eléctrico masivo con 1000 hp y el modo 'Crab Walk'.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1632154917570-523118949514?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 48,
    nombre: "Tesla Roadster (Gen 2)",
    descripcion: "Promete ser el coche de producción con la mayor aceleración del mundo.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 49,
    nombre: "Polestar 5",
    descripcion: "Un GT eléctrico de cuatro puertas con un enfoque en la sostenibilidad.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1630136641349-ad97482d334f?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1561580119-619e76989d21?auto=format&fit=crop&q=80&w=800"
    }
  },
  {
    id: 50,
    nombre: "Ferrari Daytona SP3",
    descripcion: "Un homenaje a los prototipos deportivos de los 60 con motor V12.",
    imagenes: {
      delantero: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
      trasero: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
      interior: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800"
    }
  }
];

export default catálogoAutos;