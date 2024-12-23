let every = function (arr, func) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      result = false;
      break;
    }
  }
  return result;
};

console.log(every([1, 3, 5], (n) => n < 10)); // → true
console.log(every([2, 4, 16], (n) => n < 10)); // → false
console.log(every([], (n) => n < 10)); // → true
