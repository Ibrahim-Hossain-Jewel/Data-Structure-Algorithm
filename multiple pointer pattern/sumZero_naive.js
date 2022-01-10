//Writings a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is zero. return an array that includes both values the sum to 0 or undefined if a pair doesn't exist.

function sumZero(arr){
    for(let data of arr){
        for(let mul of arr){
            if(data+mul === 0){
                return data,mul;
            }
        }
    }
}
let number = [-4,1,2,3,21,,4,5,8];
number.sort((a,b)=>a-b);
console.log(sumZero(number));