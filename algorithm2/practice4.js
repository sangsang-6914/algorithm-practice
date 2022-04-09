// 점수계산
function solution(arr) {
  let sum = 0; // 총합
  let count = 0; // 1의 갯수

  arr.forEach(x => {
    if (x === 1) {
      count++;
      sum += count;
    } else {
      count=0;
    }
  }) 
  
  return sum;
}

console.log(solution([1,0,1,1,1,1,1,1,0,0,1,1,0]))