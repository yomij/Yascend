/**
 * Date: 2023/11/03
 *
 * Title: 117. 填充每个节点的下一个右侧节点指针 II
 *
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    let list = [root]
    while (list.length) {
        let temp = []
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            item.left && temp.push(item.left)
            item.right && temp.push(item.right)
            item.next = list[i + 1] || null
        }
        list = temp
    }
    return root
};
