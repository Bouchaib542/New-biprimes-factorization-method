function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n || n % 3n === 0n) return false;
  for (let i = 5n; i * i <= n; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) return false;
  }
  return true;
}

function factorize() {
  const input = document.getElementById("inputNumber").value.trim();
  const N = BigInt(input);
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Calculating, please wait...";

  setTimeout(() => {
    let found = false;
    const sqrtN = BigInt(Math.floor(Math.sqrt(Number(N))));
    for (let i = 2n; i <= sqrtN; i++) {
      if (N % i === 0n) {
        const other = N / i;
        if (isPrime(i) && isPrime(other)) {
          resultElement.textContent = `Found: ${i} × ${other} = ${N}`;
          found = true;
          break;
        }
      }
    }
    if (!found) {
      resultElement.textContent = "No biprime factors found (or not a biprime).";
    }
  }, 10);
}
