import { DateTime } from 'luxon';

const ahora = DateTime.now();
const fechaFormateada = ahora.toFormat('dd-MM-yyyy HH:mm:ss');

console.log(`Fecha actual: ${fechaFormateada}`);