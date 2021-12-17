//12/17 remove element
// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
function remove_element(arr, key) {
  let index = 0;
  let uniqueValues = 0;
  while (index < arr.length) {
    if (arr[index] !== key) {
      arr[uniqueValues] = arr[index];
      uniqueValues++;
    }
    index++;
  }
  console.log(arr.slice(0, uniqueValues))
  return uniqueValues;
}

console.log(remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)); //4
console.log(remove_element([2, 11, 2, 2, 1], 2)); //2

//12/17 remove duplicates
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
//can't remove duplicate from array you are iterating through.  
// const remove_duplicates = function(arr) {
//   var uniqueValues = 1;
//   var index = 1;
//   while (index < arr.length) {
//     var currentNum = arr[index];
//     var prevNum = arr[index - 1];
//     if (currentNum !== prevNum) {
//       arr[uniqueValues] = arr[index];
//       uniqueValues++;
//     }
//     index++;
//   }
//   return uniqueValues;
// };
// //linear time to iterate through the array
// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])) //output 4
// console.log(remove_duplicates([2, 2, 2, 11])) //output 2

// 12/17 pair with target sum
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// // Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
// const pair_with_targetsum = function(arr, target_sum) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] + arr[right] === target_sum) {
//       return [left, right];
//     } else if (arr[left] + arr[right] > target_sum) {
//       right--;
//     } else if (arr[left] + arr[right] < target_sum) {
//       left++;
//     }
//   }
//   return [-1, -1];
// }
// console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6)) //output: [1, 3]
// console.log(pair_with_targetsum([2, 5, 9, 11], 11)) //output: [0 , 2]

//time complexity is O (N) where N is the total number of elemenets in the given array. space complexity in constant space O(1);

// const pair_with_targetsum = function(arr, target_sum) {
//   //target_sum - arr[i] = corrNum 
//   //search for corrNum in hashtable;
//   //for each value that doesnt have corrNum, store key in hashtable with index as value
//   //if corrNum found, return indexes
//   const nums = {};
//   for (var elements in arr) {
//     const corrNum = target_sum - arr[elements];
//     if (nums[corrNum]) {
//       return [nums[corrNum], elements];
//     }
//     nums[arr[elements]] = elements;
//   }
//   return [-1, -1];
// }

// console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6)) //output: [1, 3]
// console.log(pair_with_targetsum([2, 5, 9, 11], 11)) //output: [0 , 2]

//12/16 subsets with duplicates
// // Given a set of numbers that might contain duplicates, find all of its distinct subsets.
// const find_subsets = (nums) => {
//   let subsets = [];
//   //create a set
//   //to the set, push each value from subset to set
//   //reset subset to all values in the set. 
//   let set = new Set();
//   subsets.push([]);
//   set.add([]);
//   for (let i = 0; i < nums.length; i++) {
//     let currentNumber = nums[i];
//     let n = subsets.length;
//     for (let j = 0; j < n; j++) {
//       var copy = subsets[j].slice(0);
//       copy.push(currentNumber);
//       set.add(copy);
//       subsets.push(copy);
//     }
//   }

//   subsets = [];
//   for (let element of set) {
//     subsets.push(element);
//   }
 
//   return subsets;
// };
// //arrays are not equal to each other. cant use set to determine if there are duplicate values;
// console.log(find_subsets([1, 3, 3])) // should output: [], [1], [3], [1,3], [3,3], [1,3,3]
 


//12/16 find subsets 
// const find_subsets = (nums) => {
//    let subsets = [];
//   subsets.push([]);

//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     const n = subsets.length;
//     for (let j = 0; j < n; j++) {
//       let copy = subsets[j].slice();
//       copy.push(currentNumber);
//       subsets.push(copy);
//     }
//   }
//   return subsets;
// }

// console.log(find_subsets([1, 3])) //expected output: [[], [ 1 ], [ 3 ], [ 1, 3 ] ]
// console.log(find_subsets([1, 5, 3])) //expected output: [ [], [ 1 ], [ 5 ], [ 1, 5 ], [ 3 ], [ 1, 3 ], [ 5, 3 ], [ 1, 5, 3 ] ]


//String Anagrams 10/20

// const find_string_anagrams = function(str, pattern) {
//   result_indexes = [];
//   // TODO: Write your code here
//   let map = {};
//   let matched = 0;
//   let windowStart = 0;
//   //for loop to iterate through pattern, keeping count of freq of each letter
//   for (let i = 0; i < pattern.length; i++) {
//     if (map[pattern[i]] === undefined) {
//       map[pattern[i]] = 1;
//     } else {
//       map[pattern[i]]++;
//     }
//   }
//   console.log(map)

//   //for loop creating window end
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//   //if element is found in object, decrement count of letter
//     let char = str[windowEnd];
//     if (map[char] !== undefined) {
//       map[char]--;
//     }
//     //if count equals 0, increase count of matched variable
//     if (map[char] === 0) {
//       matched++;
//     }
//     //if matched variable equals length of keys in hashmap, push WS to result_indexes array
//     if (matched === Object.keys(map).length) {
//       result_indexes.push(windowStart);
//     }
//     //if window size is equal to or greater than the length of pattern,
//     //remove the first element -> slide window
//     if (windowEnd - windowStart + 1 >= pattern.length) {
//       let removedChar = str[windowStart];
//       windowStart++;
//       //if element removed exists in hashmap, if equals 0, decrement matched
//       if (map[removedChar] !== undefined) {
//         if (map[removedChar] === 0) {
//           matched--;
//         }
//       //increment count
//         map[removedChar]++;
//       }
//     }
//   }
//   return result_indexes;
// };

//console.log(find_string_anagrams('abbcabc', 'abc')) // output= [2,3,4]


//Words Concatenation 9/20
//1. store each word from input words array into hash map
//2. find each word that exists in str, keep track of words that are found
//3. shrink window when window is bigger than length of all the concat. words
//4. store the index each time concatenation of all words are found
//5. remove index from array if window moved past index array (result words)

//wordFrequency = {cat: 1, fox: 1}
//resultIndices = [], wordsCount = 2, wordLength = 3
//i = 0; (9 - (2 * 3) + 1
// const find_word_concatenation = function(str, words) {
//   if (words.length === 0 || words[0].length === 0) {
//     return [];
//   }

//   wordFrequency = {};

//   words.forEach((word) => {
//     if (!(word in wordFrequency)) {
//       wordFrequency[word] = 0;
//     }
//     wordFrequency[word] += 1;
//   });

//   const resultIndices = [],
//     wordsCount = words.length;
//   wordLength = words[0].length;

//   // iterates through str
//   for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++)
//    {
//     const wordsSeen = {};
//     //creates substring to see if it is in hashmap
//     for (j = 0; j < wordsCount; j++) {
//       next_word_index = i + j * wordLength;
//       //0 + 0 * 3 = 0 + 3 = 3
//       //0 + 1 * 3 = 3 + 3 = 6
//       // Get the next word from the string
//       word = str.substring(next_word_index, next_word_index + wordLength);
//       if (!(word in wordFrequency)) { // Break if we don't need this word
//         break;
//       }

//       // Add the word to the 'wordsSeen' map if found in wordFreq
//       if (!(word in wordsSeen)) {
//         wordsSeen[word] = 0;
//       }
//       wordsSeen[word] += 1;

//       // no need to process further if the word has higher frequency than required
//       if (wordsSeen[word] > (wordFrequency[word] || 0)) {
//         break;
//       }

//       if (j + 1 === wordsCount) { // Store index if we have found all the words
//         resultIndices.push(i);
//       }
//     }
//   }

//   return resultIndices;
// }
// console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]))
//Output: [0, 3]

// make squares 10/30 
//create array and fill with values equal to 0;
//compare square values and whichever is bigger add to the end of the array. decrement the endpoint

//   const make_squares = function(arr) {
//     const n = arr.length;
//     let squares = Array(n).fill(0);
//     let left = 0;
//     let right = n - 1;
//     let highestIndex = n - 1;
//     while (left <= right) {
//       let leftSquare = arr[left] ** 2;
//       let rightSquare = arr[right] ** 2;
//       if (leftSquare > rightSquare) {
//         squares[highestIndex] = leftSquare;
//         left++;
//       } else {
//         squares[highestIndex] = rightSquare;
//         right--;
//       }
//       highestIndex--;
//     }
//   return squares;
// };

// console.log(make_squares([-2, -1, 0, 2, 3]))
//Expected output: [0, 1, 4, 4, 9]

// 10/31 triplet sum to 0
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// const search_triplets = function(arr) {
//   triplets = [];
//   arr.sort((a,b) => { return a - b })
//   console.log(arr)
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] > right) {
//       right--
//     }
//   }

//   return triplets;
// };

//three values that when added equal 0;
//want to sort the numbers from least to greatest;
//find one or two values that when added equals the negative sign of that sum
//-3 = -(1 + 2)
// -z = x + y

// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])) //[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]

//arr needs to be sorted in order
//at each end whichever number is greater, look for numbers on the opposite end that when added equal that number.

// const search_triplets = function(arr) {
//   let triplets = [];
//   arr.sort((a, b) => a - b);
//   // console.log(arr);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     //if left value is negative, look for values from the rightSquare
//     if (arr[right] < 0 || arr[left] > 0) {
//       break;
//     };
   
//     if (Math.abs(arr[left]) > arr[right]) {
//       for (i = right; i >= 0; i--) {
//         const targetPair = Math.abs(arr[left]) - arr[i];
//         if (arr.indexOf(targetPair) !== i && targetPair < arr[i]) {
//           triplets.push([arr[left], targetPair, arr[i]]);
//         }
//       }
//       left++;
//     } else {
//       for (j = left; j <= right; j++) {
//         const targetPair = (-arr[right] + arr[j])
//         console.log(targetPair)
//         if (arr.indexOf(targetPair) !== j && arr[j] < targetPair) {
//           triplets.push([arr[j], targetPair, arr[right]]);
//         }
//         console.log('done')
//       }
//       right--;
//     }
//   }

//   return triplets;
// };



//10/2 search triplets review
//1) need to search each number in arr for two other pairs that gives a sum of 0;
//2) need to skip duplicates within array
//3) the pair when added together should equal the current value in the array
// x + y + z === 0         -x = y + z
// const search_triplets = function(arr) {
//   arr.sort((a, b) => a - b)
//   let triplets = [];
//   for (let i = 0; i < arr.length; i++) {
//     //skip elements that are equal to the next value to avoid duplicate triplets;
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     find_pair(arr, -arr[i], i + 1, triplets);
//   }
//   return triplets;
// }

// const find_pair = function(array, target_sum, left, triplets) {
//   let right = array.length - 1;
//   //find pair that matches target sum and push that value to triplet array
//   while (left < right) {
//     const sum = array[left] + array[right];
//     if (sum === target_sum) {
//       triplets.push([-target_sum, array[left], array[right]]);
//       left++;
//       right--;
//     //skip current left if the previous is the same
//       while (left < right && array[left] === array[left - 1]) {
//         left++;
//       }
//       while (left < right && array[right] === array[right + 1]) {
//         right--;
//       }
//     } else if (target_sum > sum) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return triplets;
// }

// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])) //expected output [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// console.log(search_triplets([-5, 2, -1, -2, 3]));
// //expected output => [[-5, 2, 3], [-2, -1, 3]]
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// const triplet_sum_close_to_target = function (arr, target_sum) {
//   return -1;
// }

// function triplet_sum_close_to_target(arr, targetSum) {
//   arr.sort((a, b) => a - b);
//   let smallest_difference = Infinity;
//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1,
//       right = arr.length - 1;
//     while (left < right) {
//       const target_diff = targetSum - arr[i] - arr[left] - arr[right];
//       if (target_diff === 0) { // we've found a triplet with an exact sum
//         return targetSum - target_diff; // return sum of all the numbers
//       }

//       if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
//         smallest_difference = target_diff; // save the closest difference
//       }
//       // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
//       if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
//         (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
//         smallest_difference = target_diff; // save the closest and the biggest difference
//       }


//       if (target_diff > 0) {
//         left += 1; // we need a triplet with a bigger sum
//       } else {
//         right -= 1; // we need a triplet with a smaller sum
//       }
//     }
//   }
//   return targetSum - smallest_difference;
// }


// console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2)); //1
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); //0  
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); //3

//triplets with smaller sum
// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

// const triplet_with_smaller_sum = function(arr, target) {
//   let count = 0;
//   // TODO: Write your code here
//   for (var i = 0; i < arr.length - 2; i ++) {
//     let anchor = arr[i]; 
//     let left = i + 1; 
//     let right = arr.length - 1; 
//     while (left < right) {
//     let sum = anchor + arr[left] + arr[right]; 
//       if (sum < target) {
//         count ++; 
//         left ++; 
//       }; 
//     }
//   }
//   return count;
// };


// function triplet_with_smaller_sum(arr, target) {
//   arr.sort((a, b) => a - b);
//   const triplets = [];
//   for (i = 0; i < arr.length - 2; i++) {
//     search_pair(arr, target - arr[i], i, triplets);
//   }
//   return triplets;
// }


// function search_pair(arr, target_sum, first, triplets) {
//   let left = first + 1,
//     right = arr.length - 1;
//   while ((left < right)) {
//     if (arr[left] + arr[right] < target_sum) { // found the triplet
//       // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
//       // left and right to get a sum less than the target sum
//       for (i = right; i > left; i--) {
//         triplets.push([arr[first], arr[left], arr[i]]);
//       }
//       left += 1;
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//   }
// }


// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3)); // [ [ -1, 0, 3 ], [ -1, 0, 2 ] ]
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)); // [ [ -1, 1, 4 ], [ -1, 1, 3 ], [ -1, 1, 2 ], [ -1, 2, 3 ] ]


//linked list cycle
// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// const has_cycle = function(head) {
//   // TODO: Write your code here
//   return false
// }


// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// head.next.next.next.next.next.next = head.next.next
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// function has_cycle(head) {
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       return true; // found the cycle
//     }
//   }
//   return false;
// }


// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);