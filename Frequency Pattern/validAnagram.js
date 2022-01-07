function validAnagram(arr1, arr2){
    let arlen1 = arr1.toLowerCase();
    let arlen2 = arr2.toLowerCase();
    if(arlen1.length !== arlen2.length){
        return false;
    }else{
        let arSplitGenerator1 = {};
        let arSplitGenerator2 = {};
        for(const aE of arlen1){
            arSplitGenerator1[aE] = (arSplitGenerator1[aE] || 0) + 1;
        }
        for(const aE of arlen2){
            arSplitGenerator2[aE] = (arSplitGenerator2[aE] || 0) +1;
        }
        for(const propName in arSplitGenerator1){
            if(!(propName in arSplitGenerator2)){
                return false;
            }if(arSplitGenerator2[propName] !== arSplitGenerator1[propName]){
                return false;
            }
        }
    }
    return true;
}
validAnagram("qwerty","qwerty");