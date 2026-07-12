function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    // add empty spaces
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + ' ';
    }

    // add stars
    for (let k = 0; k < i + 1; k++) {
      row = row + '*';
    }

    console.log(row);
  }
}

printPattern(5);
