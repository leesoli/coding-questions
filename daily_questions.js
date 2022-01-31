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

//input nums = [1, 4, 3, 5]
//1

// If we change the 3 to 2 then nums[0] + nums[3] = nums[1] + nums[2] = 6

//divide the number by two.
//find the number that equal that sum

// i = 0, 1 + 5 = 6
// i = 1, 4 + 3 = 7
// i = 2, 4 + 3 = 7
// i = 3, 1 + 5 = 6
const equal_sum = function (nums) {
//evaluate possible sums up to half the array
let n = nums.length / 2 - 1;

//save in set
let set = new Set();

for (let i = 0; i <= n; i++) {
  set.add(nums[i] + nums[nums.length - 1 - i]);
}

//return the size of the set - 1 because for how many different sums there are, we do 1 less operation
return set.size - 1;
}

console.log(equal_sum([1, 4, 3, 5]))