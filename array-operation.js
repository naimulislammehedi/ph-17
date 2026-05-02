// Objective: Write a function to give me the sum of all numbers in an array 

function sumOfNumbers(numbers) {
    let sum = 0; 
    for (const num of numbers) {
        console.log(num); 
        sum = sum + num; 
         
    }

    return sum; 
    // num++;
     
}
const nums = [54, 62, 12, 6]; 
const sum = sumOfNumbers(nums); 
console.log("Sum of numbers is: ", sum)