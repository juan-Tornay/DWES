const express = require('express');
const app = express();
const usuariosControlador = require('./controladores/usuariosControlador');


app.use(express.json());


app.get('/usuarios', usuariosControlador.listarUsuarios);
app.post('/usuarios', usuariosControlador.crearUsuario);



const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
