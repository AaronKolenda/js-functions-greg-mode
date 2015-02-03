/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {

var newWord = [];

for (var i=0; i<word.length; i++) {
		newWord[word.length-i] = word[i];
	}

	return newWord.join("");
}




var reverseSentence = function(sentence) {
	var sentenceArray = [];
	sentenceArray = sentence.split(" ");
	for (var i=0; i < sentenceArray.length; i++) {

		sentenceArray[i] = reverseWord(sentenceArray[i]);

	}
	sentenceString = sentenceArray.join(" ");
	return sentenceString;

}



