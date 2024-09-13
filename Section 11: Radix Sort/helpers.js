/*---------------------------------------------------------------
                    Get number at position
 
    This will return the digit in num at the given place value.
---------------------------------------------------------------
*/


// Approach 1:
/* 
function getDigit(number, position) {
    let numberAtPosition = number%(10**(position+1));
    numberAtPosition = Math.trunc(numberAtPosition/(10**(position)));
    return numberAtPosition;
}
*/

//---------------------------------------------------------------

// Approach 2:

function getDigit(number, position) {
    return Math.floor(Math.abs(number)/Math.pow(10,position))%10;
}

// console.log(getDigit(1234,3)); // O/p -> 1


/* 
---------------------------------------------------------------
                 Get Digit Count

    This will return the number of digits in num.
---------------------------------------------------------------

*/

// Approach 1:

/* 
function digitCount(number) {
    let count=0, newNum=number;
    if(number===0) return 1;
    while (newNum!==0) {
        count++;
        newNum=Math.trunc(number/(10**count));
    }
    return count;
}
*/

//---------------------------------------------------------------

// Approach 2:

function digitCount(number){
    if (number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// console.log(digitCount(23451));

/* 
---------------------------------------------------------------
                     Most Digits

    Given an array of numbers, returns the number of digits in
    the largest number in the list.
---------------------------------------------------------------

*/

// Approach 1:
/* 
function mostDigits(numArr) {
    if(numArr.length===0) return 0;
    let largest=0;
    for (const item of numArr) {
        if (largest < digitCount(item)) {
            largest = digitCount(item);
        }
    }
    return largest;
}
*/

//---------------------------------------------------------------

// Approach 2:
function mostDigits(numArr) {
    if(numArr.length===0) return 0;
    let largest=0;
    for (const item of numArr) {
        largest = Math.max(largest,digitCount(item));
    }
    return largest;
}

// console.log(mostDigits([1,11,111,1111,1,23222,892356])); //6

export {getDigit, digitCount, mostDigits};