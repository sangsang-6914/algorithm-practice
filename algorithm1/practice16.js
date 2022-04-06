// 중복문자 제거

function solution(word) {
  let result = []

  for (let c of word) {
    if (!result.includes(c)) {
      result.push(c)
    }
  }

  return result.join('')
}

console.log(solution("ksekksetdfdfwwfdfwfwdfwdfazxvasdva"))