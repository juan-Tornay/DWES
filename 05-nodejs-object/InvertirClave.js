function invertKeyValue(obj) {
    const invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
}

const obj = { "z": "q", "w": "f" };
console.log(invertKeyValue(obj));