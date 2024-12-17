function descomponerUrl(url) {
    const resultado = {
        protocolo: null,
        direccionIp: null,
        subDominio: null,
        nombreDominio: null,
        arbolDeCarpetas: null,
        archivoObjetivo: null,
        archivoDeArgumentos: null
    };

    try {
        const urlParseada = new URL(url);

        resultado.protocolo = urlParseada.protocol.replace(':', '');

        const partesHostname = urlParseada.hostname.split('.');
        if (partesHostname.length > 2) {
            resultado.subDominio = partesHostname[0];
            resultado.nombreDominio = partesHostname.slice(1).join('.');
        } else {
            resultado.subDominio = null;
            resultado.nombreDominio = urlParseada.hostname;
        }

        const regexIp = /^(\\d{1,3}\.){3}\d{1,3}$/;
        if (regexIp.test(urlParseada.hostname)) {
            resultado.direccionIp = urlParseada.hostname;
        }

        const partesDeRuta = urlParseada.pathname.split('/').filter(parte => parte);
        if (partesDeRuta.length > 1) {
            resultado.arbolDeCarpetas = partesDeRuta.slice(0, -1).join('/');
        } else {
            resultado.arbolDeCarpetas = null;
        }

        const ultimaParte = partesDeRuta[partesDeRuta.length - 1] || null;
        if (ultimaParte && ultimaParte.includes('.')) {
            resultado.archivoObjetivo = ultimaParte;
        } else {
            resultado.archivoObjetivo = ultimaParte;
        }

        resultado.archivoDeArgumentos = urlParseada.search || null;
    } catch (error) {
        console.error('URL inválida:', error);
    }

    return resultado;
}

const url = "https://www.realbetisbalompie.es/entradas/?utm_source=gads&utm_medium=paid_search&utm_campaign=bt_ticketing_always_on_adsmurai&utm_id=bt_00&utm_content=texto&https://www.realbetisbalompie.es/entradas?utm_source=gads&utm_medium=paid_search&utm_campaign=bt_ticketing_always_on_adsmurai&utm_id=bt_00&utm_content=texto&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc2jyU2GAfrCFhqmgXxpHBxYayfiOqYEUJCr7U_rMaoS2v5ur75adrRoCnacQAvD_BwE";

console.log(descomponerUrl(url));
