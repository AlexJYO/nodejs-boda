import express from 'express';
import { writeFile } from 'fs';
import { promisify } from 'util';


const writeFilePromise = promisify(writeFile);
const routes = express.Router();

async function writeFileAsistencia(dato) {
    try {
        await writeFilePromise('https://www.dropbox.com/s/m8gq3no9dmzy1sk/asistencia.csv', dato, {
            flag: 'a'
        });
    } catch (e) {
        console.error(e.message);
    }
}

routes.get('/', (req, res) => {
    res.send('Servidor escuchando');
});
routes.post('/asistencia', async (req, res) => {
    const now = new Date();
    let data = now.toLocaleString() + ',' + req.body.nombre+'\n';
    await writeFileAsistencia(data);
    res.send('Registro guardado con exito');

});

export default routes;
