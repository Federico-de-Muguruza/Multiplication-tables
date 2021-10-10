const fs = require('fs');
const colors = require('colors');

const multiplication = async (base = 5, showTable = false, limit = 10) => {

    if (limit < 1)
        limit = 10;

    try {
        let exit = '';
    
        for(let i = 1; i <= limit; i++) {
            exit += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (showTable) 
            console.log(exit.cyan);

        const fileName = `${base}-table.txt`;

        createMultiplicationFile(fileName, exit);
    
        return fileName;
    } catch (err) {
        throw err;
    }
}

const createMultiplicationFile = (fileName, exit) => {
    createFolder();
    fs.writeFileSync(`./tables/${fileName}`, exit);
}

const createFolder = () => {
    const folder = './tables';

    if ( ! fs.existsSync(folder)) 
        fs.mkdirSync(folder);  
}

module.exports = {
    multiplication
}