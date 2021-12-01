/* Load Functions */

function onLoadDebut() {
  addTriviaDebut()

}

function onLoadFearless() {
  addTriviaFearless()

}

function onLoadSpeakNow() {
  addTriviaSpeakNow()
}

function onLoadRed() {
  addTriviaRed()
}

function onLoad1989() {
  addTrivia1989()
}

function onLoadReputation() {
  addTriviaRep()
}

function onLoadLover() {
  addTriviaLover()
}

function onLoadFolklore() {
  addTriviaFolklore()
}

function onLoadEvermore() {
  addTriviaEvermore()
}


/* Lightbox (Source: https://www.w3schools.com/howto/howto_js_lightbox.asp) */

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
  }
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
}

/* Transition Animation - Help From: https://stackoverflow.com/questions/55635784/show-hide-elements-with-animation/55636032 */

// adds event listener for clicking on a trivia question
function addTriviaHelper(question, answer) {
    question.addEventListener('click', evt => {
    answer.classList.toggle('show')
  })
}

// adds trivia event listener for Debut page
function addTriviaDebut() {
  var question1 = document.getElementById("debut_trivia_q_1")
  var answer1 = document.getElementById("debut_trivia_a_1")
  var question2 = document.getElementById("debut_trivia_q_2")
  var answer2 = document.getElementById("debut_trivia_a_2")
  var question3 = document.getElementById("debut_trivia_q_3")
  var answer3 = document.getElementById("debut_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Fearless page
function addTriviaFearless() {
  var question1 = document.getElementById("fearless_trivia_q_1")
  var answer1 = document.getElementById("fearless_trivia_a_1")
  var question2 = document.getElementById("fearless_trivia_q_2")
  var answer2 = document.getElementById("fearless_trivia_a_2")
  var question3 = document.getElementById("fearless_trivia_q_3")
  var answer3 = document.getElementById("fearless_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Speak Now page
function addTriviaSpeakNow() {
  var question1 = document.getElementById("sn_trivia_q_1")
  var answer1 = document.getElementById("sn_trivia_a_1")
  var question2 = document.getElementById("sn_trivia_q_2")
  var answer2 = document.getElementById("sn_trivia_a_2")
  var question3 = document.getElementById("sn_trivia_q_3")
  var answer3 = document.getElementById("sn_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Red page
function addTriviaRed() {
  var question1 = document.getElementById("red_trivia_q_1")
  var answer1 = document.getElementById("red_trivia_a_1")
  var question2 = document.getElementById("red_trivia_q_2")
  var answer2 = document.getElementById("red_trivia_a_2")
  var question3 = document.getElementById("red_trivia_q_3")
  var answer3 = document.getElementById("red_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for 1989 page
function addTrivia1989() {
  var question1 = document.getElementById("1989_trivia_q_1")
  var answer1 = document.getElementById("1989_trivia_a_1")
  var question2 = document.getElementById("1989_trivia_q_2")
  var answer2 = document.getElementById("1989_trivia_a_2")
  var question3 = document.getElementById("1989_trivia_q_3")
  var answer3 = document.getElementById("1989_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener fo debut page
function addTriviaRep() {
  var question1 = document.getElementById("rep_trivia_q_1")
  var answer1 = document.getElementById("rep_trivia_a_1")
  var question2 = document.getElementById("rep_trivia_q_2")
  var answer2 = document.getElementById("rep_trivia_a_2")
  var question3 = document.getElementById("rep_trivia_q_3")
  var answer3 = document.getElementById("rep_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Lover page
function addTriviaLover() {
  var question1 = document.getElementById("lover_trivia_q_1")
  var answer1 = document.getElementById("lover_trivia_a_1")
  var question2 = document.getElementById("lover_trivia_q_2")
  var answer2 = document.getElementById("lover_trivia_a_2")
  var question3 = document.getElementById("lover_trivia_q_3")
  var answer3 = document.getElementById("lover_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Folklore page
function addTriviaFolklore() {
  var question1 = document.getElementById("folklore_trivia_q_1")
  var answer1 = document.getElementById("folklore_trivia_a_1")
  var question2 = document.getElementById("folklore_trivia_q_2")
  var answer2 = document.getElementById("folklore_trivia_a_2")
  var question3 = document.getElementById("folklore_trivia_q_3")
  var answer3 = document.getElementById("folklore_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

// adds trivia event listener for Evermore page
function addTriviaEvermore() {
  var question1 = document.getElementById("evermore_trivia_q_1")
  var answer1 = document.getElementById("evermore_trivia_a_1")
  var question2 = document.getElementById("evermore_trivia_q_2")
  var answer2 = document.getElementById("evermore_trivia_a_2")
  var question3 = document.getElementById("evermore_trivia_q_3")
  var answer3 = document.getElementById("evermore_trivia_a_3")

  addTriviaHelper(question1, answer1)
  addTriviaHelper(question2, answer2)
  addTriviaHelper(question3, answer3)
}

