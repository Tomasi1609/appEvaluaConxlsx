import xlsx from 'xlsx';


async function login (req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if (!user || !password) {
        return res.status(400).send({status:"error", message: 'Los campos están incompletos'});
    }
    try {
        const libroCalculo = xlsx.readFile('./excel/baseDatosExcel.xlsx');
        const hojasDelLibro = libroCalculo.SheetNames;
        const hoja = hojasDelLibro[0];
        const registros = xlsx.utils.sheet_to_json(libroCalculo.Sheets[hoja]);
        registros.forEach((objeto) => { 
            if ((objeto.COD == user) && (objeto.COD == password)) {
                return console.log('Si existe el usuario1: ', objeto.NOMBRES);
                
            } 
        });
        
    
    } catch (error) {
        console.error('Error al leer el archivo de Excel', error);   
    }
    
}

export const methods = {
    login
}