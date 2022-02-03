//2/3/2022
// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

//  Could you come up with a one-pass algorithm using only constant extra space?

var sortColors = function(nums) {
//bubble sort space = O(1), time= O (n*n) best case O(n)
  let i, j;
  // for (i = 0; i < nums.length - 1; i++) {
  //   for (j = 0; j < nums.length - i - 1; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       swap(nums, j, j + 1);
  //     }
  //   }
  // }
  // return nums;

//selection sort. space = O(1), time= O (n*n)
  // for (i = 0; i < nums.length - 1; i++) { //moves the boundary of unsorted array
  //   let smallestIndex = i;
  //   for (j = i + 1; j < nums.length; j++) {
  //     //looks for the smallest number
  //     if (nums[j] < nums[smallestIndex]) {
  //       smallestIndex = j;
  //     }
  //   }
  //   //swap min element with current index
  //   swap(nums, i, smallestIndex);
  // }
  // return nums;

//insertion sort
//looking at i, and j value;  time complexity = O(n) best, O(n*n) worst, O(1)
for (i = 1; i < nums.length; i++) {
  let element = nums[i];
  j = i - 1;

  while (j >= 0 && element < nums[j]) {
    nums[j + 1] = nums[j];
    j = j - 1;
  }
  nums[j + 1] = element;
}
return nums;
}

const swap = function (arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}


console.log(sortColors([2,0,2,1,1,0])) //[0,0,1,1,2,2]
console.log(sortColors([2,0,1])) //[0, 1, 2]

//2/1/2022
// Given the head of a singly linked list, return true if it is a palindrome.
// Follow up: Could you do it in O(n) time and O(1) space?
// function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
// }

// function isPalindrome(head) {

//   //find the middle point of the linked list
//   let slow = head;
//   let fast = head;
 
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   //reverse the later half of the linked list
//   let reversedList = reverse(slow);

//   //compare the reversed list with given list
//   while(head && reversedList) {
//     if (head.val != reversedList.val) {
//       return false;
//     }
//       head = head.next;
//       reversedList = reversedList.next;
//     }
//     return true;

// }

// const reverse = function (head) {
//   let prev = null;
//   let current = head;
//   while (current) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//     return prev;
// }



// let n1 = new ListNode(1);
// n1.next = new ListNode(2);
// n1.next.next = new ListNode(2);
// n1.next.next.next = new ListNode(1);

// let n2 = new ListNode(1);
// n2.next = new ListNode(2);
// console.log(isPalindrome(n1)); //true
// console.log(isPalindrome(n2)); //false

//1/28/2022
//leetcode 416. Partition Equal Subset Sum
// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// var canPartition = function (nums) {
//     //add up all the values in nums and find the target sum
//     var total = 0;
//     for (var i = 0; i< nums.length; i++) {
//         total += nums[i];
//     }
//     //in the case where the sum is odd, return false
//     if (total % 2 === 1) {
//         return false
//     }
//     let target = total/2;
    
//     //add value to set, if value equals target return true
//     let set = new Set();

//     set.add(0);
//     for (let i = 0; i < nums.length; i++) {
//       let newSet = new Set();
//       for (var items of set) {
//         let currentSum = items + nums[i];
//         if (currentSum === target) {
//           return true;
//         }
//         newSet.add(items);
//         newSet.add(currentSum);
//         set = newSet;
//       }
//     }
//     console.log(set)
//     return false;
// }

// console.log(canPartition([1, 2, 5]))

//1/28/2022 & 1/30/2022

//Equivalent Folded Sums
// You are given a list of integers nums of even length. Consider an operation where you pick any number in nums and update it with a value between [1, max(nums)].

// Return the minimum number of operations required such that for every i, nums[i] + nums[n - 1 - i] equals to the same number.

// Constraints

// n ≤ 100,000 where n is the length of nums
// 1 ≤ nums[i] ≤ 10,000 


// const equal_sum = function (nums) {
// let sum = {}
// let operations = 0;
// let n = nums.length / 2 ;
// let sums = 0;
// let max = 0;
// let min = Infinity;
// let pairs = [];
// let mostOccuringSum;
// let maxOccurence = 1;

// for (let i = 0; i < n; i++) {
//     let currentSum = nums[i] + nums[nums.length - 1 - i]
//     let firstValue = nums[i];
//     let secondValue = nums[nums.length - 1 - i]
  
//     max = Math.max(firstValue, secondValue, max);

//     if (sum[currentSum] === undefined) {
//         sum[currentSum] = 1;
//         sums++;
//     } else {
//         sum[currentSum]++;
//     }
// }

// //if there is only one pair, no operations need to be done
// if (sums === 1) {
//   return operations;
// } else {
  
//   while (n < nums.length) {
//     let firstValue = nums[n];
//     let secondValue = nums[nums.length - 1 - n];
    
//     if (firstValue === max) {
//       min = Math.min(min, secondValue)
//     } else if (secondValue === max) {
//       min = Math.min(min, firstValue)
//     }
//     pairs.push([firstValue, secondValue])
//     n++;
//   }

//   //find most occuring sum
//   for (let occurence in sum) {
//     if (sum[occurence] > maxOccurence) {
//       maxOccurence = sum[occurence];
//       mostOccuringSum = Number(occurence);
//     } else if (sum[occurence] === maxOccurence) {
//       mostOccuringSum = Number(occurence);
//     }
//   }
  
//   for (let i = 0; i < pairs.length; i++) {
//     let currentSum = pairs[i][0] + pairs[i][1];
//     if (currentSum === mostOccuringSum) {
//       continue;
//     } else if (pairs[i][0] < min && pairs[i][1] < min) {
//       operations += 2;
//     } else {
//       operations += 1;
//     }
//   }
// }

// return operations;

// }

// const equal_sum = function (nums) {
//   let minOperation = Infinity;

// //find the max value
// let max = -Infinity;
// let pairSum = new Set();
// let uniqueSum = 0;
// let n = nums.length / 2;

// //store the sum of the pairs in a set
// for (let i = 0; i < nums.length; i++) {
//   max = Math.max(max, nums[i]);
//   let currentSum = nums[i] + nums[nums.length - 1 - i] 
//   pairSum.add(currentSum);
// }

// //iterate through the set, keep value of numbers in the set
// pairSum.forEach((sum) => {
//   let currentOperation = Infinity;
//   uniqueSum++;

//   for (let i = 0; i < n; i++) {
//     let firstValue = nums[i];
//     let secondValue = nums[nums.length - 1 - i];
//     let currentSum = firstValue + secondValue;
//     let firstCondition = firstValue + max < sum;
//     let secondCondition = secondValue + max < sum;
//     if (sum === currentSum) {
//       continue;
//     } else if (firstCondition || secondCondition) {
//       currentOperation = Math.min(currentOperation, 2);
//     } else if (!firstCondition && !secondCondition) {
//       currentOperation = Math.min(currentOperation, 1)
//     }
 
//     minOperation = Math.min(minOperation, currentOperation)
//   }
// })

// if (uniqueSum === 1 || minOperation === Infinity) {
//   return 0;
// } else {
//   return minOperation
// }

// //find the number of operations to get the current sum

// //update my value of min operations to the minimum value

// //return min operations
// }



// console.log(equal_sum([1, 4, 3, 5])) //1
// console.log(equal_sum([1, 4, 1, 5, 3, 5])) //1
// console.log(equal_sum([1, 4, 3, 5, 4, 5]))   //1
// console.log(equal_sum([1, 5])) //0
// console.log(equal_sum([1, 4, 3, 4, 3, 5])) //1
// console.log(equal_sum([1, 2, 2, 1])) //2
// console.log(equal_sum([3, 2, 2, 3])) //1


