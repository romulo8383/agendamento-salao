const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    data: { type: Date, required: true },
    servico: { type: String, required: true },
    profissional: { type: String, required: true }
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;