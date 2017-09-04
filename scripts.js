function Idea(title, body, quality = [0], id = Date.now()){
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = id;
}

function getIdeaValues() {
  var ideaTitle = $('.title-input').val();
  var ideaBody = $('.body-input').val();
  var newIdea = new Idea(ideaTitle, ideaBody);
}

$('.idea-input-form').on('submit', function(e) {
  e.preventDefault();
  getIdeaValues();
});
