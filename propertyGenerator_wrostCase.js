function charCounter (str){
    let result = {};
    for(var i = 0; i<str.length; i++){
        const char = str[i];
        if(result[char] >0){
            result[char];
        }else{
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCounter("hello ejwel"))