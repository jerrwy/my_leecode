/**
 * 题目
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 */

const expect = require('expect')

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {

};

const convert_1 = function(s, numRows) {
    let r = 0
    let d = 1

    const getR = () => {
        if(numRows === 1) {
            return 0
        }

        if(r <= 0) {
            d = 1
            return r++
        }

        if(r > 0 && r < numRows - 1) {
            if(d > 0) {
                return r++
            }else {
                return r--
            }
        }

        if(r >= numRows - 1) {
            d = -1
            return r--
        }
    }

    const map = {}

    for (let i = 0; i < s.length; i++) {
        const r = getR()
        map[r] = (map[r] || '').concat(s[i])
    }

    let res = ''

    for (let j = 0; j < numRows; j++) {
        res = res.concat(map[j] || '')
    }

    return res
};


describe('06_zigzag_conversion', () => {
    const case_list = [
    //    { s: 'PAYPALISHIRING', numRows: 3, res: 'PAHNAPLSIIGYIR'},
    //    { s: 'A', numRows: 2, res: 'A'},
       { s: 'AB', numRows: 1, res: 'AB'}
    ]

    describe('convert_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(convert_1(k.s, k.numRows))
            })
        });
    })
});