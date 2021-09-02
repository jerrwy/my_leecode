/**
 * 题目
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */

 const expect = require('expect')

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

};

const reverse_1 = function(x) {
    if(!x) {
        return x
    }

    let num = x > 0 ? x : -x
    let res = []

    while(num >= 10) {
        res.push(num % 10)
        num = parseInt(num / 10)
    }

    res.push(num)

    res = +res.join('')

    res = x > 0 ? res : -res

    if(res <= 2147483647 && res >= -2147483648) {
        return res
    }else {
        return 0
    }
};

describe('07_reverse_integer', () => {
    const case_list = [
        { x: 123, res: 321 },
        { x: -123, res: -321 },
    ]

    describe('reverse_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(reverse_1(k.x))
            })
        });
    });
});