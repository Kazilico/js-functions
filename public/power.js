/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {
	var product = a * b;
	return product;
}

/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {
//counter counts the cycle through the loop
//value starts the loop with 1
	var counter = 0
	var value = 1
//exponent of 0 wouldn't get multiplied
	if (exponent === 0) {
		return 0
	}
	else {
		//as long as the counter is less than the exponent  
	    while (counter<exponent) {
	//we have to begin by multiplying the var value (which, the first time through, is the base) by the base once		
			value = multiply(base, value); 
	//And then we have to up the counter one number
			counter++	
	    }
	}

	return value
}

