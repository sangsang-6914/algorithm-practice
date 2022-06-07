const solution = (arr) => {
  let n = arr.length;
  let sum1=sum2=0;
  let max=Number.MIN_SAFE_INTEGER;

  for (let i=0; i<n; i++) {
    sum1=sum2=0;
    for (let j=0; j<n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    max = Math.max(max, sum1, sum2);
  }

  sum1=sum2=0;

  // 대각선의 합
  for (let i=0; i<n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n-i-1];
  }

  max = Math.max(max, sum1, sum2);

  console.log(max);

}

solution([
  [10,13,10,12,15],
  [12,39,30,23,11],
  [11,25,50,53,15],
  [19,27,29,37,27],
  [19,13,30,13,19]
]);