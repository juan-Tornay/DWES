function compararFechas(fecha1, fecha2 = new Date()) {
    const f1 = new Date(fecha1);
    const f2 = new Date(fecha2);

    if (f1 < f2) {
        return { fechaInicio: f1.toISOString(), fechaFin: f2.toISOString() };
    } else {
        return { fechaInicio: f2.toISOString(), fechaFin: f1.toISOString() };
    }
}

module.exports = compararFechas;