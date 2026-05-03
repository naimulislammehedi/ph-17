/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numbers, size) {
    if (size === 0) return 0; 

    let sum = 0; 

    for (const num of numbers) {
        // console.log(num); 
        sum = sum + num; 
    }

    return sum / numbers.length; 
}

const num = [12, 33, 21, 67]; 
const ans = make_avg(num, num.length); 
console.log(ans)