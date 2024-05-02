import xlsxPopulate from 'xlsx-populate';

const datos = [];

async function login (req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if (!user || !password) {
        return res.status(400).send({status:"error", message: 'Los campos están incompletos'});
    }
    try {
        const libroCalculo = await xlsxPopulate.fromFileAsync('./excel/baseDatosExcel.xlsx');
        const registros = libroCalculo.sheet('bd_estudiantes').usedRange().value();
        const objeto = registros.reduce((acum, [NUM, CODIGO, NOMBRES, GRADO, PUNTAJE]) => { 
                acum[NUM] = {CODIGO, NOMBRES, GRADO, PUNTAJE};
                return acum;
        }, {});
        datos.push(objeto);
        console.log(datos);
    //  const encontrarUsuario = datos.foreach(clave => {
    //     if (clave === 102) {
    //         console.log('Encontró el usuario', encontrarUsuario);
    //     }
    // })
        // console.log(objeto);
    } catch (error) {
        console.error('Error al leer el archivo de Excel', error);   
    }
    
}

export const methods = {
    login
}