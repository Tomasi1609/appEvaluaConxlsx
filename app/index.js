// LLamo la libreria express
import express from 'express';


// Servidor
const app = express();
app.set('port', 4100);
app.listen(app.get('port'));
console.log('Servidor corriendo en el puerto ', app.get('port'));
