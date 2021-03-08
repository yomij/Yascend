/**
 * Date: 2021/03/08
 * Tag: Bit
 * Question:
 * 131. 分割回文串
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串。
 * 返回 s 所有可能的分割方案。
 *
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * /

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // 回文判断辅助数组
  let dp = new Array(s.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length)
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      // j等于i 单个字符是回文
      if (j === i) dp[i][j] = true
      // 3个字符 判断开始和结束是否相等
      else if (i - j === 1) dp[i][j] = s[i] === s[j]
      // 大于 三个字符 判断结束和开始字符相等 并且 内部是回文
      else dp[i][j] = s[i] === s[j] && dp[i - 1][j + 1]
    }
  }

  let res = []

  function dfs (temp, start) {
    if (start === s.length) return res.push([...temp])
    // 从start（初始0）位开始，用dp存的值，判断start到i是不是回文
    // 回文放入浅拷贝好的数组（相当于 先push，再pop复原）
    // 看下面的字符是不是回文，把start设为当前字符的后一位递归
    for (let i = start; i < s.length; i++) {
      // 当前不是回文直接跳过
      if (!dp[i][start]) continue
      // 分割当前回文串
      temp.push(s.slice(start, i + 1))
      // 从下一个字符开始分割
      dfs(temp, i + 1)
      temp.pop()
    }
  }
  dfs([], 0)
  return res
};
console.log(partition('11221'))
