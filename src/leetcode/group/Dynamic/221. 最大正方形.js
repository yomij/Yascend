/**
 *
 * Date: 2023/11/06
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 */

/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxSideLength = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    matrix[i][j] = 1
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
                }
                maxSideLength = Math.max(maxSideLength, matrix[i][j])
            }
        }
    }
    return maxSideLength ** 2
};
