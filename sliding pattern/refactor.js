function maxSubArraySum(arr, num){
    let max = 0;
    let temp = 0;
    for(let i = 0; i<num; i++){
        temp += arr[i];
    }
    max = temp;
    for(let j = num; j<arr.length; j++){

    }
}
console.log(maxSubArraySum([1,2,3,4,5,6,7],2));