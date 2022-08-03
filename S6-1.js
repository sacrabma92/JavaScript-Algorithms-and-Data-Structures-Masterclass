//============================================================
/*Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/
//============================================================

function sameFrequency(number1, number2){
    const nuevoObjeto = {};
    while(number1 > 0){
        nuevoObjeto[number1 % 10] ? nuevoObjeto[number1 % 10] += 1 : nuevoObjeto[number1 % 10] = 1;
        number1 = Math.floor(number1 / 10);
    }
    while(number2 > 0){
        nuevoObjeto[number2 % 10]--;
        number2 = Math.floor(number2 / 10);
    }
    let valid = true;
    Object.keys(nuevoObjeto).forEach((key) =>{
        if(nuevoObjeto[key] !== 0){
            valid = false;
        }
    })
    return valid;
}


console.log(sameFrequency(281, 182));