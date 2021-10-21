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
//3. find the substring that all words from hashmap exists
//4. store the index each time concatenation of all words are found
//remove word that is the length of that letter

const find_word_concatenation = function(str, words) {
  result_indices = [];
  let map = {};
  let windowStart = 0;
  let matched;

  for (let i = 0; i < words.length; i++) {
    if (map[words[i]] === undefined) {
      map[words[i]] = 1;
    } else {
      map[words[i]]++;
    }
  }
  // console.log(map)

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str.substring(windowStart, windowEnd + 1);
    if (char in map) {
      map[char]--;
    }
    if (map[char] === 0) {
      matched++;
    }
    if (matched === words.length) {
      result_indices.push(windowStart);
    }

    if (windowEnd - 1 >= words.join('').length) {
      if (windowStart === )
      windowStart++;
    }
  }


  return result_indices;
};

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]))
//Output: [0, 3]