/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {

var newWord = [];
var temp = [];

for (i=0; i<word.length; i++) {
		temp[i] = word[i];
	}

for (i=0; i<temp.length; i++) {
		newWord[temp.length-i] = temp[i];
	}

	return newWord.join("");
}


/*
  This function should accept a string as a parameter.
  It should..
  - Break up the string into words (words are separated by spaces)
  - Reverse the contents of each word
  - Return a string that contains each reversed word, in order
*/
var reverseSentence = function(sentence) {

}


