const usuarioService = require("../Service/usuarioService");

class usuarioController {
  // Listar todos los usuarios
  static async listarUsuario(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuario();  // Llamamos al servicio para listar usuarios
      res.json(usuarios);  // Retornamos la lista de usuarios en formato JSON
    } catch (error) {
      console.error('Error al listar usuarios:', error); 
      res.json({ error: 'Error al listar usuarios.' });  // En caso de error, devolvemos un mensaje de error
    }
  }

  // Crear un nuevo usuario
  static async crearUsuario(req, res) {
    try {
      const { nombre, email } = req.body;  // Obtenemos los datos del cuerpo de la solicitud
      if (!nombre || !email) {
        return res.status(400).json({ error: 'El nombre y el email son requeridos.' });
      }
      const nuevoUsuario = await usuarioService.crearUsuario({ nombre, email });  // Llamamos al servicio para crear un usuario
      res.status(201).json(nuevoUsuario);  // Retornamos el usuario creado con estado 201
    } catch (error) {
      console.error('Error al crear usuario:', error);
      return res.status(500).json({ error: 'Error al crear usuario.' });  // En caso de error, devolvemos un mensaje de error
    }
  }

  // Actualizar un usuario
  static async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;  // Obtenemos el ID del usuario a actualizar desde los parámetros de la URL
      const { nombre, email } = req.body;  // Obtenemos los nuevos datos del usuario desde el cuerpo de la solicitud

      if (!nombre && !email) {
        return res.status(400).json({ error: 'Se debe proporcionar al menos un campo para actualizar.' });
      }

      const usuarioActualizado = await usuarioService.actualizarUsuario(id, { nombre, email });  // Llamamos al servicio para actualizar el usuario
      res.json(usuarioActualizado);  // Retornamos el usuario actualizado
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error al actualizar usuario.' });  // En caso de error, devolvemos un mensaje de error
    }
  }

  // Eliminar un usuario
  static async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;  // Obtenemos el ID del usuario a eliminar desde los parámetros de la URL
      const mensaje = await usuarioService.eliminarUsuario(id);  // Llamamos al servicio para eliminar el usuario
      res.json(mensaje);  // Retornamos un mensaje de éxito
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error al eliminar usuario.' });  // En caso de error, devolvemos un mensaje de error
    }
  }
}

module.exports = usuarioController;
