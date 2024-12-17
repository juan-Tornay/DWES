function transformObjectToKeyValueArrays(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys, values];
}

const obj = { a: 1, b: 2, c: 3 };
console.log(transformObjectToKeyValueArrays(obj));