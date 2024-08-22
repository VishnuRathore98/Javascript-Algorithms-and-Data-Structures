// ================================================================
// Write a function which takes two numbers and returns their sum.
// ================================================================

// 1. Can I restate the problem in my own words?
    // Implement addition

// 2. What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about strings for large numbers?

// 3. What are the outputs that should come from the inputs? 
    // int? float? string?

// 4. Can the outputs be determined from the inputs? That is, do I have enough information to solve the problem?
    // add(num1, num2) -> sum = num1+num2 -> sum

// 5. How should I label the important pieces of data that are a part of the problem?
    // function = add
    // inputs = num1, num2
    // output = sum

function add(num1, num2){
    let sum = num1+num2;
    return sum;
}

console.log(`Sum of ${process.argv[2]} and ${process.argv[3]} is: `,add(parseInt(process.argv[2]),parseInt(process.argv[3])));