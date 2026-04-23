// src/autos.js

const generarAutos = () => {
  const marcas = ["Ford", "Toyota", "Chevrolet", "Ferrari", "Lamborghini", "Bugatti", "BMW", "Mercedes", "Audi", "Porsche", "Rolls-Royce", "Bentley", "Nissan", "Honda", "McLaren"];
  const categorias = ["pickup", "hypercars", "sedan", "coupes", "SUV", "deportivos", "luxury"];
  
  let autos = [];
  let idContador = 1;

  for (let i = 0; i < 350; i++) {
    const marcaAleatoria = marcas[Math.floor(Math.random() * marcas.length)];
    const catAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    
    autos.push({
      id: idContador++,
      make: marcaAleatoria,
      model: `${catAleatoria.toUpperCase()} Model ${idContador}`,
      year: 2020 + Math.floor(Math.random() * 5),
      price: 20000 + Math.floor(Math.random() * 1000000),
      mileage: Math.floor(Math.random() * 50000),
      fuel_type: "Gasolina",
      transmission: "Automática",
      category: catAleatoria,
      hp: 150 + Math.floor(Math.random() * 800),
      drivetrain: "AWD",
      image: `https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop`,
      description: `Vehículo de alto rendimiento en la categoría ${catAleatoria}.`
    });
  }
  return autos;
};

export const listaAutos = generarAutos();