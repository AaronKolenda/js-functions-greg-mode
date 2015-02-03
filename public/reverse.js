/*
  This function should accept a string as a parameter.
  It should return a string with the parameter's contents, reversed.
  Note: No using string.reverse() or array.reverse(), that's cheating :)
*/
var reverseWord = function(word) {

var newWord = [];

for (i=0; i<word.length; i++) {
		newWord[word.length-i] = word[i];
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
	var sentenceArray = [];
	sentenceArray = sentence.split(" ");
		for (i=0; i < sentenceArray.length; i++) {
			var tempArr = [];
			var temp = [];
			var word;

			var temp = sentenceArray.splice(i);
			word = temp.join(" ");
			tempArr[i] = reverseWord(word);
			
		}
		return tempArr.join(" ");

}

	//this only reverses the 
/*var reverseSentence = function(sentence) {
	var sentenceArray = [];
	sentenceArray = sentence.split(" ");
		for (i=0; i < sentenceArray.length; i++) {
			

			sentenceArray[i] = reverseWord(sentenceArray[i]);
			
		}
		return sentenceArray;

}*/



