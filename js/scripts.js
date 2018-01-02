function Entry(title, body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.countWords = function() {
  var wordsArray = this.body.split(" ");
  return wordsArray.length;
}

exports.entryModule = Entry;
