export const generarAutos = () => {
  const marcas = [
    "Porsche 911 Carrera GT", "Ferrari F8 Tributo", "Lamborghini Huracán", 
    "McLaren 720S", "Aston Martin Vantage", "Mercedes-AMG GT", 
    "BMW M8 Competition", "Audi R8 V10", "Bentley Continental GT"
  ];

  const descripciones = [
    "Ingeniería alemana en su máxima expresión, velocidad y elegancia.",
    "El rugido de un motor V8 que redefine la adrenalina en pista.",
    "Diseño aerodinámico inspirado en la aviación de combate.",
    "Lujo artesanal combinado con un rendimiento de superdeportivo.",
    "La combinación perfecta entre confort ejecutivo y potencia bruta."
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const marca = marcas[i % marcas.length];
    // Aquí creamos el array de 3 fotos diferentes por cada auto
    const images = [
      `https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&sig=${i}1`,
      `https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800&sig=${i}2`,
      `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&sig=${i}3`
    ];

    return {
      id: i + 1,
      make: marca,
      year: 2022 + (i % 3),
      price: Math.floor(Math.random() * (350000 - 80000) + 80000),
      description: descripciones[i % descripciones.length],
      // Importante: Mandamos el array de imágenes
      images: images, 
      hp: Math.floor(Math.random() * (800) + 400),
      accel: (Math.random() * (4.5 - 2.5) + 2.5).toFixed(1),
      fuel_type: "Gasolina Premium",
      mileage: Math.floor(Math.random() * 15000)
    };
  });
};