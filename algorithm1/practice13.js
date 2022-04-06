// 대소문자 변환

function solution(word) {
  let result = "";
  
  for (let c of word) {
    if (c === c.toUpperCase()) {
      result += c.toLowerCase();
    } else {
      result += c.toUpperCase();
    }
  }

  return result;

}
k
console.log(solution("StuDY"))