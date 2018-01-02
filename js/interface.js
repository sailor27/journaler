var Entry = require('./../js/scripts.js').entryModule;

$(document).ready(function(){
  $("form#entry-form").submit(function() {
    event.preventDefault();
    alert("jquery is working");
  });
});
