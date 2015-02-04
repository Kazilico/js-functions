/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter){

	letter = letter.toLowerCase();

	if (["a", "e", "i", "o", "u"].indexOf(letter) > -1) {
		return true;
	}

	return false;
}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/


function countVowels(word) {
//counter counts the cycle through the loop
//numberOfVowels counts the vowels
	var counter = 0;
	var numberOfVowels = 0;

//as long as the counter is less than the number of character in the word, the loop continues
	while (counter < word.length) {
//creates a variable called vowelCounter, in which the word is analyzed letter by letter as it loops, until the counter is equal to the the length of the word (which means that it examined every letter)
		var vowelCounter = (word[counter]);
//creates a variable called isItActuallyAVowel, in which isVowel checks each letter to see if iit is a vowel
		var isItActuallyAVowel = isVowel(vowelCounter);
//every time isVowel hits on a vowel, numberOfVowels gets 1 added to it
		if (isItActuallyAVowel === true) {
			numberOfVowels++
		}
	counter++;
//when the var counter reaches the end of the word, the total numberOfVowels is tested for true	
}
return numberOfVowels
}