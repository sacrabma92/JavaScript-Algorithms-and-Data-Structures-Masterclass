//============================================================
//Given a sorted array of integers, write a function called search, thath accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
//============================================================
// Solucion 1
function serch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

// Solucion 2 Refactorizado
function serch(array, val){
    let min = 0;
    let max = array.length - 1;
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] < val){
            min = middle + 1;
        }else if(array[middle] > val){
            max = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}

serch([1,2,3,65,5,6,7],656)