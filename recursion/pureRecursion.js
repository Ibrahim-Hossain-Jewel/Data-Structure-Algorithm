//findout the odd number from an array using pure recursion helper method.
function pureRecursion(num) {
    let result = [];
    if(num.length === 0){
        return result;
    }if(num[0]%2 !== 0){
        result.push(num[0]);
    }
    result = result.concat(pureRecursion(num.slice(1)));
    console.log(result)
}
pureRecursion([1,2,3,4,5,6,7,8,9])