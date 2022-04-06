// 가운데 문자 출력

function solution(word) {
  let isEven = word.length % 2 === 0 ? true : false
  let centerIndex = word.length / 2
  let result = ""

  if (isEven) {
    result = word.substring(centerIndex - 1, centerIndex + 1)
  } else {
    result = word.substring(centerIndex, centerIndex + 1)
  }

  return result

}

console.log(solution("study"))