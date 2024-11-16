let size = 8;
for (i = 1; i <= size; i++) {
  if (i / 2 != 0) {
    console.log((" #" * size) / 2);
  } else if (i / 2 == 0) {
    console.log(("# " * size) / 2);
  }
}
