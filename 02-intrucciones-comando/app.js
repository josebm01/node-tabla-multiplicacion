const { crearArchivo } = require('./helpers/multiplicar');
require('colors');

const argv = require('./config/yargs');

    

console.clear();
// console.log(argv);



//! Obteniendo los datos manualmente
//* Desestructuración del arreglo de la consola 
// const [ , , arg3='base=5' ] = process.argv;
// //* Obteniendo solo el numero de 'base=5'
// const[ , base=5 ] = arg3.split('=');

const base = argv.b;
const listar = argv.l;
const limite = argv.hasta;

// console.log(limite);

crearArchivo(base, listar, limite)
    .then( nombreArchivo => console.log(`${nombreArchivo} creado`.brightRed))
    .catch(err => console.log(err));  




