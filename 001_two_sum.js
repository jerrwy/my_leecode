/**
 * 题目:
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

const expect = require('expect')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

};


/**
 * 暴力轮询
 * 时间复杂度 O(n^2)
 */
const twoSum_1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

/**
 * hash保存数组值, 以空间换时间
 * 时间复杂度 O(n)
 */
 const twoSum_2 = function(nums, target) {
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = i
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if(hash[target - nums[i]]) {
            return [i, hash[target - nums[i]]]
        }
    }
};

describe('01_two_sum', () => {
    const case_list = [
        { nums: [1,2,3,4,5], target: 5, res: [0,3]},
        { nums: [2,7,11,15], target: 9, res: [0,1]},
        { nums: [3,2,4], target: 6, res: [1,2]},
        { nums: [3,3], target: 6, res: [0,1]}
    ]

    describe('twoSum_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res.toString()).toEqual(twoSum_1(k.nums, k.target).toString())
            })
        });
    });

    describe('twoSum_2', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(k.res.toString()).toEqual(twoSum_2(k.nums, k.target).toString())
            })
        });
    });
});