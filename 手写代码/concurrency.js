function concurrencyFunc (list, concurrency) {
    if (!list.length) return;
    var currentList = list.slice(0, concurrency);
    for (var i = 0; i < currentList.length; i++) {
        list.splice(0, 1);
        currentList[i]().then(function () {
            concurrencyFunc(list, 1);
        }).catch((e) => {});
    }
}

var requests = [
    function () {
        console.log('request1 start');
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request1 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request2 start');
            setTimeout(() => {
                console.log('request2 done');
                resolve();
            }, 2000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request3 start');
            setTimeout(() => {
                console.log('request3 done');
                resolve();
            }, 3000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request4 start');
            setTimeout(() => {
                console.log('request4 done');
                resolve();
            }, 4000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request5 start');
            setTimeout(() => {
                console.log('request5 done');
                resolve();
            }, 5000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request6 start');
            setTimeout(() => {
                console.log('request6 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request7 start');
            setTimeout(() => {
                console.log('request7 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request8 start');
            setTimeout(() => {
                console.log('request8 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            console.log('request9 start');
            setTimeout(() => {
                console.log('request9 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request10 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request11 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request12 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request13 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request14 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request15 done');
                resolve();
            }, 1000);
        })
    },
    function () {
        return new Promise(function (resolve) {
            setTimeout(() => {
                console.log('request16 done');
                resolve();
            }, 1000);
        })
    },
];

concurrencyFunc(requests, 5);


