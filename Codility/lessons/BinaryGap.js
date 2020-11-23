
function solution(N) {

  const binary = N.toString(2).split('')
  let max = 0
  let current = 0

  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      max = Math.max(max, current)
      current = 0
    } else {
      current++
    }
  }
  return max
}
