const catálogoAutos = [
  {
    id: 1,
    nombre: "Porsche 911 Carrera (2024)",
    descripcion: "Motor: 3.0L Boxer de 6 cilindros con Bi-Turbo. Potencia: 394 PS. Aceleración: 0-100 km/h en 4.1s.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/7602339916679089003_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/7602339916679089003_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/7602339916679089003_1"
    }
  },
  {
    id: 2,
    nombre: "Tesla Model 3 Performance (2024)",
    descripcion: "Motor: Dual Motor Eléctrico. Potencia: 510 hp. Aceleración: 0-100 km/h en 3.1s.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/1119335802195126516_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/1119335802195126516_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/1119335802195126516_1"
    }
  },
  {
    id: 3,
    nombre: "Toyota Hilux SRX (2023)",
    descripcion: "Motor: 2.8L Turbo Diesel. Potencia: 204 hp. Tracción: 4x4.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/6324001539192373003_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/6324001539192373003_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/6324001539192373003_1"
    }
  },
  {
    id: 4,
    nombre: "Ferrari SF90 Stradale (2023)",
    descripcion: "Motor: 4.0L V8 Bi-Turbo Híbrido. Potencia: 1,000 cv. Aceleración: 2.5s.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/2363859227082977903_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/2363859227082977903_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/2363859227082977903_1"
    }
  },
  {
    id: 5,
    nombre: "BMW M4 Competition (2024)",
    descripcion: "Motor: 3.0L TwinPower Turbo. Potencia: 510 hp. Tracción: Trasera.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/14920663745848845594_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/14920663745848845594_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/14920663745848845594_1"
    }
  },
  {
    id: 6,
    nombre: "Ford Mustang GT (2024)",
    descripcion: "Motor: 5.0L V8 Coyote. Potencia: 480 hp. Transmisión: Manual.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/7496377970744875137_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/7496377970744875137_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/7496377970744875137_1"
    }
  },
  {
    id: 7,
    nombre: "Lamborghini Revuelto (2024)",
    descripcion: "Motor: 6.5L V12 Híbrido. Potencia: 1,015 cv. Velocidad: 350 km/h.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/198568659598985087_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/198568659598985087_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/198568659598985087_1"
    }
  },
  {
    id: 8,
    nombre: "Bugatti Chiron Super Sport (2022)",
    descripcion: "Motor: 8.0L W16. Potencia: 1,600 hp. Velocidad: 440 km/h.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/10733202385098537826_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/10733202385098537826_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/10733202385098537826_1"
    }
  },
  {
    id: 9,
    nombre: "Jeep Wrangler Rubicon (2023)",
    descripcion: "Motor: 3.6L V6. Capacidad Off-Road extrema. Tracción: 4x4.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/5882947204494173233_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/5882947204494173233_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/5882947204494173233_1"
    }
  },
  {
    id: 10,
    nombre: "Audi RS6 Avant (2024)",
    descripcion: "Motor: 4.0L V8 Bi-Turbo. Potencia: 600 hp. Carrocería: Familiar.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13832548881442450298_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13832548881442450298_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13832548881442450298_1"
    }
  },
  {
    id: 11,
    nombre: "Nissan GT-R Nismo (2024)",
    descripcion: "Motor: 3.8L V6 Twin-Turbo. Potencia: 600 hp. Tracción: AWD.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/6614597273773910099_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/6614597273773910099_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/6614597273773910099_1"
    }
  },
  {
    id: 12,
    nombre: "Mercedes-AMG G63 (2023)",
    descripcion: "Motor: 4.0L V8 Biturbo. Potencia: 585 hp. Icono del lujo Off-road.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/15893486510290913151_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/15893486510290913151_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/15893486510290913151_1"
    }
  },
  {
    id: 13,
    nombre: "Chevrolet Corvette Z06 (2023)",
    descripcion: "Motor: 5.5L V8 LT6. Potencia: 670 hp. Motor central.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/6357144372607756168_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/6357144372607756168_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/6357144372607756168_1"
    }
  },
  {
    id: 14,
    nombre: "Honda Civic Type R (2024)",
    descripcion: "Motor: 2.0L Turbo. Potencia: 315 hp. Tracción delantera.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/8303648548407017359_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/8303648548407017359_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/8303648548407017359_1"
    }
  },
  {
    id: 15,
    nombre: "Land Rover Defender 110 (2023)",
    descripcion: "Motor: 3.0L Diesel MHEV. Potencia: 300 hp. Tracción integral.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/16609951162248703269_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/16609951162248703269_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/16609951162248703269_1"
    }
  },
  {
    id: 16,
    nombre: "McLaren 750S (2024)",
    descripcion: "Motor: 4.0L V8. Potencia: 750 hp. Aceleración: 2.8s.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/8753844850359500297_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/8753844850359500297_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/8753844850359500297_1"
    }
  },
  {
    id: 17,
    nombre: "Volkswagen Golf R (2023)",
    descripcion: "Motor: 2.0L TSI. Potencia: 320 hp. Tracción: 4Motion.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13720631713166900293_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13720631713166900293_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13720631713166900293_1"
    }
  },
  {
    id: 18,
    nombre: "Dodge Challenger Hellcat (2023)",
    descripcion: "Motor: 6.2L V8 Supercharged. Potencia: 797 hp.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/16395795070098143986_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/16395795070098143986_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/16395795070098143986_1"
    }
  },
  {
    id: 19,
    nombre: "Subaru WRX STI (2021)",
    descripcion: "Motor: 2.5L Turbo Boxer. Potencia: 310 hp. Tracción: Symmetrical AWD.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/12212853496321449292_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/12212853496321449292_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/12212853496321449292_1"
    }
  },
  {
    id: 20,
    nombre: "Ram 1500 TRX (2024)",
    descripcion: "Motor: 6.2L V8 Hemi. Potencia: 702 hp. Pickup más potente.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/354620730280057174_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/354620730280057174_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/354620730280057174_1"
    }
  },
  {
    id: 21,
    nombre: "Koenigsegg Jesko Absolut (2023)",
    descripcion: "Motor: 5.0L V8. Potencia: 1,600 hp. Velocidad: +500 km/h.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/16938624823984716643_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/16938624823984716643_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/16938624823984716643_1"
    }
  },
  {
    id: 22,
    nombre: "Aston Martin DBS (2023)",
    descripcion: "Motor: 5.2L V12. Potencia: 725 hp. Elegancia y potencia.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/5802064457722792595_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/5802064457722792595_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/5802064457722792595_1"
    }
  },
  {
    id: 23,
    nombre: "Rimac Nevera (2023)",
    descripcion: "Motor: Quad-Motor Eléctrico. Potencia: 1,914 hp. Aceleración: 1.8s.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/14678685697047194810_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/14678685697047194810_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/14678685697047194810_1"
    }
  },
  {
    id: 24,
    nombre: "Toyota GR Yaris (2024)",
    descripcion: "Motor: 1.6L 3-cilindros Turbo. Potencia: 261 hp. ADN de Rally.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/12423650056667072532_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/12423650056667072532_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/12423650056667072532_1"
    }
  },
  {
    id: 25,
    nombre: "Cadillac CT5-V Blackwing (2024)",
    descripcion: "Motor: 6.2L V8 Supercharged. Potencia: 668 hp. Sedán de alto rendimiento.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/6882656158457043601_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/6882656158457043601_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/6882656158457043601_1"
    }
  },
  {
    id: 26,
    nombre: "Lotus Emira V6 (2023)",
    descripcion: "Motor: 3.5L V6. Potencia: 400 hp. Ligereza británica.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/2535983896125465872_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/2535983896125465872_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/2535983896125465872_1"
    }
  },
  {
    id: 27,
    nombre: "GMC Hummer EV (2023)",
    descripcion: "Motor: Eléctrico 1,000 hp. Modo CrabWalk.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/14023691445563853928_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/14023691445563853928_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/14023691445563853928_1"
    }
  },
  {
    id: 28,
    nombre: "Alfa Romeo Giulia QV (2024)",
    descripcion: "Motor: 2.9L V6 Bi-Turbo. Potencia: 510 hp. Pasión italiana.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/1099526689824967197_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/1099526689824967197_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/1099526689824967197_1"
    }
  },
  {
    id: 29,
    nombre: "Pagani Huayra BC (2022)",
    descripcion: "Motor: V12 Bi-Turbo. Arte sobre ruedas.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/6882196668202073235_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/6882196668202073235_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/6882196668202073235_1"
    }
  },
  {
    id: 30,
    nombre: "Ford Raptor R (2024)",
    descripcion: "Motor: 5.2L V8 Supercharged. Potencia: 720 hp.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/14012105821806659300_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/14012105821806659300_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/14012105821806659300_1"
    }
  },
  {
    id: 31,
    nombre: "Maserati MC20 (2023)",
    descripcion: "Motor: 3.0L V6 Nettuno. Potencia: 630 hp.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/5115489538937046982_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/5115489538937046982_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/5115489538937046982_1"
    }
  },
  {
    id: 32,
    nombre: "BMW M5 Competition (2023)",
    descripcion: "Motor: 4.4L V8. Potencia: 625 hp. Tracción xDrive.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/617257460343754914_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/617257460343754914_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/617257460343754914_1"
    }
  },
  {
    id: 33,
    nombre: "Rolls-Royce Spectre (2024)",
    descripcion: "Primer Rolls-Royce 100% eléctrico. Ultra lujo.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/15277481216332255018_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/15277481216332255018_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/15277481216332255018_1"
    }
  },
  {
    id: 34,
    nombre: "Audi RS e-tron GT (2023)",
    descripcion: "Motor: Eléctrico. Potencia: 646 hp. Gran Turismo deportivo.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13885465672055551318_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13885465672055551318_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13885465672055551318_1"
    }
  },
  {
    id: 35,
    nombre: "Bentley Continental GT (2024)",
    descripcion: "Motor: 6.0L W12. Potencia: 659 hp. Gran Turismo de lujo.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/2374406324311394042_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/2374406324311394042_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/2374406324311394042_1"
    }
  },
  {
    id: 36,
    nombre: "Range Rover Sport SV (2024)",
    descripcion: "Motor: 4.4L V8. Potencia: 635 hp. SUV de alto rendimiento.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/9554931467424703469_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/9554931467424703469_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/9554931467424703469_1"
    }
  },
  {
    id: 37,
    nombre: "Mazda MX-5 Miata (2024)",
    descripcion: "Motor: 2.0L. Diversión pura al volante.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13682704861594967926_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13682704861594967926_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13682704861594967926_1"
    }
  },
  {
    id: 38,
    nombre: "Nissan Z (2024)",
    descripcion: "Motor: V6 Twin-Turbo. Potencia: 400 hp. Estilo retro.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/7544602846262045527_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/7544602846262045527_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/7544602846262045527_1"
    }
  },
  {
    id: 39,
    nombre: "Hyundai Ioniq 5 N (2024)",
    descripcion: "Motor: Eléctrico. Potencia: 650 hp. Eléctrico radical.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/9956062949829602687_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/9956062949829602687_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/9956062949829602687_1"
    }
  },
  {
    id: 40,
    nombre: "Gordon Murray T.50 (2023)",
    descripcion: "Motor: V12 Atmosférico. Sucesor espiritual del F1.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/9404412436605406950_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/9404412436605406950_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/9404412436605406950_1"
    }
  }
  {
    id: 41,
    nombre: "Pagani Utopia (2024)",
    descripcion: "Motor: 6.0L V12 Bi-Turbo de AMG. Potencia: 864 hp. Torque: 1100 Nm. Una obra maestra de la ingeniería mecánica sin ayudas híbridas.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/7864349357981260533_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/7864349357981260533_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/7864349357981260533_1"
    }
  },
  {
    id: 42,
    nombre: "Mercedes-AMG ONE (2023)",
    descripcion: "Motor: 1.6L V6 Turbo Híbrido (Tecnología F1). Potencia: 1063 hp. Un monoplaza de Fórmula 1 legal para la calle.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/15747668778739075609_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/15747668778739075609_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/15747668778739075609_1"
    }
  },
  {
    id: 43,
    nombre: "Ferrari Daytona SP3 (2023)",
    descripcion: "Motor: 6.5L V12 Atmosférico. Potencia: 840 hp. Inspirado en los prototipos deportivos de los años 60.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/17870746789984293439_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/17870746789984293439_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/17870746789984293439_1"
    }
  },
  {
    id: 44,
    nombre: "Porsche 911 GT3 RS (2024)",
    descripcion: "Motor: 4.0L Boxer de 6 cilindros. Potencia: 525 hp. Aerodinámica activa extrema diseñada para la pista.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/4507965044470772164_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/4507965044470772164_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/4507965044470772164_1"
    }
  },
  {
    id: 45,
    nombre: "BMW XM Label Red (2024)",
    descripcion: "Motor: V8 Híbrido Enchufable. Potencia: 748 hp. El BMW M más potente jamás fabricado.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13923584054663608224_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13923584054663608224_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13923584054663608224_1"
    }
  },
  {
    id: 46,
    nombre: "Lamborghini Huracán Sterrato (2023)",
    descripcion: "Motor: 5.2L V10. Potencia: 610 hp. Un superdeportivo diseñado para divertirse fuera del asfalto.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/2785351459566895207_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/2785351459566895207_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/2785351459566895207_1"
    }
  },
  {
    id: 47,
    nombre: "Aston Martin Valkyrie (2023)",
    descripcion: "Motor: 6.5L V12 Atmosférico + Híbrido. Potencia: 1155 hp. Desarrollado junto a Red Bull Racing.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/1811194301743131859_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/1811194301743131859_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/1811194301743131859_1"
    }
  },
  {
    id: 48,
    nombre: "McLaren Artura (2024)",
    descripcion: "Motor: V6 Híbrido Enchufable. Potencia: 680 hp. El futuro de la eficiencia y el rendimiento de McLaren.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/2617295716283359482_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/2617295716283359482_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/2617295716283359482_1"
    }
  },
  {
    id: 49,
    nombre: "Lexus LFA",
    descripcion: "Motor: 4.8L V10. Potencia: 560 hp. Famoso por tener uno de los sonidos de motor más bellos del mundo.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/13916122227035385447_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/13916122227035385447_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/13916122227035385447_1"
    }
  },
  {
    id: 50,
    nombre: "Ford GT Heritage Edition (2022)",
    descripcion: "Motor: 3.5L V6 EcoBoost. Potencia: 660 hp. Un tributo a las victorias de Ford en Le Mans.",
    imagenes: {
      delantero: "http://googleusercontent.com/image_collection/image_retrieval/14118817087789714041_0",
      trasero: "http://googleusercontent.com/image_collection/image_retrieval/14118817087789714041_2",
      interior: "http://googleusercontent.com/image_collection/image_retrieval/14118817087789714041_1"
    }
  }
];


export default catálogoAutos;