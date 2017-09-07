$('.idea-input-form').on('submit', function(e) {
  e.preventDefault();
  createIdeaCard()
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
  return newIdea;
};

function createIdeaCard() {
  $('.idea-holder').prepend(fillIdeaCard(getIdeaValues()));
};

function deleteIdea(id) {
  $('#' + id).remove();
}

function getQuality (qualityNumber) {
  var qualityArray = ['swill', 'plausible', 'genius'];
    return qualityArray[qualityNumber];
}

function fillIdeaCard (newIdea) {
  var newTitle = newIdea.title;
  var newBody = newIdea.body;
  var newId = newIdea.id;
  var newQuality = getQuality(newIdea.quality);

  return (`<article id="${newId}" class="idea-card">
            <div>
              <h3 class="title">${newTitle}</h3>
              <button class="delete-button" onclick="deleteIdea(${newId})"></button>
            </div>
            <p class="idea-body">${newBody}</p>
            <div class="quality-line">
              <div class="quality-button-container">
                <button class="upvote"></button>
                <button class="downvote"></button>
              </div>
              <div class="quality-string-container">
                <h5>quality:</h5>
                <p class="quality">${newQuality}</p>
              </div>
            </div>
            <hr>
          </article>
          `)
};
