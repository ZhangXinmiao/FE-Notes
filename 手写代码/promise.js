// MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise必然处于三种状态之一：pending、fullfilled、rejected

function MyPromise (excutor) {
    this.status = 'pending';
    this.data;
    this.resolveCbs = [];
    var resolve = (data) => {
        this.status = 'fullfilled';
        this.data = data;
        for (var i = 0; i < this.resolveCbs.length; i++) {
            this.resolveCbs[i](this.data);
        }
    }
    excutor = excutor || function () {};
    excutor(resolve);
}

MyPromise.prototype.then = function (onFullFilled, onRejected) {
    if (this.status === 'pending') {
        this.resolveCbs.push(onFullFilled);
    }
    if (this.status === 'fullfilled') {
        onFullFilled();
        // return new MyPromise(function (resolve) {resolve()});
    }
    if (this.status === 'rejected') {
        onRejected();
    }
}

MyPromise.prototype.catch = function (onRejected) {
    this.status = 'rejected';
}

MyPromise.prototype.finally = function (onFinally) {

}

var test = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        console.log('3s done');
        resolve('done');
    }, 3000);
});
test.then(function (result) {
    console.log(result);
})
.then(function () {
    console.log('test 链式调用');
});