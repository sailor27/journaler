var Entry = require('./../js/scripts.js').entryModule;

$(document).ready(function(){
  $("form#entry-form").submit(function() {
    event.preventDefault();
    var title = $('input#entry-title').val();
    var body = $('input#entry-body').val();

    var currentPost = new Entry(title, body);
    console.log(currentPost);
  });
});
