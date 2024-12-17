const fs = require('fs').promises;

async function readFileAsyncWithPromises() {
  console.log("Inicio de la lectura asíncrona con Promesas");

  try {
    
    const data = await fs.readFile('archivo.txt', 'utf8');
    console.log("Contenido del archivo (asincromo con Promesas):");
    console.log(data);
  } catch (err) {
    console.error("Error al leer el archivo:", err);
  }

  console.log("Fin de la lectura asincroma con Promesas");
}

readFileAsyncWithPromises();