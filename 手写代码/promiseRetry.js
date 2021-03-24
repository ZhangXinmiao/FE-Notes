// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
Promise.prototype.retry = function (fn, times = 1) {
    return new Promise(async function (resolve, reject) {
        while (times--) {
            try {
                console.log('retry');
                var result = await fn();
                resolve(result);
            } catch (error) {
                if (!times) {
                    reject(error);
                }
            }
        }
    });
}