// 보이는 학생 수 출력
function solution(arr) {
  var answer = 1; // 보이는 수
  var max = arr[0]; // 큰 사람

  for (let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;

}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153, 142, 163]))