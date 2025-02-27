const express = require('express');
const mongoose = require('mongoose');
const agendamentosRoutes = require('./routes/agendamentosRoutes'); // O caminho correto para o arquivo

const app = express();
const port = 3000;

app.use(express.json());  // Permite que o servidor entenda o JSON no corpo da requisição
app.use('/api/agendamento', agendamentosRoutes);  // A rota para os agendamentos

mongoose.connect('mongodb://localhost:27017/agendamentos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB!'))
.catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});