//============================================================
// Write a function which takes in a string and return counts of each charter in the string
//============================================================

// Solucion 1
function charCount(str){
    let result = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(result[char] > 0){
            result[char]++;
        }else{
            result[char] = 1;
        }
    }
    return result;
}

// Solucion 2 Refactorizado
function charCount(str){
    let obj = {};
    for(let char of str){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            }else{
                obj[char] = 1;
            };
        }
    }
    return obj;
}

// Solucion 3 Refactorizado

function charCount(str){
    let obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){
            if(obj[char] > 0){
                obj[char]++;
            }else{
                obj[char] = 1;
            };
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if( !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)){ // lower alpha (a-z)
            return false;
        } 
        return true;
}

console.log(charCount('HolaCarlos'));