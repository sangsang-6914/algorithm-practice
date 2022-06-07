// 등수구하기
function solution(arr) {
  let answer = Array.from({length: arr.length}, () => 1);

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      console.log(`a:${arr[i]},b:${arr[j]}`)
      if (arr[j] > arr[i]) {
        answer[i] = answer[i] + 1;
      }
    }
  }

  console.log(answer);
}

console.log(solution([87,89,92,92,76]))