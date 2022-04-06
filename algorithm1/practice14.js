// 가장 긴 문자열

function solution(arr) {
  let result = ""

  arr.forEach(word => {
    if (result.length < word.length) {
      result = word
    }
  })

  return result
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]))