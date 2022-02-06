//findout add number from an array using recursion helper method.
function Recursion(arr) {
    let result = [];
    function recursionHelper(arrayData) {
        if(arrayData.length === 0){
            return 0;
        }
        //now check array element even or odd number.
        if(arrayData[0]%2 !== 0){
            result.push(arrayData[0]);
        }
        recursionHelper(arrayData.slice(1));
    }

    recursionHelper(arr);
    return result;
}
console.log(Recursion([1,2,3,4,5,6,7,8,9]));
