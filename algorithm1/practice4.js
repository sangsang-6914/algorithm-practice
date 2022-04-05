// 1부터 n까지의 합 구하기

function solution(a) {
  let sum = 0;

  for (i=1; i<=a; i++) {
    sum += i;
  }

  return sum;
}

console.log(solution(10))