//Multiple pointer pattern 
//Implement a function called countUniqueValues which accepts a sorted array, and count the unique values in the array. there can be negetive numbers in the array. but it will always be sorted.
function countUniqueValues(arr){
    let first = 0;
    for(let i = 1; i<arr.length; i++){
        if(arr[first] !== arr[i]){
            first++;
            arr[first] = arr[i];
        }
    }
    return first+1;
}

console.log(countUniqueValues([-1,1,1,1,2,2,3,4,5,5,5,6,7,6,12]));