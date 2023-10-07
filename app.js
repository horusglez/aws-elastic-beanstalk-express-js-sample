const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola papi chulo, estas viendo porno solo, enserio?! no te la jales, papi!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
