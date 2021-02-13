function myInstance (obj, constructorFunc) {
    if (!obj) return false;
    if (obj.__proto__ == constructorFunc.prototype) return true;
    return myInstance(obj.constructor.prototype.__proto__, constructorFunc.prototype);
}

console.log(myInstance({}, Object));
console.log(myInstance([], Array));
console.log(myInstance([], Object));
console.log(myInstance([] instanceof String));