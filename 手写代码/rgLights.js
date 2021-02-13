// 使用Promise实现红绿灯交替重复亮
// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？

function createLight (color, delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(color);
            resolve();
        }, delay);
    });
}

function start () {
    var red = createLight('red', 3000);
    var yellow = createLight('yellow', 2000);
    var green = createLight('green', 1000);

    Promise.all([green, yellow, red]).then(() => {
        start();
    });
}

start();