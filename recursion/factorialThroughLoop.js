//findout the factorial value using for loop.
function factorial(num) {
    var container = 1;
    for(let i = 1; i<=num; i++){
        container*=i;
    }
    return container;
}
console.log(factorial(3));