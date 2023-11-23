/**
 * Date: 2023/11/22
 *
 * Title: 1648. 销售价值减少的颜色球.js
 *
 * Tag:
 *
 * Desc:
 *
 */

/**
 * TODO
 * 模拟法 + 二分 超时了
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function(inventory, orders) {
    let res = 0
    const list = inventory.sort((a, b) => a - b)
    const resort = () => {
        const target = list.pop()
        let l = 0
        let r = list.length - 1
        while (l < r) {
            let mid = Math.floor((l + r) / 2)
            if (list[mid] > target) {
                r = mid - 1
            } else if (list[mid] < target) {
                l = mid + 1
            } else {
                list.splice(mid, 0, target)
                return
            }
        }
        list.splice(list[l] > target ? l : l + 1, 0, target)
    }

    while (orders > 0) {
        let last = list.length - 1
        res += list[last]
        list[last]--
        if (list[last] < list[last - 1]) {
            resort()
        }
        orders--
    }
    return res
};
