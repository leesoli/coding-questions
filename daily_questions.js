//1/28/2022
//leetcode 416. Partition Equal Subset Sum
// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// 1        0
// 6. 1   5.  0
// 2^n
// dFS

// target = 11

// 1.                         0
// target = 10                target = 11
// i = 1

// 6            1             5.             0
// target = 4.  target =10    target = 6.   target= 11
// i = 2

// i > target then 

// index value will either equal target or sum + index value
// return true





// var canPartition = function(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
  
//   if (sum % 2 === 1) { return false; }
//   let subsetSum = sum / 2;

//   let set = {};
//   set[0] = 0;
//   for (let i = 0; i < nums.length; i++) {
//     set[nums[i]] = nums[i];
    
//     for (let numbers in set) {
//       let currentSum = set[numbers] + nums[i];
//        console.log(currentSum, 'current sum')
//       //if we find subsetsum return true
//       if (currentSum === subsetSum) {
//         return true
//       } else if (currentSum < subsetSum) {
//          //store only values less than subset sum in set
//         set[currentSum] = currentSum;
//       }
//     }
//   }
//   return false;
// };
var canPartition = function (nums) {
    //add up all the values in nums and find the target sum
    var total = 0;
    for (var i = 0; i< nums.length; i++) {
        total += nums[i];
    }
    //in the case where the sum is odd, return false
    if (total % 2 === 1) {
        return false
    }
    let target = total/2;
    
    //add value to set, if value equals target return true
    let set = new Set();

    set.add(0);
    for (let i = 0; i < nums.length; i++) {
      let newSet = new Set();
      for (var items of set) {
        let currentSum = items + nums[i];
        if (currentSum === target) {
          return true;
        }
        newSet.add(items);
        newSet.add(currentSum);
        set = newSet;
      }
    }
    console.log(set)
    return false;
}

console.log(canPartition([1, 2, 5]))

//1/27/2022
//Equivalent Folded Sums
// You are given a list of integers nums of even length. Consider an operation where you pick any number in nums and update it with a value between [1, max(nums)].

// Return the minimum number of operations required such that for every i, nums[i] + nums[n - 1 - i] equals to the same number.

// Constraints

// n ≤ 100,000 where n is the length of nums
// 1 ≤ nums[i] ≤ 10,000 

//input nums = [1, 4, 3, 5]
//1

// If we change the 3 to 2 then nums[0] + nums[3] = nums[1] + nums[2] = 6

//divide the number by two.
//find the number that equal that sum
// const equal_sum = function (nums) {
//   let sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   let target = sum/2;
//   let left = 0;
//   let right = nums.length/2 - 1;
//   let current = 0;
//   for (var i = 0; i < right; i++) {
//     current += nums[i];
//   }
//   while (right < nums.length) {
//     if (current > )
//     right++;
//   }
// }

// console.log(equal_sum([1, 4, 3, 5]))