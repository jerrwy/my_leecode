/**
 * 题目
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */

const expect = require('expect')

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {

};


const isMatch_1 = function(s, p) {
    const reg= new RegExp(`^${p}$`);
    return reg.test(s)
};

/**
 * todo
 */
const isMatch_2 = function(s, p) {
    let i = 0;
    let j = 0;

    while(s[i] === p[j] || p[j] === '.') {
        i++
        j++
    }

    return s[i] === p[j]
};


describe('010_regular_expression_matching', () => {
    const case_list = [
        { s: "aa", p: "a", res: false },
        { s: "aa", p: "a*", res: true },
        { s: "ab", p: ".*", res: true },
        { s: "aab", p: "c*a*b", res: true },
        { s: "aaaaaab", p: "c*a*b", res: true },
    ]

    describe('isMatch_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(isMatch_1(k.s, k.p))
            })
        });
    });

    describe.skip('isMatch_2', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(isMatch_2(k.s, k.p))
            })
        });
    });
});