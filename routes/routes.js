// Importamos el módulo express y las funciones del controlador de usuario
import express from "express";
import 
{ home, addUser, getUser, editUser, deleteUser, addTranfer, getTranfer } from "../controller/userController.js";

// Creamos un nuevo router
const router = express.Router();

// Definimos las rutas y las funciones que se ejecutarán cuando se acceda a cada ruta
router.get("/", home) // Ruta de inicio
router.post("/usuario", addUser) // Ruta para agregar un usuario
router.get("/usuarios", getUser) // Ruta para obtener todos los usuarios
router.put('/usuario', editUser) // Ruta para editar un usuario
router.delete('/usuario', deleteUser) // Ruta para eliminar un usuario
router.post('/transferencia', addTranfer) // Ruta para agregar una transferencia
router.get('/transferencias', getTranfer) // Ruta para obtener todas las transferencias


export default router;


