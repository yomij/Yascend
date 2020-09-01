/**
 * Date: 2020/09/01
 * Tag: Stack
 * Question:
 *  901. 股票价格跨度
 *  编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。
 *  今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
 *  例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。
 */

var StockSpanner = function() {
  this.i = 0 // 记录当前调用next的次数
  this.stack = [] // 单调递减栈
  this.indexs = [] // 栈中值对应的调用次数（第几次）
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.i += 1
  this.indexs.push(this.i)
  this.stack.push(price)
  // 移除 单调递减栈中大于当前输入的值 ，以次找到最大的跨度区间
  while (this.stack.length && this.stack[this.stack.length - 1] <= price) {
    this.stack.pop()
    this.indexs.pop()
  }
  // 放入当前的输入的值和i(当前输入index)
  this.stack.push(price)
  this.indexs.push(this.i)
  // 返回单调递增区间的两个index之差 就是要求的跨度
  return this.i - (this.indexs[this.indexs.length - 2] || 0)
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


/**
 * @description 暴力法求解
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next1 = function(price) {
  this.stack.push(price)
  let res = 0
  for (let i = this.stack.length - 1; i => 0; i--) {
    if (this.stack[i] <= price) res++
    else return  res
  }
};
