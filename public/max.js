/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/

function max(a, b) {
	if (a>=b) {
		return a;
	}	
	return b;
}
	


/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

function maxOfThree(a, b, c) {
//We create a variable that gives us the maximum between the first two numbers
	var greaterValue = max(a, b);
//We compare the greater of the first two variables with that of the third. If the third is greatest, return it as the answer.
	if (greaterValue < c) {
		return c;
	}
//If it is not, return the greaterValue as the answer	
	return greaterValue;
}	

