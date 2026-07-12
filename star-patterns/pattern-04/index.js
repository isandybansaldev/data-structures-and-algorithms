function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (j = 0; j < n - i; j++) {
      row = row + `${j + 1} `;
    }
    console.log(row);
  }
}

printPattern(5);
