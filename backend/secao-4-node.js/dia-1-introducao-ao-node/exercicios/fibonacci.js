const readline = require('readline-sync');

function fibonacci(n) {
  let a = 1;
  let b = 1;

  for(let i = n; i >= 0; i -= 1) {
    if (b) console.log(b);

    const temp = a;

    a += b;

    b = temp;
  }

  console.log(b);
  return b;
}

fibonacci(5);