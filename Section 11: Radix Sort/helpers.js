export function getDigit(number, position) {
    let numberAtPosition = number%(10**(position+1));
    numberAtPosition = Math.trunc(numberAtPosition/(10**(position)));
    return numberAtPosition;
}

console.log(getDigit(12345,0));