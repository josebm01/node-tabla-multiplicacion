// Importanto el paquete de FileSystem para hacer acciones en el sistema
const fs = require('fs');


//* Si no recibe un valor, por defecto tendrá 5
//* Transformando la función anterior en una función asyncrona para devolver una promesa y manejar cuando se ejecute correctamente y cuando ocurra un error
const crearArchivo = async ( base = 5, ) => {

    try {

        console.log("========================");
        console.log(`       Tabla del ${base}`);
        console.log("========================");
        
        let salida = '';
        for (let index = 1; index <= 10; index++) {
            result = base * index;
            salida += `${base} x ${index} = ${result} \n`;
        }

        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida); 
        return `tabla-${base}.txt`; 

    } catch (error) {
        throw error;
    }
    
}



// const crearArchivo = ( base = 5, ) => {



//     return new Promise((resolve, reject) => {

//         console.log("========================");
//         console.log(`       Tabla del ${base}`);
//         console.log("========================");

//         let salida = '';
//         for (let index = 1; index <= 10; index++) {

//             result = base * index;
//             salida += `${base} x ${index} = ${result} \n`;

//         }

        
//         fs.writeFileSync(`tabla-${base}.txt`, salida); 
//         resolve(`tabla-${base}.txt`);

//     });
    
// }









//* Exportando la función
module.exports = {
    crearArchivo
}