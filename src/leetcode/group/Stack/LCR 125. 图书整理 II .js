/**
 * Date: 2023/10/30
 *
 * 用两个栈实现队列
 *
 */

/**
 * @constructor
 */
var CQueue = function() {
    this.s1 = []
    this.s2 = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.s1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.s2.length) {
        if (!this.s1.length) {
            return -1
        }
        while (this.s1.length) {
            this.s2.push(this.s1.pop())
        }
    }

    return this.s2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */