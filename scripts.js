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
  displayQuality(idea);
  var allIdeas = getFromLocalStorage()
  allIdeas.push(idea)
  saveToLocalStorage(allIdeas)
}

function deleteIdea(id) {
  $('#' + id).remove();
}

function displayQuality(idea) {
  var qualityArray = ['swill', 'plausible', 'genius'];
  $('#' + idea.id).find('.quality').text(qualityArray[idea.quality])
}

function vote(id, change){
  var allTheThings = getFromLocalStorage();
  var idea = findIdea(id, allTheThings);
  if((idea.quality + change) <= 2 && (idea.quality + change) >= 0){
    idea.quality += change;
  }
  saveToLocalStorage(allTheThings);
  displayQuality(idea);
}

function saveToLocalStorage(allTheIdeas){
  localStorage.setItem("ideaArray", JSON.stringify(allTheIdeas))
}

function getFromLocalStorage(){
  if (localStorage.getItem('ideaArray')) {
    return JSON.parse(localStorage.getItem("ideaArray"))
  } else {
    return []
  }
};

function findIdea(id, allTheThings){
  return allTheThings.find(function(idea){
    return idea.id === id
  });

}

function fillIdeaCard (newIdea) {
  var newTitle = newIdea.title;
  var newBody = newIdea.body;
  var newId = newIdea.id;
  // var newQuality = getQuality(newIdea.quality);

  return (`<article id="${newId}" class="idea-card">
            <div>
              <h3 class="title">${newTitle}</h3>
              <button class="delete-button" onclick="deleteIdea(${newId})"></button>
            </div>
            <p class="idea-body">${newBody}</p>
            <div class="quality-container">
              <button class="upvote" onclick="vote(${newId}, 1)"></button>
              <button class="downvote" onclick="vote(${newId}, -1)"></button>
              <h5>quality:</h5>
              <p class="quality"></p>
            </div>
          </article>
          <hr>`)
};
