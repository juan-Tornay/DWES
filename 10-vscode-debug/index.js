import { suma, resta } from './app.js';
import fetch from 'node-fetch';

const a = 5;
const b = 10;

console.log('Inicio del programa');
console.log('Valores iniciales:');
console.log('a: ' + a);
console.log('b: ' + b);

debugger;  

    let resultadoSuma = suma(a, b);
    console.log('Resultado de la suma: ' + resultadoSuma);

    let resultadoResta = resta(a, b);
    console.log('Resultado de la resta: ' + resultadoResta);

    console.log('Finalizacion del programa');

   
   
            // Ejercicio 1 
            console.log('Usando la consola en medio de la ejecución');

            // Ejercicio 2 
            debugger;    

            // Ejercicio 3
            resultadoSuma = 50;  
            console.log('Valor alterado de resultadoSuma: ' + resultadoSuma);

            // Ejercicio 4 

            // Ejercicio 5
            const url = 'https://jsonplaceholder.typicode.com/todos/1';

            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Datos recibidos:', data);
                debugger; // Punto de interrupción para inspeccionar la respuesta
            })
            .catch(error => console.error('Error:', error));

            // Ejercicio 6 
            
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Propiedades del objeto data:');
                for (const prop in data) {
                console.log(`${prop}: ${data[prop]}`);
                }

                
                console.log('Accediendo a una propiedad específica:');
                console.log('title:', data.title);

                debugger;    
            })
            .catch(error => console.error('Error:', error));