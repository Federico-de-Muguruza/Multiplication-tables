const {multiplication} = require('./helpers/multiplication');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

console.log(argv);

multiplication(argv.b, argv.s, argv.l)
    .then(fileName => console.log((fileName, 'Creado').green))
    .catch(err => console.log(err.red));
