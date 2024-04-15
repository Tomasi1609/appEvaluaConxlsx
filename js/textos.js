// Se define el texto con el título Principal

let tituloPrincipal = 'Cuestionarios Saber ITAH';
const titPrinc = document.getElementById('tituloPrincipal');
titPrinc.innerHTML = `<h1> ${tituloPrincipal}</h1>`;


// Se define el texto del pie de página

var symbol = String.fromCharCode(169);
let piePagina = `SolucionesTecnológicasITAH ${symbol}`;
const pieDePagina = document.getElementById('piePagina');
pieDePagina.innerHTML = piePagina;
