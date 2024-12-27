let loop = function (n, testFunc, updateFunc, bodyFunc) {
  for (let i = n; testFunc(i); i = updateFunc(i)) {
    bodyFunc(i);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
); // → 3 // → 2 // → 1
