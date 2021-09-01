/**
 * 题目
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 */

const expect = require('expect')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {

};

/**
 * 合并之后求中位数
 */
const findMedianSortedArrays_1 = function(nums1, nums2) {
    const mr = []

    while(nums1.length && nums2.length) {
        if(nums1[0] < nums2[0]) {
            mr.push(nums1.shift())
        }else {
            mr.push(nums2.shift())
        }
    }

    if(nums1.length) {
        mr.push(...nums1)
    }

    if(nums2.length) {
        mr.push(...nums2)
    }

    if(mr.length % 2 === 0) {
        return (mr[mr.length/2 -1] + mr[mr.length/2]) / 2
    }else {
        return mr[(mr.length - 1) / 2]
    }
};


describe('04_longest_substring_without_repeating_characters', () => {
    const case_list = [
        { nums1: [1,3], nums2: [2], res: 2}
    ]

    describe('findMedianSortedArrays_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res).toEqual(findMedianSortedArrays_1(k.nums1, k.nums2))
            })
        });
    });
});