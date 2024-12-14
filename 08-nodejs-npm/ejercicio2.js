
import { faker } from '@faker-js/faker';
import chalk from 'chalk';


    const nombreAleatorio = faker.name.fullName();
    const colores = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.magenta, chalk.cyan, chalk.white];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];


        
          console.log(colorAleatorio(nombreAleatorio));