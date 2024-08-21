// O(1) space complexity, the size of total remains constant no matter how long the input array is.

function sum(array){
    let total=0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log("Sum total: ",total);
}

// console.log(process.argv[2]);
sum([1,2,3,4,5]);