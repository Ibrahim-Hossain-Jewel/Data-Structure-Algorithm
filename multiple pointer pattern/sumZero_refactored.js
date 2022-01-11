//Writings a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is zero. return an array that includes both values the sum to 0 or undefined if a pair doesn't exist.

function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]  + arr[right];
        if(sum===0){
            return arr[left], arr[right];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
}
const number = [-1,-2,-3,1,2,3,4,5];
number.sort((a,b) => b-a);
console.log(number)
console.log(sumZero(number));