const isEven = function (x) {
  if (x < 0) {
    return isEven(-x);
  }
  if (x == 0) {
    return true;
  }
  if (x == 1) {
    return false;
  }
  return isEven(x - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
