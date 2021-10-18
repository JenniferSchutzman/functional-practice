import React from 'react'


// ITERATION vs RECURSION

// Interation = imperative, looping, stateful


// Recursion = functional, self-referential, stateless
// makes a call to itself 
// 2 parts to the funcition: 
//      1. taking out the first thig in the result and adding it to the rest of the array 
//      2. base case; a non recursive func stops the recursion 

function sum(numbers) {
    if (numbers.length === 1) {
        // base case
        return numbers[0];
    } else {
        // recursive case 
        return numbers[0] + sum(numbers.slice(1));
    }
}

sum([0, 1, 2, 3, 4]); //

// self-referencial is how we handle multiple chunks of code at the same time
// -> to each call ofthe funcotin, all I care about is the input coming in and the output going out 
const Recursion = () => {

    sum([0, 1, 2, 3, 4]); //

    return (
        <h1>Recursion</h1>
    )
}

export default Recursion;

// Recursive Functions have 2 parts:
//  1. Base case: condition(s) under which the function returns an ouput without making a recursive call
//  2. Recursive case: condition(s) under which the function calls itself to retun the output

function iterativeFactorial(n) {
    let product = 1;
    while (n > 0) {
        product *= n;
        n--;
    }
    return product;
}

iterativeFactorial(3)

function recursiveFactorial(n) {
    console.log('n', n)
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1)
}

recursiveFactorial(3)


///////////////// Fibonacci examples 
function iterativeFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let previous = 0;
    let current = 1;
    for (let i = n; i > 1; i--) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}



function recursiveFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    console.log(n)
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

recursiveFibonacci(3)
