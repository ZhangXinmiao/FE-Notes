function MyPromise (excutor) {
    this.status = 'pending';
    this.value = null;
    this.callbacks = [];
    var resolve = (value) => {
        transition(this, 'fullfilled', value);
    }
    var reject = (error) => {
        transition(this, 'rejection', error);
    }
    try {
        excutor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

var transition = function (promise, status, value) {
    // if (status !== 'pending') return;
    promise.status = status;
    promise.value = value;
    handleCallbacks(promise.callbacks, status, value);
}

var handleCallback = function (callback, status, value) {
    var defaultFunc = () => {};
    var onFullFilled = callback.onFullFilled || defaultFunc,
        onRejected = callback.onRejected || defaultFunc,
        resolve = callback.resolve || defaultFunc,
        reject = callback.reject || defaultFunc;
    try {
        status === 'fullfilled' ? resolve(onFullFilled(value)) : reject(onRejected(value));
    } catch (error) {
        reject(error);
    }
}

var handleCallbacks = function (callbacks, status, result) {
    while (callbacks.length)
        handleCallback(callbacks.shift(), status, result);
}

MyPromise.prototype.then = function (onFullFilled, onRejected) {
    return new MyPromise((resolve, reject) => {
        var callback = {
            onFullFilled,
            onRejected,
            resolve,
            reject
        };
        if (this.status === 'pending') {
            this.callbacks.push(callback);
        } else {
            handleCallback(callback, this.status, this.value);
        }
    });
}

new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        console.log('3s done');
        resolve('done');
    }, 1000);
}).then(function (result) {
    console.log(result);
}).then(function () {
    console.log('test 链式调用');
    return 222;
}).then(function (result) {
    console.log('result', result);
});

