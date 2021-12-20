//String to number converter;
const objGenerator = (str)=>{
    const object = {};
    for(var i = 0;i<str.length;i++){
        const char = str[i];
        if(isAlphaNumeric(char)){
            object[char] = object[char] || 1;
        }
    }
    return object;
}
console.log(objGenerator("Hello Wrold!"));
//Doesn't need to call by reference;
function isAlphaNumeric(str){
    let code = str.charCodeAt(0);
    if(!(code>46 && code<58) && !(code>64 && code<91) && !(code>96 && code<123)){
        return false;
    }
    return true;
}

console.log(isAlphaNumeric("a"));