//1/8 Insert Interval (medium) problem

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function(intervals, new_interval) {
  let merged = [];
  //have start which is the first start and end
  let i = 0;

  //skip all intervals which end before the start of the new interval
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i])
    i++;
  }
  
  //merge intervals that overlap with the new interval,
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i++;
  }
  
  merged.push(new_interval);

  //add the remaining intervals that aren't overlapped
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
 
  return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log(); //[[1,3], [4,7], [8,12]]


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
