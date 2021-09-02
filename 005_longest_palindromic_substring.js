/**
 * 题目
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

const expect = require('expect')

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

};

const is_palindromic = (str) => {
    if(str.length < 2) {
        return true
    }

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }

    return true
}

/**
 * 暴力轮训 太慢了
 */
const longestPalindrome_1 = function(s) {
    if(s.length < 2) {
        return s
    }

    let res = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= s.length; j++) {
           if(is_palindromic(s.slice(i,j))) {
               if(j-i > res.length) {
                   res = s.slice(i,j)
               }
           }
        }
    }

    return res
};

const longestPalindrome_2 = function(s) {
    let substring = '', max_len = 1
  
    for(let i = 0; i < s.length; i++) {
      for(let j = i + max_len; j <= s.length; j++) {
        let sub = s.slice(i,j)
        if(is_palindromic(sub) && sub.length > substring.length){
          substring = sub
          max_len = sub.length
        }
      }
    }
  
    return substring
  };

describe('05_longest_palindromic_substring', () => {
    const case_list = [
        { s: 'babad', res: 'bab' },
        { s: 'bb', res: 'bb' },
    ]

    describe('longestPalindrome_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(longestPalindrome_1(k.s))
            })
        });
    });

    describe('longestPalindrome_2', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(longestPalindrome_2(k.s))
            })
        });
    });
});