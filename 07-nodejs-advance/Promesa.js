class Promesa {
    constructor(ejecutor) {
        this.estado = 'pendiente';
        this.valor = undefined;
        this.razon = undefined;
        this.onResolve = null;
        this.onReject = null;

        try {
            ejecutor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(valor) {
        this.valor = valor;
        if (this.onResolve) {
            this.onResolve(valor);
        }
    }

    reject(razon) {
        this.razon = razon;
        if (this.onReject) {
            this.onReject(razon);
        }
    }

    then(onResolve) {
        this.onResolve = onResolve;
    }

    catch(onReject) {
        this.onReject = onReject;
        return this;
    }
}

const promesilla = new Promesa(function(resolve, reject) {
    resolve('¡Éxito!');
});

promesilla.then(function(valor) {
    console.log(valor);
}).catch(function(razon) {
    console.log(razon);
});
