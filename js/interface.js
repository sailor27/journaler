var Entry = require('./../js/scripts.js').entryModule;

$(document).ready(function(){
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
  });
});
