let arrayToList = function (x) {
  res = {};
  stepFirst = {};
  stepSecond = {};

  stepSecond["value"] = x[x.length - 1];
  stepSecond["rest"] = null;
  for (i = 2; i <= x.length; i++) {
    stepFirst["value"] = x[x.length - i];
    stepFirst["rest"] = JSON.parse(JSON.stringify(stepSecond));

    stepSecond = JSON.parse(JSON.stringify(stepFirst));
  }

  res = JSON.parse(JSON.stringify(stepSecond));
  return res;
};

let listToArray = function (x) {
  res = [];
  stepIn = x;

  while (stepIn["value"]) {
    res.push(stepIn["value"]);
    if (stepIn["rest"]) {
      stepIn = stepIn["rest"];
    } else {
      return res;
    }
  }
};

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
