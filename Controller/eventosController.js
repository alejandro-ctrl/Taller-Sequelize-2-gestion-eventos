const eventoService = require('../Service/eventoService');

class EventoController {
  
  // Listar eventos
  static async listarEvento(req, res) {
    try {
      const eventos = await eventoService.listarEventos();
      res.json(eventos);
    } catch (error) {
      console.error('Error al listar eventos:', error);
      res.status(500).json({ error: 'Error al listar eventos.' });
      
    }
  }

  // Crear evento
  static async crearEvento(req, res) {
    try {
      const datosEvento = req.body;
      const evento = await eventoService.crearEvento(datosEvento);
      res.json(evento);
    } catch (error) {
      console.error('Error al crear evento:', error);
      res.status(500).json({ error: 'Error al crear evento.' });
    }
  }

  // Actualizar evento
  static async actualizarEvento(req, res) {
    try {
      const { id } = req.params;
      const datosEvento = req.body;
      const evento = await eventoService.actualizarEvento(id, datosEvento);
      res.json(evento);
    } catch (error) {
      console.error('Error al actualizar evento:', error);
      res.status(500).json({ error: 'Error al actualizar evento.' });
    }
  }

  // Eliminar evento
  static async eliminarEvento(req, res) {
    try {
      const { id } = req.params;
      const mensaje = await eventoService.eliminarEvento(id);
      res.json(mensaje);
    } catch (error) {
      console.error('Error al eliminar evento:', error);
      res.status(500).json({ error: 'Error al eliminar evento.' });
    }
  }

  // Inscripción
  static async inscribirseEnEvento(req, res) {
    try {
      const { usuarioId, eventoId } = req.body;
      const inscripcion = await eventoService.inscribirseEnEvento(usuarioId, eventoId);
      res.json(inscripcion);
    } catch (error) {
      console.error('Error al inscribirse en evento:', error);
      res.status(500).json({ error: 'Error al inscribirse en evento.' });
    }
  }

  // Cancelar inscripción
  static async cancelarInscripcion(req, res) {
    try {
      const { usuarioId, eventoId } = req.body;
      const mensaje = await eventoService.cancelarInscripcion(usuarioId, eventoId);
      res.json(mensaje);
    } catch (error) {
      console.error('Error al cancelar inscripción:', error);
      res.status(500).json({ error: 'Error al cancelar inscripción.' });
    }
  }

}

module.exports = EventoController;
