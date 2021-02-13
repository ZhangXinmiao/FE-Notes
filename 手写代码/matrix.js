/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(matrix.length < 1) return [];
    var result = [];
    var M = matrix.length;
    var N = matrix[0].length;
    var i = 0, j = 0;
    var flag = true;
    while(i < M && j < N) {
        result.push(matrix[i][j]);
        if (flag) {
            i--;
            j++;
        } else {
            i++;
            j--;
        }
        if (i < 0 || j < 0 || i === M || j === N) {
            if( flag ){
                // 右上
                if( j < N ) i = 0; // 上边越界，像右移动
                else {
                    // 右边越界，向下移动
                    i += 2;
                    j--;
                }
            }else {
                // 左下
                if( i < M) j = 0; // 左边越界， 像下移动
                else {
                    // 下边越界， 想右移动
                    i--;
                    j += 2;
                }
            }
            flag = !flag;
        }
    }
    return result;
};

var matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ];

console.log(findDiagonalOrder(matrix));