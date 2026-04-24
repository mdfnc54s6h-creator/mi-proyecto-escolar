const marcas = ["Toyota", "Chevrolet", "Ferrari", "Lamborghini", "Bugatti", "BMW", "Mercedes", "Audi", "Porsche", "Rolls-Royce"];
const categorias = ["Hypercars", "Sedan", "Coupes", "SUV", "Deportivos", "Luxury"];

export const generarAutos = () => {
  const listaAutos = [];
  for (let i = 1; i <= 350; i++) {
    const marcaAleatoria = marcas[Math.floor(Math.random() * marcas.length)];
    const catAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    
    listaAutos.push({
      id: i,
      make: marcaAleatoria,
      model: `Modelo ${i}`,
      year: 2020 + Math.floor(Math.random() * 6),
      price: 50000 + Math.floor(Math.random() * 1000000),
      mileage: Math.floor(Math.random() * 50000),
      fuel_type: "Gasolina",
      transmission: "Automático",
      color: "Varios",
      description: `Vehículo de alto rendimiento en la categoría ${catAleatoria}.`,
      // Esto hace que cada auto tenga una foto diferente basada en su número (sigId)
      image: `https://picsum.photos/seed/${i + 50}/800/600`
    });
  }
  return listaAutos;
};