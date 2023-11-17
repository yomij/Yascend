/**
 * Date: 2023/11/17
 *
 * Title: 68. 文本左右对齐.js
 *
 * Tag: 模拟
 *
 * Desc:
 *
 * 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 *
 * 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
 *
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 *
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 *
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const groups = [{ l: 0, w: [], s: '' }]
    for (let i = 0; i < words.length; i++) {
        const curr = groups[groups.length - 1]
        while (words[i] && curr.l + curr.w.length + words[i].length <= maxWidth) {
            curr.w.push(words[i])
            curr.l += words[i].length
            i++
        }
        i--
        let blankCount = maxWidth - curr.l
        if (i === words.length - 1 || curr.w.length === 1) {
            curr.s = curr.w.join(' ') + ' '.repeat(blankCount - curr.w.length + 1)
        } else {
            while (blankCount > 0) {
                for (let i = 0; i < curr.w.length - 1; i++) {
                    if (blankCount > 0) {
                        curr.w[i] += ' '
                    } else {
                        break
                    }
                    blankCount--
                }
            }
            curr.s = curr.w.join('')
        }
        if (i < words.length - 1) {
            groups.push({ l: 0, w: [], s: '' })
        }
    }
    return groups.map(i => i.s)
};

console.log(
    fullJustify(
        ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"],
        16
    )
)