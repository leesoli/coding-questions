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


const equal_sum = function (nums) {
let sum = {}
let operations = 0;
let n = nums.length / 2 ;
let sums = 0;
let max = 0;
let min = Infinity;
let pairs = [];
let mostOccuringSum;
let maxOccurence = 1;

for (let i = 0; i < n; i++) {
    let currentSum = nums[i] + nums[nums.length - 1 - i]
    let firstValue = nums[i];
    let secondValue = nums[nums.length - 1 - i]
  
    max = Math.max(firstValue, secondValue, max);

    if (sum[currentSum] === undefined) {
        sum[currentSum] = 1;
        sums++;
    } else {
        sum[currentSum]++;
    }
}
console.log(max, 'max')

//if there is only one pair, no operations need to be done
if (sums === 1) {
  return operations;
} else {
  
  while (n < nums.length) {
    let firstValue = nums[n];
    let secondValue = nums[nums.length - 1 - n];
    
    if (firstValue === max) {
      min = Math.min(min, secondValue)
    } else if (secondValue === max) {
      min = Math.min(min, firstValue)
    }
    pairs.push([firstValue, secondValue])
    n++;
  }

  //find most occuring sum
  for (let occurence in sum) {
    if (sum[occurence] > maxOccurence) {
      maxOccurence = sum[occurence];
      mostOccuringSum = Number(occurence);
    } else if (sum[occurence] === maxOccurence) {
      mostOccuringSum = Number(occurence);
    }
  }
  
  for (let i = 0; i < pairs.length; i++) {
    let currentSum = pairs[i][0] + pairs[i][1];
    if (currentSum === mostOccuringSum) {
      continue;
    } else if (pairs[i][0] < min && pairs[i][1] < min) {
      operations += 2;
    } else {
      operations += 1;
    }
  }
}

return operations;

}

// console.log(equal_sum([1, 4, 3, 5])) //1
// console.log(equal_sum([1, 4, 1, 5, 3, 5])) //1
// console.log(equal_sum([1, 4, 3, 5, 4, 5]))   //1
// console.log(equal_sum([1, 5])) //0
// console.log(equal_sum([1, 4, 3, 4, 3, 5])) //1
// console.log(equal_sum([1, 2, 2, 1])) //2
console.log(equal_sum([3, 2, 2, 3])) //1