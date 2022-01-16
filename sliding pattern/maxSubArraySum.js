/*Write a function called maxSubArraySum which accepts an array of integers and a number called n the function should calculate the maximum sum of n consecutive elements in the array */

function maxSubArraySum(arr, num){
    if(num>arr.length){
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i<arr.length; i++){
        var temp = 0;
        for(let j = 0; j<num; j++){
            temp += arr[i+j];
        }
        if(temp>max){
            max = temp;
        }
    }
    return max;
}
console.log(maxSubArraySum([1,2,3,4,5,19],3))