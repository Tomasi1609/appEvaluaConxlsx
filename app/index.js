// LLamo la libreria express
import express from 'express';
import xlsx from 'xlsx';

// Arreglar __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// Servidor
const app = express();
app.set('port', 4100);
app.listen(app.get('port'));
console.log('Servidor corriendo en el puerto', app.get('port'));


// Configuración
app.use(express.static(__dirname + '/public'));

// Rutas
app.get('/', (req, res) => res.sendFile(__dirname + '/pages/login.html'));
app.get('/admin.html', (req, res) => res.sendFile(__dirname + '/pages/admin/admin.html'));