let reverseArray = function (x) {
  out = [];
  for (let i of x) {
    out.unshift(i);
  }
  return out;
};

let reverseArrayInPlace = function (x) {
  n = x.length;
  for (i = 1; i < n; i++) {
    x.unshift(i + 1);
  }
  for (i = 1; i < n; i++) {
    x.pop();
  }
};

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
