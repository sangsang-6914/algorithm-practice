// 대문자로 통일

function solution (word) {
  let result = ""

  for (let c of word) {
    if (c !== c.toUpperCase()) {
      result += c.toUpperCase()
    } else {
      result += c
    }
  }

  return result
}

console.log(solution("ItsTimeToStudy"))