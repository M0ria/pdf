import express from "express";
import {router} from "./routes/pdf.routes"
import path from 'path';

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())

app.use('/public',express.static(path.join(__dirname, '..', 'public')));
app.use(router);

console.log(path.join(__dirname, '..', 'public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
