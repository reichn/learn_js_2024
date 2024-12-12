let deepEqual = function (a, b) {
  if (a === b) {
    return true;
  } else if (a === null || b === null) {
    return false;
  } else if (typeof a == "object" && typeof b == "object") {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    } else {
      for (i = 0; i < Object.keys(a).length; i++) {
        if (
          Object.keys(a)[i] != Object.keys(b)[i] ||
          typeof Object.values(a)[i] != typeof Object.values(b)[i]
        ) {
          return false;
        } else {
          return deepEqual(Object.values(a)[i], Object.values(b)[i]);
        }
      }
    }
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, { here: 1, object: 2 })); // → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // → true
