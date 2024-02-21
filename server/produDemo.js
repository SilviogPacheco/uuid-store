const productos = [
  {
    id: 1,
    nombre: "Air Max 90",
    modelo: "Air Max",
    precio: 120,
    stock: 50,
    genero: "Unisex",
    marca: "Nike",
    keyBorradoLogico: 1,
    estado: true,
  },
  {
    id: 2,
    nombre: "Superstar",
    modelo: "Superstar",
    precio: 80,
    stock: 30,
    genero: "Unisex",
    marca: "Adidas",
    keyBorradoLogico: 2,
    estado: true,
  },
  {
    id: 3,
    nombre: "Air Force 1",
    modelo: "Air Force",
    precio: 100,
    stock: 40,
    genero: "Hombre",
    marca: "Nike",
    keyBorradoLogico: 3,
    estado: true,
  },
  {
    id: 4,
    nombre: "Stan Smith",
    modelo: "Stan Smith",
    precio: 90,
    stock: 25,
    genero: "Mujer",
    marca: "Adidas",
    keyBorradoLogico: 4,
    estado: true,
  },
  {
    id: 5,
    nombre: "Air Jordan 1",
    modelo: "Air Jordan",
    precio: 150,
    stock: 20,
    genero: "Hombre",
    marca: "Nike",
    keyBorradoLogico: 5,
    estado: false,
  },
  {
    id: 6,
    nombre: "Gazelle",
    modelo: "Gazelle",
    precio: 85,
    stock: 35,
    genero: "Mujer",
    marca: "Adidas",
    keyBorradoLogico: 6,
    estado: true,
  },
  {
    id: 7,
    nombre: "Air Max 270",
    modelo: "Air Max",
    precio: 140,
    stock: 15,
    genero: "Unisex",
    marca: "Nike",
    keyBorradoLogico: 7,
    estado: false,
  },
  {
    id: 8,
    nombre: "NMD_R1",
    modelo: "NMD",
    precio: 130,
    stock: 10,
    genero: "Hombre",
    marca: "Adidas",
    keyBorradoLogico: 8,
    estado: true,
  },
  {
    id: 9,
    nombre: "Air Max Plus",
    modelo: "Air Max",
    precio: 160,
    stock: 5,
    genero: "Mujer",
    marca: "Nike",
    keyBorradoLogico: 9,
    estado: true,
  },
  {
    id: 10,
    nombre: "ZX Flux",
    modelo: "ZX",
    precio: 95,
    stock: 20,
    genero: "Unisex",
    marca: "Adidas",
    keyBorradoLogico: 10,
    estado: false,
  },
  {
    id: 11,
    nombre: "Chuck Taylor All Star",
    modelo: "Chuck Taylor",
    precio: 70,
    stock: 40,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 11,
    estado: true,
  },
  {
    id: 12,
    nombre: "Old Skool",
    modelo: "Old Skool",
    precio: 75,
    stock: 30,
    genero: "Unisex",
    marca: "Vans",
    keyBorradoLogico: 12,
    estado: true,
  },
  {
    id: 13,
    nombre: "Classic Leather",
    modelo: "Classic Leather",
    precio: 85,
    stock: 35,
    genero: "Unisex",
    marca: "Reebok",
    keyBorradoLogico: 13,
    estado: true,
  },
  {
    id: 14,
    nombre: "Chuck 70",
    modelo: "Chuck 70",
    precio: 80,
    stock: 25,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 14,
    estado: true,
  },
  {
    id: 15,
    nombre: "Sk8-Hi",
    modelo: "Sk8-Hi",
    precio: 90,
    stock: 20,
    genero: "Unisex",
    marca: "Vans",
    keyBorradoLogico: 15,
    estado: true,
  },
  {
    id: 16,
    nombre: "Classic Nylon",
    modelo: "Classic Nylon",
    precio: 80,
    stock: 30,
    genero: "Unisex",
    marca: "Reebok",
    keyBorradoLogico: 16,
    estado: true,
  },
  {
    id: 17,
    nombre: "Chuck Taylor 70",
    modelo: "Chuck Taylor 70",
    precio: 90,
    stock: 15,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 17,
    estado: true,
  },
  {
    id: 18,
    nombre: "Authentic",
    modelo: "Authentic",
    precio: 70,
    stock: 25,
    genero: "Unisex",
    marca: "Vans",
    keyBorradoLogico: 18,
    estado: true,
  },
  {
    id: 19,
    nombre: "Freestyle Hi",
    modelo: "Freestyle Hi",
    precio: 100,
    stock: 20,
    genero: "Mujer",
    marca: "Reebok",
    keyBorradoLogico: 19,
    estado: true,
  },
  {
    id: 20,
    nombre: "Chuck Taylor",
    modelo: "Chuck Taylor",
    precio: 65,
    stock: 30,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 20,
    estado: true,
  },
  {
    id: 21,
    nombre: "Ultra Boost",
    modelo: "Ultra Boost",
    precio: 180,
    stock: 15,
    genero: "Hombre",
    marca: "Adidas",
    keyBorradoLogico: 21,
    estado: true,
  },
  {
    id: 22,
    nombre: "Chuck Taylor All Star High Top",
    modelo: "Chuck Taylor",
    precio: 75,
    stock: 20,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 22,
    estado: true,
  },
  {
    id: 23,
    nombre: "Air Max 95",
    modelo: "Air Max",
    precio: 160,
    stock: 10,
    genero: "Hombre",
    marca: "Nike",
    keyBorradoLogico: 23,
    estado: true,
  },
  {
    id: 24,
    nombre: "Chuck Taylor All Star Low Top",
    modelo: "Chuck Taylor",
    precio: 70,
    stock: 25,
    genero: "Unisex",
    marca: "Converse",
    keyBorradoLogico: 24,
    estado: true,
  },
  {
    id: 25,
    nombre: "Air Max 97",
    modelo: "Air Max",
    precio: 180,
    stock: 15,
    genero: "Mujer",
    marca: "Nike",
    keyBorradoLogico: 25,
    estado: true,
  },
  {
    id: 26,
    nombre: "Stan Smith Bold",
    modelo: "Stan Smith",
    precio: 100,
    stock: 20,
    genero: "Mujer",
    marca: "Adidas",
    keyBorradoLogico: 26,
    estado: true,
  },
  {
    id: 27,
    nombre: "Chuck Taylor All Star Platform",
    modelo: "Chuck Taylor",
    precio: 80,
    stock: 30,
    genero: "Mujer",
    marca: "Converse",
    keyBorradoLogico: 27,
    estado: true,
  },
  {
    id: 28,
    nombre: "Air Max 720",
    modelo: "Air Max",
    precio: 200,
    stock: 10,
    genero: "Hombre",
    marca: "Nike",
    keyBorradoLogico: 28,
    estado: true,
  },
  {
    id: 29,
    nombre: "Superstar Foundation",
    modelo: "Superstar",
    precio: 85,
    stock: 25,
    genero: "Hombre",
    marca: "Adidas",
    keyBorradoLogico: 29,
    estado: true,
  },
  {
    id: 30,
    nombre: "Air Max 270 React",
    modelo: "Air Max",
    precio: 150,
    stock: 15,
    genero: "Unisex",
    marca: "Nike",
    keyBorradoLogico: 30,
    estado: true,
  },
];

module.exports = productos;
