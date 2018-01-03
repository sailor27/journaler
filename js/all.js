var vowels = ['a', 'e', 'i', 'o', 'u'];
var allLetters = [];

function Entry(title, body) {
  this.title = title;
  this.body = body;
}

var isVowel = function(letter){
	if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
		return true;
	} else{
		return false;
	}
};

// put individual words in an array, count number of words
Entry.prototype.countWords = function() {
  var words = this.body.split(" ");
  return words.length;
}

//put individual letters in an array, count number of letters
Entry.prototype.countLetters = function(){
  var letters = this.body.split("");
  allLetters.push(letters);
  return letters.length;
}

//for all letters in an array, if its a, e, i, o or u, push into an array
// var getVowels = function(array){
// 	console.log(array);
//   var vcount = 0;
// 	var length = array.length;
//   for (var i = 1; i < array.length; i++) {
// 		var x = isVowel(["a", "a", "e"]);
// 		console.log(x);
// 		if (x === true){
//       vcount += 1;
// 			console.log(vcount);
// 		} else{
// 			console.log('its false');
//
// 		}
// 	return vcount;
// 	}
// };
var  testArray = ["a", "r", "u", "r", "u"];
var getVowels = function(array){
	array.forEach(function(letter){
		var x = isVowel(letter);
		if (x === true){
			console.log(true);
		}else {
			console.log(false);
		}
	});
};
// front end

$(document).ready(function() {
  $("form#entry-form").submit(function() {
    event.preventDefault();
    var inputtedTitle = $('input#entry-title').val();
    var inputtedBody = $('input#entry-body').val();
    var currentPost = new Entry(inputtedTitle, inputtedBody);
    console.log(currentPost.body);
    var wordCount = currentPost.countWords();
    var letterCount = currentPost.countLetters();
    console.log(wordCount);
    console.log(letterCount);
    console.log(allLetters);
		// var blah = isVowel("c");
		// console.log(blah);
		// getVowels(testArray);
		getVowels(allLetters);
	});
});
