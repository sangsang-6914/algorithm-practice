function solution(word) {
  let count = 0;

  for (let c of word) {
    if (c === c.toUpperCase()) {
      count++;
    }
  }

  return count;
}

console.log(solution("KoREAAeaTimeGood"))