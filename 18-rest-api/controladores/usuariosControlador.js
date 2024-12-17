let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@example.com' },
  { id: 2, nombre: 'María', email: 'maria@example.com' }
];

exports.listarUsuarios = (req, res) => {
  res.status(200).json(usuarios);
};

exports.obtenerUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.status(404).json({
      codigo: 404,
      error: 'No encontrado',
      mensaje: 'Usuario no encontrado'
    });
  }
  res.status(200).json(usuario);
};

exports.crearUsuario = (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
};

exports.actualizarUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.status(404).json({
      codigo: 404,
      error: 'No encontrado',
      mensaje: 'Usuario no encontrado'
    });
  }
  usuario.nombre = req.body.nombre || usuario.nombre;
  usuario.email = req.body.email || usuario.email;
  res.status(200).json(usuario);
};

exports.sobreescribirUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.status(404).json({
      codigo: 404,
      error: 'No encontrado',
      mensaje: 'Usuario no encontrado'
    });
  }
  usuario.nombre = req.body.nombre;
  usuario.email = req.body.email;
  res.status(200).json(usuario);
};

exports.borrarUsuario = (req, res) => {
  const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (usuarioIndex === -1) {
    return res.status(404).json({
      codigo: 404,
      error: 'No encontrado',
      mensaje: 'Usuario no encontrado'
    });
  }
  usuarios.splice(usuarioIndex, 1);
  res.status(204).send();
};