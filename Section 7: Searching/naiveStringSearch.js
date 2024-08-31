/* Naive String Search */

function naiveStringSearch(string, search){

    if (string.length < search.length) {
        return count;
    }

    let lString = string.toLowerCase();
    let lSearch = search.toLowerCase();
    var count = 0;

    for (let i = 0; i < lString.length; i++) {
        
        for (let j = 0; j < lSearch.length; j++) {
            if (lString[i+j] !== lSearch[j]) break;
            if (j===lSearch.length-1) count++;
        }
        
    }
    return count;
}

console.log(naiveStringSearch("wowomgzomg",""));