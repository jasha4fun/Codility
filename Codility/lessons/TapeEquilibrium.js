// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sum = A.reduce((a, b) => a + b, 0)

  let upper = A[0]
  let lower = sum - A[0]
  let min = Math.abs(upper - lower)
  for (let i = 1; i < A.length - 1; i++) {
    upper += A[i]
    lower -= A[i]
    min = Math.min(min, Math.abs(upper - lower))
  }

  return min
}
