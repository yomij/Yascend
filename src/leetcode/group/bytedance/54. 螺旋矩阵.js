/**
 * Date: 2023/10
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 1) {
        return matrix[0]
    }
    let roop = 0
    let xM =  matrix[0].length
    let yM = matrix.length
    const count = xM * yM
    const res = []
    while (res.length < count - 1) {
        let x = roop
        let y = roop
        while (x < xM - roop - 1) {
            res.push(matrix[y][x])
            x++
        }
        while (y < yM - roop - 1) {
            res.push(matrix[y][x])
            y++
        }
        while (x > roop) {
            res.push(matrix[y][x])
            x--
        }
        while (y >= roop + 1) {
            res.push(matrix[y][x])
            y--
        }
        roop++
    }

    if (res.length !== count) {
        res.push(matrix[~~(xM / 2)][~~(xM / 2)])
    }
    return res.slice(0, count)
};

console.log(spiralOrder([[7],[9],[6]]))