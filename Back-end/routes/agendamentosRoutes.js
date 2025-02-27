const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento.js'); // Ou outro caminho para o modelo

// Rota POST para criar agendamento
router.post('/', (req, res) => {
    const { usuario, data, servico, profissional } = req.body;

    // Validação dos campos
    if (!usuario || !data || !servico || !profissional) {
        return res.status(400).send('Todos os campos (usuario, data, servico, profissional) são obrigatórios');
    }

    const novoAgendamento = new Agendamento({
        usuario,
        data,
        servico,
        profissional,
    });

    // Salvar o agendamento no banco de dados
    novoAgendamento.save()
        .then((agendamento) => {
            res.status(201).json({
                message: 'Agendamento criado com sucesso!',
                agendamento: agendamento,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Erro ao criar agendamento',
                error: err.message,
            });
        });
});

// Rota GET para visualizar todos os agendamentos
router.get('/', (req, res) => {
    Agendamento.find()
        .then((agendamentos) => {
            res.status(200).json(agendamentos);
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Erro ao listar agendamentos',
                error: err.message,
            });
        });
});

// Rota PUT para atualizar agendamento
router.put('/:id', (req, res) => {
    const { usuario, data, servico, profissional } = req.body;
    
    // Validação dos campos
    if (!usuario || !data || !servico || !profissional) {
        return res.status(400).send('Todos os campos (usuario, data, servico, profissional) são obrigatórios');
    }

    // Atualizar agendamento no banco de dados
    Agendamento.findByIdAndUpdate(req.params.id, {
        usuario,
        data,
        servico,
        profissional,
    }, { new: true })
    .then((agendamento) => {
        if (!agendamento) {
            return res.status(404).send('Agendamento não encontrado');
        }
        res.status(200).json({
            message: 'Agendamento atualizado com sucesso!',
            agendamento: agendamento,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: 'Erro ao atualizar agendamento',
            error: err.message,
        });
    });
});

// Rota DELETE para deletar agendamento
router.delete('/:id', (req, res) => {
    Agendamento.findByIdAndDelete(req.params.id)
        .then((agendamento) => {
            if (!agendamento) {
                return res.status(404).send('Agendamento não encontrado');
            }
            res.status(200).send('Agendamento deletado com sucesso');
        })
        .catch((err) => {
            res.status(500).json({
                message: 'Erro ao deletar agendamento',
                error: err.message,
            });
        });
});

module.exports = router;