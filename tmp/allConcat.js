var Entry = require('./../js/scripts.js').entryModule;

$(document).ready(function(){
  $("form#entry-form").submit(function() {
    event.preventDefault();
    var inputtedTitle = $('input#entry-title').val();
    var inputtedBody = $('input#entry-body').val();

    var currentPost = new Entry(inputtedTitle, inputtedBody);
    console.log(currentPost.body);
    var wordCount = currentPost.countWords();
    console.log(wordCount);
  });
});

function Entry(title, body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.countWords = function() {
  var wordsArray = this.body.split(" ");
  return wordsArray.length;
}

exports.entryModule = Entry;
