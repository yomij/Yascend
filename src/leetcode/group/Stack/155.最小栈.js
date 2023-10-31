/**
 * Date: 2023/10/31
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 */

var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (!this.minStack.length) {
        this.minStack.push(val)
        return
    }
    if (val < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val)
    } else {
        this.minStack.push(this.minStack[this.minStack.length - 1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
