// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = {}
    for (let i = 0; i < A.length; i++) {
        if (typeof stack[A[i]] === 'undefined') {
            stack[A[i]] = true
        } else {
            delete stack[A[i]]
        }
    }

    return +Object.keys(stack)[0]
}
