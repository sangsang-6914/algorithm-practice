// 삼각형 판별하기

function solution(a, b, c) {
  let max; // 가장 긴 변의 길이
  let total = a+b+c; // 변의 합
  let result = "NO"
  
  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (max < c) {
    max = c;
  }

  // total-max = 긴 변을 제외한 나머지 두변의합
  if (total-max<=max) {
    result = "NO";
  }

  return result;
}

console.log(solution(13, 33, 17));