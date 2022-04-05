// 홀수

function solution(a) {
  let sum = 0; // 홀수들의 합
  let min = Number.MAX_SAFE_INTEGER; // 홀수 중 최소값

  a.forEach(num => {
    if (num % 2 === 1) {
      sum += num;
      if (min > num) {
        min = num;
      }
    }
  })

  let answer = [sum, min]
  
  return answer

}

console.log(solution([12,77,38,41,53,92,85]))