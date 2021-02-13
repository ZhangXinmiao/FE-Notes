// 能否打印出错误：不能
try {
    Promise.resolve().then(() => {throw new Error('Whoops.')});
} catch (e) {
    console.log(e) // 
}