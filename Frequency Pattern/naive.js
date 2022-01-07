//Compare two array one array is square then one : its return true if two array are equal.
function same (array1, array2){
    if(array1.length !== array2.length){
        return false;
    }else{
        for(let a1E of array1){
            const currentIndex = array2.indexOf(a1E**2);
            if(currentIndex === -1){
                return false;
            }else{
                console.log(array2);
                console.log(currentIndex)
                array2.splice(currentIndex, 1); //Well, if i provide here 1 as a second argument it will be delete each element as current Index
            }
        }
    }
    return true;
}
same([1,2,3],[1,4,9]);