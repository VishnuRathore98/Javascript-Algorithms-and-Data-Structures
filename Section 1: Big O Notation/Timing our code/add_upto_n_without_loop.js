function addUpto(n){
    return n*(n+1)/2;
}

let initialTime = performance.now();
addUpto(parseInt(process.argv[2]));
let finalTime = performance.now();

console.log("Total time taken(seconds): ",(finalTime-initialTime)/1000);