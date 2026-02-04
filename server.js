const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Rota "/" que retorna um objeto JavaScript com uma mensagem
app.get('/', (req, res) => {
  res.json({
    mensagem: 'Bem-vindo ao nosso pop-up!',
    titulo: 'Olá! 👋',
    descricao: 'Esta é uma mensagem especial que aparece em um pop-up destacado.'
  });
});

// Rota para servir a página HTML
app.get('/pagina', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
