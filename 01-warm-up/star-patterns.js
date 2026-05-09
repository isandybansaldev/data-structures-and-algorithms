function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + `${j + 1} `;
    }
    console.log(row);
  }
}

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + `${i + 1} `;
    }
    console.log(row);
  }
}

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + `${j + 1} `;
    }
    console.log(row);
  }
}

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - (i + 1)) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }

    console.log(row);
  }
}

function pattern6_2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }

    console.log(row);
  }
}

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bit = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + `${bit} `;
      bit = bit === 0 ? 1 : 0;
    }
    console.log(row);
  }
}

function pattern8(n) {
  let bit = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + `${bit} `;
      bit = bit === 0 ? 1 : 0;
    }
    console.log(row);
  }
}

pattern1(5);
pattern2(5);
pattern3(5);
pattern4(5);
pattern5(5);
pattern6(5);
pattern6_2(5);
pattern7(5);
pattern8(5);
