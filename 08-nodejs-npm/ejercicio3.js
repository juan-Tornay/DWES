import {DateTime} from 'luxon';
import chalk from 'chalk';

   
    const mostrarFecha = () => {
        const ahora = DateTime.now();
        const fecha = ahora.toFormat('dd-MM-yyyy');
        const tiempo = ahora.toFormat('HH:mm:ss');
        const segundos = ahora.second;

        if (segundos === 0 || segundos % 10 === 0) {
            console.log(`${fecha} ${chalk.green(tiempo)}`);
        } else {
            console.log(`${fecha} ${tiempo}`);
        }
    };

        setInterval(mostrarFecha, 1000);