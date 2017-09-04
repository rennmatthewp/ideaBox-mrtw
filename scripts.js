$('.idea-input-form').on('submit', function(e) {
  e.preventDefault();
  getIdeaValues();
});

function Idea(title, body, quality = [0], id = Date.now()){
  this.title = title;
  this.body = body;
  this.quality = quality;
  this.id = id;
};

function getIdeaValues() {
  var ideaTitle = $('.title-input').val();
  var ideaBody = $('.body-input').val();
  var newIdea = new Idea(ideaTitle, ideaBody);
  console.log(newIdea);
  return newIdea;
};

function createIdeaCard() {
  $('.idea-holder').prepend(fillIdeaCard(getIdeaValues()));
};

function fillIdeaCard (newIdea) {
  var newTitle = newIdea.title;
  var newBody = newIdea.body;
  var newId = newIdea.id;
  var newQuality = newIdea.quality;
  return (`<article id="${newId}" class="idea-card">
            <div>
              <h3 class="title">${newTitle}</h3>
              <button class="delete-button"></button>
            </div>
            <p class="idea-body">${newBody}</p>
            <div class="quality-container">
              <button class="upvote"></button>
              <button class="downvote"></button>
              <h5>${newQuality}</h5>
              <p class="quality">swill</p>
            </div>
          </article>`)
};