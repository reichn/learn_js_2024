let flat = function (arr) {
  temp = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      temp = temp.concat(item);
    }
  }
  return temp;
};

console.log(flat([[1, 2, 3], [4, 5], [6]])); // [1, 2, 3, 4, 5, 6]
