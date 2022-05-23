const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 2;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));  


/* Grabando la salida en un archivo 
- El primer argumento es el nombre del archivo
- El segundo argumento es lo que recibe para guardar en el archivo
- El tercer argumento es un call-back que sirve para manejar si ocurre un error 
*/

// fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
//     if(err) throw err;

//     console.log(`table-${num}.txt creado`);
// });



