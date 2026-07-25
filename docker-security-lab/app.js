const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Ejemplo</h1>
    <p>Usuario actual: <strong>${process.env.USER || 'root'}</strong></p>
    <p><a href="/secrets">Ver secretos</a></p>
  `);
});

app.get('/secrets', (req, res) => {
  res.json({
    mensaje: "Estas son variables sensibles",
    DB_PASSWORD: process.env.DB_PASSWORD || "No definida",
    API_KEY: process.env.API_KEY || "No definida",
    usuario_proceso: process.env.USER || "root"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  console.log(`Usuario del proceso: ${process.env.USER || 'root'}`);
});