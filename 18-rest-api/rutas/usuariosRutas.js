const express = require('express');
const usuariosControlador = require('../controladores/usuariosControlador');

const router = express.Router();

router.get('/', usuariosControlador.listarUsuarios);
router.get('/:id', usuariosControlador.obtenerUsuario);
router.post('/', usuariosControlador.crearUsuario); // Ruta para crear un nuevo usuario
router.put('/:id', usuariosControlador.sobreescribirUsuario);
router.patch('/:id', usuariosControlador.actualizarUsuario);
router.delete('/:id', usuariosControlador.borrarUsuario);

module.exports = router;