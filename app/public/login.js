// Definición de Variables

const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + '/excelJavaScript/js'));

const xlsx = require('xlsx');
const form1 = document.getElementById('formulario1');
let usuario = form1.usuario;
let contrasena = form1.contrasena;
console.log(usuario); 

let data = [
    {
        Nombre: 'Juan',
        Edad: 30,
        ciudad: 'Madrid'
    },
    {
        Nombre: 'María',
        Edad: 25,
        ciudad: 'Barcelona'
    },
    {
        Nombre: 'Pedro',
        Edad: 35,
        ciudad: 'Valencia'
    }
]


// Funciones
function leerExcel(ruta) {
    const libroWork = xlsx.readFile(ruta);
    const hojaLibroWork = libroWork.SheetNames;

   // console.log(hojaLibroWork);
    const hoja = hojaLibroWork[0];
    const dataExcel = xlsx.utils.sheet_to_json(libroWork.Sheets[hoja]);
    
    console.log(dataExcel);
  /*let creaHojaOpciones = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(libroWork, creaHojaOpciones, 'Hoja03');
    xlsx.writeFile(libroWork, ruta);*/
}   

leerExcel('excel/baseDatosExcel.xlsx');

// Eventos
