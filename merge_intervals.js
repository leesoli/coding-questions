//1/8 Merge interval (medium) problem
// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  merged = [];
  if (intervals.length < 2) {
    return intervals;
  }

  //sort interval
  intervals.sort((a,b) => { return a.start - b.start})

  let start = intervals[0].start;
  let end = intervals[0].end;
  
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval.start <= end) {
      end = Math.max(interval.end, end); 
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }

  merged.push(new Interval (start, end));

  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) //log [1,5], [7,9]


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) //log [2,4] [5,9]


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`) //[1,6]
