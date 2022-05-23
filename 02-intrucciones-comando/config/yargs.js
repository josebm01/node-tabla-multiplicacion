//* node app --help aparece la opción para --base 
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true, // El comando es requerido
                    describe: 'Es la base de la tabla de multilplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10, 
                    describe: 'Límite para hacer la tabla de multiplicaciones'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicar en consola'
                })
                .check( (argv, options) => { //* Check verifica si ciertas condiciones son aplicadas
                    if( isNaN( argv.b) ){ // Verifica si no es un número
                        throw 'La base debe ser un número'  
                    }

                    return true; // Cuando no exista un error
                }) 
                .argv;


//* Exportando solo la constante
module.exports = argv;