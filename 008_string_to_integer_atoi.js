/**
 * 题目
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 */

//  函数 myAtoi(string s) 的算法如下：

//  读入字符串并丢弃无用的前导空格
//  检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
//  读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
//  将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
//  如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
//  返回整数作为最终结果。
//  注意：
 
//  本题中的空白字符只包括空格字符 ' ' 。
//  除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 

const expect = require('expect')

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {

};

const myAtoi_1 = function(s) {
    const rs_limit = (_rs) => {
        if(_rs < -2147483648) {
            return -2147483648
        }
    
        if(_rs > 2147483647) {
            return 2147483647
        }

        return _rs
    }

    s = s.trim()
    s = s.replace(/e/g, '/')
    s = s.replace(/E/g, '/')
    
    if(!isNaN(+s)) {
        return rs_limit(+s)
    }

    let rs = ''

    for (let i = 0; i < s.length; i++) {
       if(i === 0) {
           if(['+', '-'].includes(s[i])) {
            rs = rs.concat(s[i])
           }else if(!isNaN(+s[i])) {
            rs = rs.concat(s[i])
           }else {
            return 0
           }
       }else {
           if(s[i] !== ' ' && !isNaN(+s[i])) {
            rs = rs.concat(s[i])
           }else {
               break
           }
       }
    }

    if(['+', '-'].includes(rs)) {
        rs = rs.concat(0)
    }

    return rs_limit(+rs)
};


describe('08_string_to_integer_atoi', () => {
    const case_list = [
        { s: "42", res: 42 },
        { s: "   -42", res: -42 },
        { s: "4193 with words", res: 4193 },
        { s: "-91283472332", res: -2147483648 },
        { s: "+-12", res: 0 },
        { s: "   -115579378e25", res: -115579378 },
    ]

    describe('myAtoi_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(myAtoi_1(k.s))
            })
        });
    });
});