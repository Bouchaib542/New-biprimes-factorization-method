function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  for (let i = 3n; i * i <= n; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function factorizeBiprime() {
  const input = document.getElementById("number").value;
  const N = BigInt(input);
  const sqrtN = BigInt(Math.floor(Math.sqrt(Number(N))));

  for (let i = sqrtN; i >= 2n; i--) {
    if (N % i === 0n) {
      const other = N / i;
      if (isPrime(i) && isPrime(other)) {
        document.getElementById("result").innerText = `Prime factors: ${i} × ${other}`;
        return;
      }
    }
  }

  document.getElementById("result").innerText = "No biprime factorization found.";
}
