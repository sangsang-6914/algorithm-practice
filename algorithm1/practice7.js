// 10부제

function solution (day, car) {
  let count = 0; // 위반 자동차 대수
  
  car.forEach(c => {
    if (c%10 === day) {
      count++;
    }
  })
  return count;
}

console.log(solution(0, [12, 20, 54, 30, 87 , 91, 30]));