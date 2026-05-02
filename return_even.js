// create function that will return only the even number, return the sum of the even numbers. 

function evenNumbersOnly(numbers) {
    const evens = []; 
    for (const num of numbers) {
        if (num % 2 === 0) {
            console.log(num); 
            evens.push(num); 
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6]; 
// const evens = evenNumbersOnly(numbers);
// console.log("Even numbers are: ", evens);

function sumOfEvenNumber(numbers) {
    let sum = 0; 
    for (const num of numbers) {
        if (num % 2 === 0) {
            console.log(num); 
            sum += num; 
        }
    }
    return sum; 
}


const sum = sumOfEvenNumber(numbers);
console.log("Sum of even numbers is: ", sum);
