export default function pivot(array, startIndex, endIndex) {
    
    let pivotValue = array[0];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (pivotValue>array[i]) {
            pivotIndex++;
            let temp = array[pivotIndex];
            array[pivotIndex] = array[i];
            array[i] = temp;
            // console.log(pivotIndex, array[i], array[pivotIndex]);
        }
    }
    let temp = array[pivotIndex];
    array[pivotIndex] = array[0];
    array[0] = temp;



    return pivotIndex;
}

let array = [5,2,1,8,4,7,6,3];

console.log(pivot(array, 0, array.length));