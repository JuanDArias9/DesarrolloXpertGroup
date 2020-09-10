const Calificar = require('../models/calificar.js');

const calificarController = {};

calificarController.calificarConversacion = (req, res) => {
    const calificar = new Calificar(req.body.conversacion);
    console.log(req.body.conversacion);
    res.json(calificar.calificarConversacion())
}

module.exports = calificarController;