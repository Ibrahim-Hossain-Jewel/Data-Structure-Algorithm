function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        for(let aE of arr1){
            frequencyCounter1[aE] = (frequencyCounter1[aE] || 0 ) +1;
        }
        //generate a squared frequencyCounter;
        for (let aE of arr2){
            frequencyCounter2[aE] = (frequencyCounter2[aE] || 0) +1;
         }
        // console.log(frequencyCounter1);
        // console.log("Second object are generated below!");
        // console.log(frequencyCounter2);
        //Now read the key from here;
        for(let key in frequencyCounter1){
            if(!(key**2 in frequencyCounter2)){
                return false;
            }if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
                return false;
            }
        }
        return true;
    }
    
    
console.log(same([1,2,3,4],[1,4,9,16]))