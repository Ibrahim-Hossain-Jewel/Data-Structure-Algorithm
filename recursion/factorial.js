//findout the factorial value using recursion.
function recursion (num){
    //Base case for recursion
    if(num === 0){return 1}
    return num * recursion(num - 1);
}
console.log(recursion(3))
