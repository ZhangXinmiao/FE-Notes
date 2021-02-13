// https://mp.weixin.qq.com/s/7ycHJtq81icA-BtY0WEzXw （关于performance的一篇比较完整的文章）
async function doTask1() {
    setTimeout(function () {
        console.log('do task1');
    }, 2000);
}
async function doTask2() {
    setTimeout(function () {
        console.log('do task2');
    }, 1000);
}
async function run() {
    performance.mark("startTask1");
    await doTask1(); // Some developer code
    performance.mark("endTask1");
  
    performance.mark("startTask2");
    await doTask2(); // Some developer code
    performance.mark("endTask2");
  
    // Log them out
    const entries = performance.getEntriesByType("mark");
    console.log(entries);
    // for (const entry of entries) {
    //   console.table(entry.toJSON());
    // }
}
run();