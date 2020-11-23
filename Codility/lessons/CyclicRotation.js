// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const index = K % A.length
    return A.splice(A.length - index, index).concat(A)
}
