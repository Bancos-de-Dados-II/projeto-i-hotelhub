import routes from './routes/hotelRoutes.js';
import express, { Router } from 'express'
const app = express();

app.use(express.json());

app.use('/hotel', routes);

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} 🚀🚀🚀`);
});



