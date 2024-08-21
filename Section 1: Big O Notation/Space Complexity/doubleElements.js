// O(n) space complexity, the size of newArr increases as per the size of input arr.

function doubleElements(array){
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        newArr.push(2* array[i]);
    }
    console.log("Doubled array: ",newArr);
}

// console.log(process.argv[2]);
doubleElements([1,2,3,4,5]);