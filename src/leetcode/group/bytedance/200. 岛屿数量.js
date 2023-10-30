/**
 * Date: 2023/10
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    const len = grid[0].length
    let res = 0
    const read = (x, y) => {
        if (
            x < 0 ||
            y < 0 ||
            x === len ||
            y === grid.length ||
            grid[y][x] === '0'
        ) {
            return
        }
        grid[y][x] = '0'
        read(x, y - 1)
        read(x + 1, y)
        read(x, y + 1)
        read(x - 1, y)
    }

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < len; x++) {
            if (grid[y][x] === '1') {
                res++
                read(x, y)
            }
        }
    }

    return res
}


console.log(numIslands(
    [
        ["1","1","1","1","1","1"],
        ["1","0","0","0","0","1"],
        ["1","0","1","1","0","1"],
        ["1","0","0","0","0","1"],
        ["1","1","1","1","1","1"]]
))