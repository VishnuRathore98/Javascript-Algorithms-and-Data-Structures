function addUpto(n){
    let total = 0;
    for(let i=0;i<=n;i++){
        total+=i;
    }
    return total;
}

let initialTime = performance.now();
addUpto(parseInt(process.argv[2]));
let finalTime = performance.now();

console.log("Total time taken(seconds): ",(finalTime-initialTime)/1000);