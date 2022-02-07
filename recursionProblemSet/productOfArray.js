//findout the productOfArray in javascript;
function productOfArray([front, ...end]) {
    if(front === undefined){return 1};
    return front * productOfArray(end);
}
console.log(productOfArray([1,2,3,4]));
