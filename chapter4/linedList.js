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

let prepend = function (a, x) {
  res = {};
  res["value"] = a;
  res["rest"] = JSON.parse(JSON.stringify(x));
  return res;
};

let nth = function (x, a) {
  temp = x;
  for (i = 0; i <= a; i++) {
    if (temp["value"]) {
      if (i == a) {
        return temp["value"];
      }
    }
    if (temp["rest"]) {
      temp = temp["rest"];
    }
  }
  return undefined;
};

let nthRecur = function (x, a) {
  if (a != 0 && !x["rest"]) {
    return undefined;
  } else if (a == 0) {
    // res = x["value"];
    return x["value"];
  } else if (a != 0 && x["rest"]) {
    return nthRecur(x["rest"], a - 1);
  }
};

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
console.log(nthRecur(arrayToList([10, 20, 30]), 1)); // → 20
