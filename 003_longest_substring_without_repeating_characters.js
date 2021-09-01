/**
 * 题目
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

const expect = require('expect')

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

};


/**
 * 暴力轮训, 双指针
 */
const lengthOfLongestSubstring_1 = function(s) {
    let max_len = 0
    
    for (let i = 0; i < s.length; i++) {
        let j = i

        while(s[j] && !s.slice(i,j).includes(s[j])) {
            j++
        }

        if(j-i > max_len) {
            max_len = j-i
        }
    }

    return max_len
};

/**
 * 滑动窗口(时间复杂度过高)
 */
const lengthOfLongestSubstring_2 = function(s) {

    const match = (s) => {
        return s.length === new Set(s).size
    }

    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j < s.length; j++) {
            if(!s[j+i-1]) {
                break
            }

            if(match(s.slice(j,j+i))) {
                return i
            }
        }
    }

    return 0
}

describe('03_longest_substring_without_repeating_characters', () => {
    const case_list = [
        { s: "abcabcbb", res: 3},
        { s: "bbbbb", res: 1},
    ]

    describe('lengthOfLongestSubstring_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(lengthOfLongestSubstring_1(k.s))
            })
        });
    });

    describe('lengthOfLongestSubstring_2', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(lengthOfLongestSubstring_2(k.s))
            })
        });
    });
});