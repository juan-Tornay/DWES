import fs from 'fs';

    const archivo= process.argv[2]


        if(!archivo) {
            console.log('Dame el nombre del archivo como argumento')
            process.exit(1);
        }



        fs.readFile(archivo, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }
            console.log('Contenido del archivo:');
            console.log(data);
        });