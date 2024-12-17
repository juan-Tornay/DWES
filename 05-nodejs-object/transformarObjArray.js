function transformObjectToArray(obj) {
    return Object.entries(obj);
}

const obj = { a: 1, b: 2 };
console.log(transformObjectToArray(obj));