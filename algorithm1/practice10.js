// 문자 찾기
function solution(word, keyword) {
  let count = 0; // 찾은 문자 개수
  
  for (let c of word) {
    if (keyword === c) {
      count++;
    }
  }

  return count;
}

console.log(solution("COMPUTERPROGRAMMING", "C"))