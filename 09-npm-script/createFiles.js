import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const createFolder = (folderPath) => {
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
                console.log(`Carpeta creada: ${folderPath}`);
            } else {
                console.log(`La carpeta ya existe: ${folderPath}`);
            }
        };

        const createFile = (filePath, content) => {
            fs.writeFileSync(filePath, content);
            console.log(`Archivo creado: ${filePath}`);
        };

        const deleteFolder = (folderPath) => {
            if (fs.existsSync(folderPath)) {
                fs.rmSync(folderPath, { recursive: true, force: true });
                console.log(`Carpeta borrada: ${folderPath}`);
            } else {
                console.log(`La carpeta no existe: ${folderPath}`);
            }
        };

        const deleteJsFiles = (folderPath) => {
            if (fs.existsSync(folderPath)) {
                const files = fs.readdirSync(folderPath);
                files.forEach(file => {
                    if (path.extname(file) === '.js') {
                        fs.unlinkSync(path.join(folderPath, file));
                        console.log(`Archivo .js borrado: ${file}`);
                    }
                });
            } else {
                console.log(`La carpeta no existe: ${folderPath}`);
            }
        };

                const folderPath = path.join(__dirname, 'files');

                // Procesar argumentos
                const args = process.argv.slice(2);
                const command = args[0];
                const name = args[1];

                switch (command) {
                    case 'crear:files':
                        createFolder(folderPath);
                        const filePath = path.join(folderPath, 'ejemplito.txt');
                        createFile(filePath, 'Esto es un ejemplo de un txt que se guarda en la carpeta files');
                        break;
                    case 'crear:js':
                        if (name) {
                            const jsFilePath = path.join(folderPath, `${name}.js`);
                            createFile(jsFilePath, `// Archivo ${name}.js`);
                        } else {
                            console.log('Por favor, proporciona un nombre para el archivo .js');
                        }
                        break;
                    case 'crear:carpeta':
                        if (name) {
                            const newFolderPath = path.join(folderPath, name);
                            createFolder(newFolderPath);
                        } else {
                            console.log('Por favor, proporciona un nombre para la carpeta');
                        }
                        break;
                    case 'borrar':
                        deleteFolder(folderPath);
                        break;
                    case 'borrar:js':
                        deleteJsFiles(folderPath);
                        break;
                    default:
                        console.log('Comando no reconocido');
                }