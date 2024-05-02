// LLamo a las librerias 
import express from 'express';
import xlsxPopulate from 'xlsx-populate';


// Arreglar __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from './controllers/authentication.controller.js';



// Servidor
const app = express();
app.set('port', 4100);
app.listen(app.get('port'));
console.log('Servidor corriendo en el puerto', app.get('port'));


// Configuración
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Rutas
app.get('/', (req, res) => res.sendFile(__dirname + '/pages/login.html'));
app.get('/admin', (req, res) => res.sendFile(__dirname + '/pages/admin/admin.html'));
app.post('/api/login', authentication.login);