//exercise 10 with recursion problem.
//Write a function called power which accepts a base and an exponent. the function should return the power of the base to the component this function should mimic the functionality of math.pow() do not warry about negative bases exponent.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base, exponent - 1); // power function returning base
  }
  console.log(power(2,3))