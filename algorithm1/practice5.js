// 최솟값 구하기

function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  // let min = arr[0];

  arr.forEach(element => {
    if (min > element) {
      min = element;
    }
  });

  return min;
}

console.log(solution([5,3,7,1,2,15,-1]));