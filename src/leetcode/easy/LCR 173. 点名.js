/**
 * Date: 2023/11/15
 *
 * Title: LCR 173. 点名
 *
 * Tag: 二分
 *
 * Desc:
 * 某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。
 *
 */

/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
    let start = 0
    let end = records.length - 1
    while (start < end) {
        const mid = ~~((start + end) / 2)
        if (records[mid] === mid) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return start === records[start] ? start + 1 : start
};