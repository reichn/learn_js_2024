let size = 12;
for (i = 1; i <= size; i++) {
  // console.log("i=", i);
  if (i % 2 !== 0) {
    console.log(" #".repeat(size / 2));
  } else if (i % 2 === 0) {
    console.log("# ".repeat(size / 2));
  }
}
