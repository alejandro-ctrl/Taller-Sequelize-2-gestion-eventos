const inscripcionService = require("../Service/inscripcionService");


class inscripcionController {
  // Listar 
  static async listarInscripcion(req, res) {
    try {
      const inscripcion = await inscripcionService.listarInscripcion(); 
      res.json(inscripcion); 
    } catch (error) {
      console.error('Error al listar inscripciones:', error); 
      res.json({ error: 'Error al listar inscripciones.' }); 
    }
  }

  // Crear 
  static async crearInscripcion (req, res) {
  
    try {
  
      
    } catch (error) {
      console.error('Error al crear  inscripcion:', error);
      return res.json({ error: 'Error al crear  inscripcion ingresada.' });
    }
  };

  // Actualizar
  static async actualizarInscripcion(req, res) {
    try {
      
    } catch (error) {
      res.json({ error: "Error al actualizar la inscripcion solicitado." });
    }
  }

  // Eliminar
  static async eliminarInscripcion(req, res) {
    try {
     
    } catch (error) {
      res.json({ error: "Error al eliminar inscripcion." });
    }
  }

  
}

module.exports = inscripcionController;
