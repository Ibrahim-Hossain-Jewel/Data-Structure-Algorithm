//My second recursive function;
function recursive2(num){
    if( num === 0 ) {
        return 1;
    }
    return num + recursive2(num - 1);

}
console.log(recursive2(3));


