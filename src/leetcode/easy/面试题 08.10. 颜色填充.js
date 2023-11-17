/**
 * Date: 2023/11/15
 *
 * Title: 面试题 08.10. 颜色填充
 *
 * Tag: dfs
 *
 * Desc:
 *
 * 编写函数，实现许多图片编辑软件都支持的「颜色填充」功能。
 *
 * 待填充的图像用二维数组 image 表示，元素为初始颜色值。初始坐标点的行坐标为 sr 列坐标为 sc。需要填充的新颜色为 newColor 。
 *
 *「周围区域」是指颜色相同且在上、下、左、右四个方向上存在相连情况的若干元素。
 *
 * 请用新颜色填充初始坐标点的周围区域，并返回填充后的图像。
 *
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc]
    if (color === newColor) {
        return image
    }
    const dfs = (sr, sc) => {
        if (
            sr >= 0 &&
            sc >= 0 &&
            sr < image.length &&
            sc < image[0].length &&
            image[sr][sc] === color
        ) {
            image[sr][sc] = newColor
            dfs(sr - 1, sc)
            dfs(sr + 1, sc)
            dfs(sr, sc - 1)
            dfs(sr, sc + 1)
        }
    }
    dfs(sr, sc)
    return image
};
