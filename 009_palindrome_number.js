/**
 * 题目
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 */

const expect = require('expect')

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

};


const isPalindrome_1 = function(x) {
    str = x.toString()

    if(str.length < 2) {
        return true
    }

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }

    return true
};

describe('09_palindrome_number', () => {
    const case_list = [
        { x: 121, res: true },
        { x: -121, res: false }
    ]

    describe('isPalindrome_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(isPalindrome_1(k.x))
            })
        });
    });
});