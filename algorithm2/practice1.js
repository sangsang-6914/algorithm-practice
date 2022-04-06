// 큰 수 출력하기

function solution(arr) {
  let resultArr = [arr[0]]
  for (let i=1; i<arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      resultArr.push(arr[i])
    }
  }

  return resultArr
}

console.log(solution([7,3,9,5,6,12]))