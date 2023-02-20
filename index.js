import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 9000,() => {'Servidor en el puerto', process.env.PORT || 9000});