/**
 * 题目:
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

const expect = require('expect')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

};

/**
 * 链表操作
 */
const addTwoNumbers_1 = function(l1, l2) {
    const new_node = (val = 0) => ({val, next: null})
    const res = new_node()

    let cur = res
    let carry = 0

    while(l1 || l2) {
        const l1_val = l1 ? l1.val : 0
        const l2_val = l2 ? l2.val : 0

        cur.val = (l1_val + l2_val + carry) % 10
        carry = parseInt((l1_val + l2_val + carry) / 10)
        l1 = l1 && l1.next
        l2 = l2 && l2.next

        if(l1 || l2) {
            cur.next = new_node()
            cur = cur.next
        }
    }

    if(carry) {
        cur.next = new_node(carry)
    }

    return res
};


describe('02_add_two_numbers', () => {
    const case_list = [
       { l1: {
           val: 2,
           next: {
               val: 4,
               next: {
                   val: 3,
                   next: null
               }
           }
       }, l2: {
           val: 5,
           next: {
               val: 6,
               next: {
                   val: 4,
                   next: null
               }
           }
       }, res: {
           val: 7,
           next: {
               val: 0,
               next: {
                   val: 8,
                   next: null
               }
           }
       }}, // 342 + 465 = 807.
       {
           l1: {
               val: 9,
               next: {
                   val: 9,
                   next: null
               }
           },
           l2: {
               val: 9,
               next: {
                   val: 9,
                   next: {
                       val: 9,
                       next: {
                           val: 9,
                           next: null
                       }
                   }
               }
           },
           res: {
                val: 8,
                next: {
                    val: 9,
                    next: {
                        val: 0,
                        next: {
                            val: 0,
                            next: {
                                val: 1,
                                next: null
                            }
                        }
                    }
                }
           }
       }, // 99 + 9999 = 10098
    ]

    describe('addTwoNumbers_1', () => {
        it('should ok', async () => {
            case_list.forEach(k => {
                expect(JSON.stringify(k.res)).toEqual(JSON.stringify(addTwoNumbers_1(k.l1, k.l2)))
            })
        });
    });
})