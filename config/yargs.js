const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es el número elegido para hacer la tabla de multiplicar.'
            })
            .option('s', {
                alias: 'show',
                type: 'boolean',
                default: false,
                describe: 'Sirve para mostrar la tabla de multiplicar.'
            })
            .option('l', {
                alias: 'limit',
                type: 'number',
                default: 10,
                describe: 'Sirve para ponerle un límite a la tabla de multiplicar.'
            })
            .check((argv, options) => {
                if (isNaN(argv.b))
                    throw 'La base debe ser un número.';
                return true;
            })
            .argv;

module.exports = argv;
