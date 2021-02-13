var person = {
    name: 'zxm',
    age: 24
};
function observe (obj, target) {
    Object.keys(obj).map(function (item) {
        Object.defineProperty(target, item, {
            get: function () {
                console.log('getter trigger:', this.value);
                return this.value;
            },
            set: function (val) {
                console.log('setter trigger:', val);
                this.value = val;
            }
        });
    });
}
function proxy (initData) {
    return new Proxy(initData, {
        set: function (obj, prop, value) {
            console.log('getter trigger:', value);
            obj[prop] = value;
            return true;
        },
        get: function (obj, prop) {
            console.log('setter trigger:', obj[prop]);
            return obj[prop];
        }
    })
}
var vue1 = function (options) {
    observe(options.data, this);
};
var vue2 = function (options) {
    return proxy(options.data);
};
var vm2 = new vue2({
    data: person
});
// setter
vm2.name = 'haha';
// getter
console.log(vm2.name); 
// var vm1 = new vue1({
//     data: person
// });


// person.name = 'haha';
// console.log(person.name);

// setter
// vm1.name = 'haha';
// getter
// console.log(vm1.name); 
// console.log(vm1);


