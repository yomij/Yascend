/**
 * Date: 2023/10
 *
 * 给你一个大小为 m x n 的二进制矩阵 grid 。
 * 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
 * 岛屿的面积是岛上值为 1 的单元格的数目。
 * 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0
    let temp = 0
    const read = (x, y) => {
        if (x < 0 || y < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] === 0) {
            return
        }
        temp++
        grid[y][x] = 0
        read(x + 1, y)
        read(x, y - 1)
        read(x - 1, y)
        read(x, y + 1)
    }
    for (let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[0].length; x++) {
            if (grid[y][x]) {
                temp = 0
                read(x, y)
                res = Math.max(res, temp)
            }
        }
    }
    return  res
};

console.log(maxAreaOfIsland(
    [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
))