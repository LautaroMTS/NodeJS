const readline = require('readline');

function esNombreElegante(nombre) {
    const empiezaConA = nombre.startsWith('a');
    const terminaConA = nombre.endsWith('a');
    const esTodoMinusculas = nombre === nombre.toLowerCase();
    return empiezaConA && terminaConA && esTodoMinusculas && nombre.length > 0;
}

function solicitarNombre() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Por favor, introduce un nombre: ', nombre => {
        if (esNombreElegante(nombre)) {
            console.log('El nombre introducido es elegante: true');
        } else {
            console.log('El nombre introducido es elegante: false');
        }
        rl.close();
    });
}

solicitarNombre();
