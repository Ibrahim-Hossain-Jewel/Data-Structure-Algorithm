//Recursion is to solve the looping problem in our code.
function recursion (num){
    if(num>=20){
        return;
    }
    console.log(num*2);
    num ++;
    recursion(num);
}
recursion(0);

