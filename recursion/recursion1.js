//Recursion first one;
function recursion (num){
    if(num<=0){
        console.log('all done');
        return;
    }
    console.log(num)
    num --;
    recursion (num);

}
recursion(3);