/**
 * Date: 2023/10
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 *
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        const temp = []
        const v = []
        for (let n of stack) {
            v.push(n.val)
            n.children && temp.push(...n.children)
        }
        stack = temp
        res.push(v)
    }
    return res
};