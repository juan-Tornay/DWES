class Promesa {
    constructor(executor) {
        this.onResolve = null; // Almacena la función a llamar en caso de éxito
        this.onReject = null;  // Almacena la función a llamar en caso de error
        this.value = undefined; // Almacena el valor resuelto
        this.reason = undefined; // Almacena el motivo del rechazo

        // Llama al executor y pasa las funciones resolve y reject
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(value) {
        this.value = value;
        if (this.onResolve) {
            this.onResolve(value); // Llama a la función de éxito
        }
    }

    reject(reason) {
        this.reason = reason;
        if (this.onReject) {
            this.onReject(reason); // Llama a la función de error
        }
    }

    then(onResolve) {
        this.onResolve = onResolve; // Almacena la función de éxito
        return this; // Permite el encadenamiento
    }

    catch(onReject) {
        this.onReject = onReject; // Almacena la función de error
        return this; // Permite el encadenamiento
    }
}

// Uso de la clase Promesa
const promesilla = new Promesa(function(resolve, reject) {
    resolve('Success!'); // Llama a resolve para indicar éxito
    // reject("Error!"); // Descomentar para simular un error
});

// Llama a then en la instancia promesilla
promesilla.then(function(value) {
    console.log(value); // Esto imprimirá "Success!"
}).catch(function(reason) {
    console.log(reason); // Esto imprimiría un error si se rechaza
});
