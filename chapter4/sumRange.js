range = function (start, end, step) {
  list_range = [];
  if (!step) {
    step = 1;
  }
  if (start < end) {
    for (i = start; i <= end; i = i + step) {
      list_range.push(i);
    }
  } else {
    for (i = start; i >= end; i = i + step) {
      list_range.push(i);
    }
  }
  return list_range;
};

sum = function (a) {
  sum = 0;
  for (let i of a) {
    sum = sum + Number(i);
  }
  return sum;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
