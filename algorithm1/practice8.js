// 일곱 난쟁이 (re)
function solution(arr) {
  
  let answer = arr;
  let sum = answer.reduce((a, b) => a+b, 0);
  for (i=0; i<8; i++) {
    for (j=i+1; j<9; j++) {
      // 총 합에서 두명의 키의 합을 뺏을때 100이면 그 두명이 가짜
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1)
        answer.splice(i, 1)
      }
    }
  }  

  return answer;

}

console.log(solution([20,7,23,19,10,15,25,8,13]))