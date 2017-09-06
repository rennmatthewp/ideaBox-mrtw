

$('.idea-input-form').on('submit', function(e) {
  e.preventDefault();
  createIdeaCard();
  
});

function Idea(title, body, quality = 0, id = Date.now()){
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
  var idea = getIdeaValues()
  $('.idea-holder').prepend(fillIdeaCard(idea));
  var allIdeas = getFromLocalStorage()
  allIdeas.push(idea)
  saveToLocalStorage(allIdeas)
};

function deleteIdea(id) {
  $('#' + id).remove();
}

function getQuality(qualityNumber) {
  var qualityArray = ['swill', 'plausible', 'genius'];
    return qualityArray[qualityNumber];
}

function upvote(id){

}

function saveToLocalStorage(allTheIdeas){
  localStorage.setItem("ideaArray", JSON.stringify(allTheIdeas))
}

function getFromLocalStorage(){
  if (JSON.parse(localStorage.getItem("ideaArray"))) {
    return JSON.parse(localStorage.getItem("ideaArray"))
  } else {
    return []
  }
};

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
            <div class="quality-container">
              <button class="upvote" onclick="upvote(${newId})"></button>
              <button class="downvote"></button>
              <h5>quality:</h5>
              <p class="quality">${newQuality}</p>
            </div>
          </article>
          <hr>`)
};
