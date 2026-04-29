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
  }
];

export default catálogoAutos;