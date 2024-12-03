countBs = function (x) {
  num = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() == "b") {
      num++;
    }
  }
  return num;
};

countChar = function (x, char) {
  num = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() == char) {
      num++;
    }
  }
  return num;
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
