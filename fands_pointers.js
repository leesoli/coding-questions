//12/31 && 1/8 Challenge Prob 3 Cycle in a circular array
// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

// If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

//check for the same direction

// const circular_array_loop_exists = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let isForward = arr[i] >= 0; //true or false
//     let slow = i;
//     let fast = i;

//   //if not in the same direction, there is no cycle
//   while (true) {
//     slow = find_next_index(arr, isForward, slow);
//     fast = find_next_index(arr, isForward, fast); 
//     if (fast !== -1) {
//       fast = find_next_index(arr, isForward, fast);
//     }

//     if (slow === -1 || fast === -1 || slow === fast) { break; }
//   }

//   if (slow !== -1 && slow === fast) { return true; }
//   }
//   return false;
// }

// const find_next_index = function (arr, isForward, currentIndex) {
//   let direction = arr[currentIndex] >= 0;

//   if (direction !== isForward) { return -1; } //there is a change in direction

//   nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
//   if (nextIndex < 0) {
//     nextIndex += arr.length //wrap around for neg numbers
//   }

//   //checks to make sure cycle that pointer to same element after move is finished
//   if (nextIndex === currentIndex) {
//     nextIndex = -1;
//   }

//   return nextIndex;
// }


// console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`) //true
// console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`) // true
// console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`) //false

//12/30 & 12/31. Challenge Prob 2 Rearrange a linked list
// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
// Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
  

//   print_list() {
//     temp = this;
//     while (temp !== null) {
//       process.stdout.write(`${temp.value} `);
//       temp = temp.next;
//     }
//     console.log();
//   }
  
// }


// const reorder = function(head) {
//   if (head === null || head.next === null) { return; }

//   let fast = head;
//   let slow = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   //from slow, reverse the later half of the cycle
//   let secondHalf = reverse(slow);
//   let firstHalf = head; 

//   while (firstHalf !== null && secondHalf !== null) {
//     temp = firstHalf.next;
//     firstHalf.next = secondHalf;
//     firstHalf = temp;

//     temp = secondHalf.next;
//     secondHalf.next = firstHalf;
//     secondHalf = temp;
//   }
//   //set the next of the last node to null
//   if (firstHalf !== null) {
//     firstHalf.next = null;
//   }
  
// }

// const reverse = function (head) {
//   let prev = null;

//   while (head !== null) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// }


// var head = new Node(2)
// head.next = new Node(4)
// head.next.next = new Node(6)
// head.next.next.next = new Node(8)
// head.next.next.next.next = new Node(10)
// head.next.next.next.next.next = new Node(12)
// reorder(head)
// head.print_list()

//12/28 palindrome linkedlist problem challenge 1

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// const is_palindromic_linked_list= function(head) {
//   //consider if size of word is one letter or smaller;
//   if (head === null || head.next === null) { return true; }
  
//   let slow = head;
//   let fast = head;
//   //find the middle length of the cycle.
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
  
//   //reverse the second half of the cycle
//   let headSecondHalf = reverse(slow);
//   //save reversed half to revert cycle later
//   let copy = headSecondHalf;

//   while ((head !== null && headSecondHalf !== null)) {
//     //if letters not equal, it is not a palindrome
//     if (head.value !== headSecondHalf.value) { break; }

//     //continue along loop
//     head = head.next;
//     headSecondHalf = headSecondHalf.next;
//   }
//   //revert reversed half back to original
//   reverse(copy);
 
//   //after reaching the end, all values matched. 
//   if (head === null && headSecondHalf === null) {
//     return true;
//   }
//   return false;

  //then for each value starting from the middle half, save the previous values;
  // while (slow.next !== null) {
  //   var last = slow;
  //   slow = slow.next
  //   slow.previous = last;
  // }

  // //compare from the last value to the middle half with the first value to middle half
  // var firstHalf = head;
  // while (true) {
  //   slow = slow.previous;
  //   firstHalf = firstHalf.next;

  //   if (slow.value !== firstHalf.value) {
  //     return false;
  //   }
  //   if (slow === firstHalf) {
  //     break;
  //   }
  // }
  // return true;
// };

// const reverse = function (head) {
//   let prev = null;
//   while (head !== null) {
//     next = head.next; //2
//     head.next = prev; // next = null;
//     //shift prev
//     prev = head;  //1
//     //shift head
//     head = next; //head becomes 2
//   }
//   return prev;
// }

// //prev   head
// //null -> 1 -> 2 -> 3


// head = new Node(2)
// head.next = new Node(4)
// head.next.next = new Node(6)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(2)

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`) //true

// head.next.next.next.next.next = new Node(2)
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`) //false

// secondhead = new Node(1);
// console.log(`Is palindrome: ${is_palindromic_linked_list(secondhead)}`) //true;


//12/28 middle of the linked list
// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.

// class Node {
//   constructor(value, next=null){ 
//     this.value = value;
//     this.next = next;
//   }
// }

// const find_middle_of_linked_list = function(head) {
//   var slow = head;
//   var fast = head;

//   while (fast !== null && fast.next !== null) {
//     //if next value of fast become null then return its half
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// }


// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next = new Node(6)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next.next = new Node(7)
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

//12/28 Happy Number 
// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
// const find_happy_number = function(num) {
//   //all unhappy numbers get stuck in a cycle. happy number will continue to square to the number 1. once you find the repeated number in the cycle, you can check to see if the number evaluates to true or false.
//   var slow = num;
//   var fast = num;
//   //calculate the square
//   //find the repeated value in the cycle
//   while (true) {
//     slow = find_square(slow);
//     fast = find_square(find_square(fast));
//     if (slow === fast) {
//       break;
//     }
//   }
//   //check if return value is a happy number
//   return slow === 1;
// };

// const find_square = function (num) {
//   //get the square of the numbers
//   var numbers = num.toString().split('');
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total += Math.pow(Number(numbers[i]), 2)
//   }
//   return total;
// }

// console.log(`${find_happy_number(23)}`) //true
// console.log(`${find_happy_number(12)}`) //false

// //12/28. start of linkedlist cycle
// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// const find_cycle_start = function(head){
//   //create fast and slow pointer
//   let fast = head;
//   let slow = head;
//   //increment the pointers until they meet
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next

//     if (fast === slow) {
//       //then call find length function
//       length = find_length(fast);
//       break;
//     }
//   }
  
//   return find_start(length, head);
// };

// const find_length = function (fast) {
//   //keep moving one of the pointers until they match each other
//   let pointer = fast;
//   let cycle_length = 0;
//   while (true) {
//     pointer = pointer.next;
//     cycle_length++;
//     if (pointer === fast) {
//       break;
//     }
//   }
//   return cycle_length;
// }

// const find_start = function (length, head) {
//   var pointer1 = head;
//   var pointer2 = head;
//   while (length > 0) {
//     pointer2 = pointer2.next;
//     length--;
//   }

//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next;
//     pointer2 = pointer2.next;
//   }

//   return pointer1;
// }



// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

// head.next.next.next.next.next.next = head.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)