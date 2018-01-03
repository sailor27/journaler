
var vowels = ['a', 'e', 'i', 'o', 'u'];
var allLetters = [];

function Entry(title, body) {
  this.title = title;
  this.body = body;
}

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
var getVowels = function(arr){
  var vcount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "a"){
      vcount += 1;
			console.log(vcount);
		}
	return vcount;
	}
};


exports.entryModule = Entry;
 // || "e" || "i" || "o" || "u"
