// In JavaScript, the comma operator (,) allows you to evaluate multiple expressions in a single statement, returning the value of the last expression. This operator is mostly used in situations where you want to perform multiple operations within a single expression, particularly in contexts like loops, or when you want to execute several expressions in a concise manner.

// How It Works:
// Multiple Expressions: The expressions separated by the comma are evaluated from left to right.
// Return Value: Only the value of the last expression is returned.
// Example:
// Here's a simple example to illustrate the use of the comma operator:
let x = 10;
let y = 20;

let result = (x++, y++, x + y);

console.log(result); // Output: 32
// Explanation:
// x++: Increments x by 1 (so x becomes 11).
// y++: Increments y by 1 (so y becomes 21).
// x + y: Calculates the sum of x and y, which is 11 + 21 = 32.
// The result variable is assigned the value of the last expression (x + y), which is 32.

// Common Use Cases:
// In a for Loop:
// The comma operator is often used in the update part of a for loop to update multiple variables:
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// In Variable Assignments:
// You can assign multiple variables in one line:
let a=10,b=20;
console.log(a,b);