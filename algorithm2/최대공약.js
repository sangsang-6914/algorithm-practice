function solution (a, b) {
  let answer;
  // 최대공약수
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  console.log(gcd(a,b))
}

console.log(solution(6, 4))