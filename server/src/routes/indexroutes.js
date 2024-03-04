const { Router } = require("express");
//Cliente/Usuario
const postUser = require("../controllers/Users/signUp");
const getUser = require("../controllers/Users/getUser");
const putUser = require("../controllers/Users/putUser");
const deleteUser = require("../controllers/Users/deleteUser");
const login = require("../controllers/Users/LogIn");
//Productos
const getProdu = require("../controllers/Productos/getProductos");
const postProdu = require("../controllers/Productos/postProductos");
const deleteProdu = require("../controllers/Productos/deleteProductos");
const putProdu = require("../controllers/Productos/putProductos");
//Carrito
const postCarrito = require("../controllers/Carrito/postCarrito");
const deleteCarrito = require("../controllers/Carrito/deleteCarrito");
const getCarritos = require("../controllers/Carrito/getCarritos")

//MercadoPago
const makePayment = require("../controllers/PasarelaDePagos/makePayment");

const router = Router();

//*Productos
router.get("/getproductos", getProdu.getProductos);
router.get("/getproductosmv", getProdu.getProductosSeleccionados);
router.get("/getproductosON", getProdu.getProductosON); // endpoint para productos activos
router.get("/getproductos/:id", getProdu.getProductosById);
router.get("/getproductosByName", getProdu.getProductosByName);
router.get("/getproductosFilter", getProdu.getProductosFilter);

//admin
router.post("/postproductos", postProdu.postProductos);

router.put("/updateproductos/:id", putProdu.updateProductos);

//esta ruta corresponde a una ruta de borrado lógico, a través del estado: activo o inactivo.
router.put("/updatestateproductos/:id", putProdu.borradoLogicoProductos);
//esta ruta corresponde a la ruta para borrado definitivo.
router.delete("/deleteproductos/:id", deleteProdu.deleteProductos);

//*Usuario/Cliente
// Obtiene todos los clientes
router.get("/getuser", getUser.getAllUsers); //endpoint para todos los clientes
// obtiene los datos desde el google
router.post("/signupgoogle", postUser.signUpUserGoogle);
router.post("/signup", postUser.signUpUser);
router.get("/login", login.login);
router.get("/loginGoogle", login.loginGoogle); // nuevo endpoint para el login desde google

// Crea el usuario sin google / complemento del google
router.put("/updateuser", putUser.updateUser);
//borrado definitivo a través de email
router.delete("/deleteuser", deleteUser.deleteUser);
//desactivar cuenta temporalmente / implementación de borrado lógico.
router.put("/updatestateuser", putUser.updateStateUser);
//cambio de contraseña
router.post("/recovery", login.mailPassword);
router.post("/change-password", login.cambioPassword);

//*Carrito
router.post("/createOrden", postCarrito.postOrden);
<<<<<<< Updated upstream
router.post("/getCarritosPrueba", postCarrito.postOrden);

router.get("/getOrden", getCarritos.getCarritos)
router.delete("/deleteOrden", deleteCarrito.deleteCarrito)
=======
// router.get("/getOrden", getOrden)
router.delete("/deleteOrden", deleteCarrito.deleteCarrito);
>>>>>>> Stashed changes

//*MercadoPago
router.post("/create_preference", makePayment);

module.exports = router;
