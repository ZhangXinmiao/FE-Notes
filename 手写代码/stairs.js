// n级台阶，从0开始走起，一次可以走一步或者两步，那么走完n级台阶一共有多少种走法
// f(n) = f(n - 1) + f(n - 2) + 2
// f(1) = 1
// f(2) = 2
function getResult (n) {
    var dp = [];
    dp[1] = 1;
    dp[2] = 2;
    var i = 3;
    while(i <= n) {
        dp[i] = dp[i - 1] + dp[i - 2] + 2;
        i++;
    }
    return dp[n];
}
console.log(getResult(1));
console.log(getResult(2));
console.log(getResult(3));
console.log(getResult(4));
