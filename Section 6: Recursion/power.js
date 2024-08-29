
/* 
    Power:
    -------
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent. 
    This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.

    eg.
        power(2,3) -> 8
        power(3,1) -> 3
        power(3,0) -> 1
 */


function power(base, exponent){
    // base^exponent
    if (exponent === 1) {
        return base;
    }
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent-1);
}

console.log(power(3,0));