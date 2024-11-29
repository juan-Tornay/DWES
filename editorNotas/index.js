const fs = require('fs');
const readline = require('readline');
const path = require('path');


const notesDir = path.join(__dirname, 'notes');


if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log("\nEditor de Notas:");
    console.log("1. Crear nueva nota");
    console.log("2. Editar nota existente");
    console.log("3. Eliminar nota");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (option) => {
        switch (option) {
            case '1':
                createNote();
                break;
            case '2':
                editNote();
                break;
            case '3':
                deleteNote();
                break;
            case '4':
                console.log("Adiós!");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
                mainMenu();
                break;
        }
    });
}

function createNote() {
    rl.question("Ingrese el nombre de la nueva nota: ", (noteName) => {
        const notePath = path.join(notesDir, `${noteName}.note`);

        if (fs.existsSync(notePath)) {
            console.log("La nota ya existe. Elija otro nombre.");
            mainMenu();
            return;
        }

        console.log("Escriba el contenido de la nota. Finalice con dos líneas en blanco consecutivas.");
        let content = "";

        rl.on('line', (line) => {
            if (line === "" && content.endsWith("\n")) {
                fs.writeFileSync(notePath, content.trim());
                console.log(`Nota '${noteName}' creada exitosamente.`);
                rl.removeAllListeners('line');
                mainMenu();
            } else {
                content += line + "\n";
            }
        });
    });
}

function listNotes() {
    return fs.readdirSync(notesDir).filter(file => file.endsWith('.note'));
}

function editNote() {
    const notes = listNotes();

    if (notes.length === 0) {
        console.log("No hay notas disponibles para editar.");
        mainMenu();
        return;
    }

    console.log("Notas disponibles:");
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note}`);
    });

    rl.question("Seleccione el número de la nota que desea editar: ", (num) => {
        const noteIndex = parseInt(num) - 1;

        if (isNaN(noteIndex) || noteIndex < 0 || noteIndex >= notes.length) {
            console.log("Selección inválida.");
            mainMenu();
            return;
        }

        const notePath = path.join(notesDir, notes[noteIndex]);
        const currentContent = fs.readFileSync(notePath, 'utf8');
        console.log(`Contenido actual de la nota '${notes[noteIndex]}':\n${currentContent}`);
        console.log("Escriba el nuevo contenido. Finalice con dos líneas en blanco consecutivas.");

        let content = "";

        rl.on('line', (line) => {
            if (line === "" && content.endsWith("\n")) {
                fs.writeFileSync(notePath, content.trim());
                console.log(`Nota '${notes[noteIndex]}' editada exitosamente.`);
                rl.removeAllListeners('line');
                mainMenu();
            } else {
                content += line + "\n";
            }
        });
    });
}

function deleteNote() {
    const notes = listNotes();

    if (notes.length === 0) {
        console.log("No hay notas disponibles para eliminar.");
        mainMenu();
        return;
    }

    console.log("Notas disponibles:");
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note}`);
    });

    rl.question("Seleccione el número de la nota que desea eliminar: ", (num) => {
        const noteIndex = parseInt(num) - 1;

        if (isNaN(noteIndex) || noteIndex < 0 || noteIndex >= notes.length) {
            console.log("Selección inválida.");
            mainMenu();
            return;
        }

        const notePath = path.join(notesDir, notes[noteIndex]);
        fs.unlinkSync(notePath);
        console.log(`Nota '${notes[noteIndex]}' eliminada exitosamente.`);
        mainMenu();
    });
}

mainMenu();
