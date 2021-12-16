//12/16 find subsets 
const find_subsets = (nums) => {
  let subsets = [];
  subsets.push([]);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      let copy = subsets[j].slice();
      copy.push(currentNumber);
      subsets.push(copy);
    }
  }
  return subsets;
}

console.log(find_subsets([1, 3])) //expected output: [[], [ 1 ], [ 3 ], [ 1, 3 ] ]
console.log(find_subsets([1, 5, 3])) //expected output: [ [], [ 1 ], [ 5 ], [ 1, 5 ], [ 3 ], [ 1, 3 ], [ 5, 3 ], [ 1, 5, 3 ] ]


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

//pair with target sum 10/28

// const pair_with_targetsum = function(arr, target_sum) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     const sum = arr[start] + arr[end];
//      if (sum === target_sum) {
//       return [start, end]
//     }
//     if (sum > target_sum) {
//       end--;
//     } else if (sum < target_sum) {
//       start++;
//     }
//   }
//   return [-1, -1];
// }

// console.log(pair_with_targetsum([2, 5, 9, 11], 11)) // should return [0, 2]

//remove duplicates 10/29

//keep a count of all the unique numbers
//have variable to keep count of all unique numbers
// count = 0
// 2 => count = 1
//3 => count = 2
//3 => count = 2
//6 => count = 3
//9 => count = 4

// const remove_duplicates = function(arr) {
//   let nextNonduplicate = 1;
//   let i = 1;
//   while (i < arr.length) {
//     if (arr[nextNonduplicate - 1] !== arr[i]) {
//       arr[nextNonduplicate] = arr[i];
//       nextNonduplicate++;
//     }
//     i++;
//   }
//   return nextNonduplicate;
// }

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])) // output = 4

//NND = 3, i = 5
// arr[0] !== arr[1] => (2 !== 3)
// arr[1]  arr[2]  => (3 === 3)
// arr[1]. arr[3] => (3 === 3)
// arr[1]. arr[4] => (3 !== 6)
//arr[2] arr[4] => (3 !== 9) 
// need to reassign value in the array so that when compared to the next value in array, it points to the last unique value.

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