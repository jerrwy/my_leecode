/**
 * 排序算法
 */


/**
 * 冒泡排序
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 稳定排序
 * 
 * 原理: 每一个元素依次跟右侧的比较，大的放后面，每一轮都可以把最大的放最后面, 即右侧的为有序的
 * 优化: 当一次循环没有发生冒泡，说明已经排序完成，停止循环。
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let complete = true;

        for (let j = 1; j < array.length-i; j++) {
            // 左边的比右边的大
            if(array[j-1] > array[j]) {
                [array[j-1], array[j]] = [array[j], array[j-1]];
                complete = false;
            }
        }

        // 没有冒泡结束循环
        if (complete) {
            break;
        }
    }

    return array
}

/**
 * 插入排序
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 稳定排序
 * 
 * 原理: 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 */
function insertSort(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = i; j > 0; j--) {
          if(array[j] < array[j-1]) {
              [array[j-1], array[j]] = [array[j], array[j-1]]
          }
       }
    }

    return array
}

/**
 * 选择排序
 * 时间复杂度 O(n^2)
 * 不稳定排序, eg: [5,5,2] 两个5的顺序会变更, 涉及到非相邻元素的交换
 * 
 * 原理: 每次循环选取一个最小的数字放到前面的有序序列中。
 */
function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = i; j < array.length; j++) {
          if(array[j] < array[i]) {
            [array[i], array[j]] = [array[j], array[i]]
          }
       }
    }
    return array
}

/**
 * 归并排序
 * 时间复杂度: O(nlogn) 
 * 空间复杂度: O(n) 
 * 稳定排序
 * 
 * 原理: 分治法, 二路归并, 递归合并左右两个有序表
 */
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    // 合并两个已排序数组
    const sort = (left, right) => {
        const res = []

        while(left.length && right.length) {
            if(left[0] < right[0]) {
                res.push(left.shift())
            }else {
                res.push(right.shift())
            }
        }

        while(left.length) {
            res.push(left.shift())
        }

        while(right.length) {
            res.push(right.shift())
        }

        return res
    }

    // 复制了数组, 额外占用了大量空间(可以通过传递数组下标来进行优化)
    const mid = Math.floor(array.length / 2);
    const front = array.slice(0, mid);
    const end = array.slice(mid);

    return sort(mergeSort(front), mergeSort(end))
}

/**
 * 非递归版本
 * 
 * 原理: 跟递归反过来, 2个一组 -> 4个一组 -> 8个一组, 直到只有一组。
 */
function mergeSort2(array) {
    if (array.length < 2) {
        return array;
    }

    // 合并两个已排序数组
    const sort = (left, right) => {
        const res = []

        while(left.length && right.length) {
            if(left[0] < right[0]) {
                res.push(left.shift())
            }else {
                res.push(right.shift())
            }
        }

        while(left.length) {
            res.push(left.shift())
        }

        while(right.length) {
            res.push(right.shift())
        }

        return res
    }

    for (let i = 0; Math.pow(2,i) < array.length; i++) {
        const step = Math.pow(2,i)

        for (let j = 0; j < array.length; j+=2*step) {
            const a2s = sort(array.slice(j, j+step), array.slice(j+step,j+2*step))

            for (let k = j; k < j+2*step; k++) {
                if(a2s[k-j]) {
                    array[k] = a2s[k-j]
                }
            }
        }
    }

    return array
}

/**
 * 快速排序
 * 时间复杂度: O(nlogn) 
 * 空间复杂度: O(nlogn) 
 * 不稳定排序
 * 
 * 原理: 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
 */
function quickSort(array) {
    if(array.length < 2) {
        return array
    }

    const target = array[0]

    // 浪费太多空间, 使用双指针优化
    const left = []
    const right = []

    for (let i = 1; i < array.length; i++) {
        if(array[i] < target) {
            left.push(array[i]);
        }else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(target).concat(quickSort(right));
}

// 使用双指针优化冗余空间
function quickSort2(array, start, end) {
    if (end - start < 1) {
      return;
    }
    const target = array[start];
    let l = start;
    let r = end;
    while (l < r) {
      // 找到右侧小于target的值
      while (l < r && array[r] >= target) {
        r--;
      }
      array[l] = array[r];
      // 找到左侧大于target的值
      while (l < r && array[l] < target) {
        l++;
      }
      array[r] = array[l];
    }
    array[l] = target;
    quickSort2(array, start, l - 1);
    quickSort2(array, l + 1, end);
    return array;
  }

const arr = [78,3,4,24,5,2,1,11,23,2,111,45,12,56,0]
console.log(quickSort2(arr, 0, arr.length-1))

/**
 * 堆排序
 * 时间复杂度: O(nlogn) 
 * 空间复杂度: O(1) 
 * 不稳定排序
 * 
 * 原理: 创建一个大顶堆，大顶堆的堆顶一定是最大的元素。交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。
 */
function heapSort(array) {
    // 创建大顶堆
    function creatHeap(array) {
        const len = array.length;
        const start = parseInt(len / 2) - 1;

        for (let i = start; i >= 0; i--) {
            adjust(array, i, len);
        }
    }

    //大顶堆调整: 将第target个元素进行下沉，孩子节点有比他大的就下沉
    function adjust(array, target, len) {
      for (let i = 2 * target + 1; i < len; i = 2 * i + 1) {
        // 找到孩子节点中最大的
        if (i + 1 < len && array[i + 1] > array[i]) {
          i = i + 1;
        }
        // 下沉
        if (array[i] > array[target]) {
          [array[i], array[target]] = [array[target], array[i]]
          target = i;
        } else {
          break;
        }
      }
    }

    creatHeap(array);
    // 交换第一个和最后一个元素，然后重新调整大顶堆
    for (let i = array.length - 1; i > 0; i--) {
        [array[i], array[0]] = [array[0], array[i]];
        adjust(array, 0, i);
    }
    return array;
}