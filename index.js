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

  const make_squares = function(arr) {
    squares = [];
    let left = 0;
    let right = arr.length;
    while (left < right) {
      if (arr[left] < 0) {
        if (arr[right - 1] >= Math.abs(arr[left])) {
          squares.unshift(arr[right - 1] ** 2);
          right--;
        } else {
          squares.unshift(arr[left] ** 2);
          left++;
        }
      }
      squares.unshift(arr[left] ** 2);
      left++;
    }
  
  return squares;
};
//if the number is negative, compare to the last number.
//push the square to the end of the array
//if number is 0 or greater, move to next number.

console.log(make_squares([-2, -1, 0, 2, 3]))
//Expected output: [0, 1, 4, 4, 9]

