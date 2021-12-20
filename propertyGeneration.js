//Make a program that generator a property and value of object;
//Refactoring the object generator program.

const objGenerator = (str)=>{
    const object = {};
    for(var i = 0;i<str.length;i++){
        const char = str[i];
        if(/[A-Za-z0-9]/.test(char)){
            if(object[char] > 0){
                object[char]++;
            }else{
                object[char] = 1;
            }
        }
    }
    return object;
}
console.log(objGenerator("Jehello"));