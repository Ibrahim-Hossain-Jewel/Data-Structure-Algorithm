// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    function reverse(original){
        if(original === '') return '';
        return reverse(original.substr(1)) + original.charAt(0);
    }
    let rev = reverse(str);

    if(str === rev){
        return true;
    }else{
        return false;
    }
  }

  console.log(isPalindrome('tacocat'))