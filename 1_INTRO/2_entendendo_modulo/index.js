const fs = require('fs');       // Importa o módulo fs

fs.readFile('arquivo.txt', 'utf8', (err, data) => {    // Lê o arquivo.txt
    if (err) {
        console.error(err)
    return    
    }
    console.log(data);
});