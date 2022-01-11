//1/10 & 1/11 minimum meeetings room challenge #1 problem (difficulty: hard)
// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.


const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, ((a, b) => b.end - a.end));
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`) //2
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`) //2
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`) //1
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`) //2
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`) //2

//1/10 Conflicting Appointments (medium)
// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// // const can_attend_all_appointments = function(intervals) {
// //   //sort the array by start time
// //   intervals.sort((a,b) => { return a.start - b.start; })
// //   for (let i = 1; i < intervals.length; i++) {
// //     if (intervals[i].start < intervals[i - 1].end) {
// //       return false;
// //     }
// //   }

// //   return true;
// // };

//  const name_all_conflicting_appointments = function(intervals) {
//    //sort my array
//    intervals.sort((a,b) => { return a.start - b.start; })
  
//    //declare empty results array
//    let results = [];

//    for (let i = 0; i < intervals.length - 1; i++) {
//     let j = i + 1;

//     while (j < intervals.length) {
//       if (intervals[i].end > intervals[j].start) {
//         results.push([intervals[i], intervals[j]])
//       }
//       j++;
//     }
//   }

//   let output = '';
//   for (let i = 0; i < results.length; i++) {
//     output += '[' + results[i][0].start + ',' + results[i][0].end + '] and [' + results[i][1].start + ',' + results[i][1].end + '] conflict.' + '\n';
//   }
//   return output;
//    //look for values that overlap until the start value of the next compared interval is greater than i 
//  };

//time complexity is O(N * logN) => we iterate through the elements once making it O (n) but because we sort in the beginning becomes logN.
//10 mins

// console.log(`Can attend all appointments: ${can_attend_all_appointments([
//   new Interval(1, 4),
//   new Interval(2, 5),
//   new Interval(7, 9),
// ])}`); //false

// console.log(`Can attend all appointments: ${can_attend_all_appointments([
//   new Interval(6, 7),
//   new Interval(2, 4),
//   new Interval(8, 12),
// ])}`); //true

// console.log(`Can attend all appointments: ${can_attend_all_appointments([
//   new Interval(4, 5),
//   new Interval(2, 3),
//   new Interval(3, 6),
// ])}`); //false

// console.log(name_all_conflicting_appointments([new Interval(4, 5), new Interval(2, 3), new Interval(3, 6), new Interval(5,7), new Interval(7,8)])) // [4,5] and [3,6] conflict. [3,6] and [5,7] conflict.


//1/10 Intervals intersection

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.


// const merge = function(intervals_a, intervals_b) {
//   let result = [];

//   let i = 0;
//   let j = 0;
//   while (i < intervals_a.length && j < intervals_b.length) {
//     //find if intervals overlap
//     let first = intervals_a[i];
//     let second = intervals_b[j];

//     a_overlaps_b = first.start >= second.start && first.start <= second.end;
//     b_overlaps_a = second.start >= first.start && second.start <= first.end;
  

//     //if there are values in between, choose the max of the start, choose the min of the start
//     if (a_overlaps_b || b_overlaps_a) {
//       result.push(new Interval(Math.max(first.start, second.start), Math.min(first.end, second.end)));
//     }
    
//     if (first.end < second.end) {
//       i++;
//     } else {
//       j++;
//     }
    
//   }

//   return result;
// };

// process.stdout.write('Intervals Intersection: ');
// let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(); //[2, 3], [5, 6], [7, 7]

// process.stdout.write('Intervals Intersection: ');
// result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(); //[5, 7], [9, 10]


//1/8 Insert Interval (medium) problem

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// const insert = function(intervals, new_interval) {
//   let merged = [];
//   //have start which is the first start and end
//   let i = 0;

//   //skip all intervals which end before the start of the new interval
//   while (i < intervals.length && intervals[i].end < new_interval.start) {
//     merged.push(intervals[i])
//     i++;
//   }
  
//   //merge intervals that overlap with the new interval,
//   while (i < intervals.length && intervals[i].start <= new_interval.end) {
//     new_interval.start = Math.min(intervals[i].start, new_interval.start);
//     new_interval.end = Math.max(intervals[i].end, new_interval.end);
//     i++;
//   }
  
//   merged.push(new_interval);

//   //add the remaining intervals that aren't overlapped
//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i++;
//   }
 
//   return merged;
// };

// process.stdout.write('Intervals after inserting the new interval: ');
// let result = insert([
//   new Interval(1, 3),
//   new Interval(5, 7),
//   new Interval(8, 12),
// ], new Interval(4, 6));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(); //[[1,3], [4,7], [8,12]]


// process.stdout.write('Intervals after inserting the new interval: ');
// result = insert([
//   new Interval(1, 3),
//   new Interval(5, 7),
//   new Interval(8, 12),
// ], new Interval(4, 10));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(); //[[1,3], [4, 12]]

// process.stdout.write('Intervals after inserting the new interval: ');
// result = insert([new Interval(2, 3),
//   new Interval(5, 7),
// ], new Interval(1, 4));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(); //[[1, 4], [5, 7]]

//1/8 Merge interval (medium) problem
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   get_interval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// }


// const merge = function(intervals) {
//   merged = [];
//   if (intervals.length < 2) {
//     return intervals;
//   }

//   //sort interval
//   intervals.sort((a,b) => { return a.start - b.start})

//   let start = intervals[0].start;
//   let end = intervals[0].end;
  
//   for (let i = 1; i < intervals.length; i++) {
//     let interval = intervals[i];
//     if (interval.start <= end) {
//       end = Math.max(interval.end, end); 
//     } else {
//       merged.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }

//   merged.push(new Interval (start, end));

//   return merged;
// };

// merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`) //log [1,5], [7,9]


// merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`) //log [2,4] [5,9]


// merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`) //[1,6]
