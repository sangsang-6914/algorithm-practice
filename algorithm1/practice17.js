function solution(arr) {
  let resultArr = []

  arr.forEach(word => {
    if (!resultArr.includes(word)) {
      resultArr.push(word)
    }
  })

  return resultArr
}

console.log(solution(['good', 'time', 'good', 'time', 'student']))