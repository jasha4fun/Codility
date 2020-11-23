// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a,b) {
        return a-b
    })

    let next = 1
    let i = 0
    while (next === A[i]) {
        next++
        i++
    }

    return next
}

//https://app.codility.com/demo/results/trainingJHUJPQ-PA2/
