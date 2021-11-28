function onLoadDebut() {
  addTriviaMouseoverDebut()

}

function onLoadFearless() {
  addTriviaMouseoverFearless()

}

function onLoadSpeakNow() {
  addTriviaMouseoverSpeakNow()
}

function onLoadRed() {
  addTriviaMouseoverRed()
}

function onLoad1989() {

}

function onLoadRep() {

}

function onLoadLover() {

}

function onLoadFolklore() {
  addTriviaMouseoverFolklore()
}

function onLoadEvermore() {

}


/* ****************************** Lightbox (Source: https://www.w3schools.com/howto/howto_js_lightbox.asp) ****************************** */

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


function addTriviaMouseoverHelper(question, answer) {
    question.addEventListener('click', evt => {
    answer.classList.toggle('show')
  })
}

function addTriviaMouseoverDebut() {
  var question1 = document.getElementById("debut_trivia_q_1")
  var answer1 = document.getElementById("debut_trivia_a_1")
  var question2 = document.getElementById("debut_trivia_q_2")
  var answer2 = document.getElementById("debut_trivia_a_2")
  var question3 = document.getElementById("debut_trivia_q_3")
  var answer3 = document.getElementById("debut_trivia_a_3")

  addTriviaMouseoverHelper(question1, answer1)
  addTriviaMouseoverHelper(question2, answer2)
  addTriviaMouseoverHelper(question3, answer3)
}

function addTriviaMouseoverFearless() {
  var question1 = document.getElementById("fearless_trivia_q_1")
  var answer1 = document.getElementById("fearless_trivia_a_1")
  var question2 = document.getElementById("fearless_trivia_q_2")
  var answer2 = document.getElementById("fearless_trivia_a_2")
  var question3 = document.getElementById("fearless_trivia_q_3")
  var answer3 = document.getElementById("fearless_trivia_a_3")

  addTriviaMouseoverHelper(question1, answer1)
  addTriviaMouseoverHelper(question2, answer2)
  addTriviaMouseoverHelper(question3, answer3)
}

function addTriviaMouseoverSpeakNow() {
  var question1 = document.getElementById("sn_trivia_q_1")
  var answer1 = document.getElementById("sn_trivia_a_1")
  var question2 = document.getElementById("sn_trivia_q_2")
  var answer2 = document.getElementById("sn_trivia_a_2")
  var question3 = document.getElementById("sn_trivia_q_3")
  var answer3 = document.getElementById("sn_trivia_a_3")

  addTriviaMouseoverHelper(question1, answer1)
  addTriviaMouseoverHelper(question2, answer2)
  addTriviaMouseoverHelper(question3, answer3)
}

function addTriviaMouseoverRed() {
  var question1 = document.getElementById("red_trivia_q_1")
  var answer1 = document.getElementById("red_trivia_a_1")
  var question2 = document.getElementById("red_trivia_q_2")
  var answer2 = document.getElementById("red_trivia_a_2")
  var question3 = document.getElementById("red_trivia_q_3")
  var answer3 = document.getElementById("red_trivia_a_3")

  addTriviaMouseoverHelper(question1, answer1)
  addTriviaMouseoverHelper(question2, answer2)
  addTriviaMouseoverHelper(question3, answer3)
}

function addTriviaMouseoverFolklore() {
  var question1 = document.getElementById("folklore_trivia_q_1")
  var answer1 = document.getElementById("folklore_trivia_a_1")
  var question2 = document.getElementById("folklore_trivia_q_2")
  var answer2 = document.getElementById("folklore_trivia_a_2")
  var question3 = document.getElementById("folklore_trivia_q_3")
  var answer3 = document.getElementById("folklore_trivia_a_3")

  addTriviaMouseoverHelper(question1, answer1)
  addTriviaMouseoverHelper(question2, answer2)
  addTriviaMouseoverHelper(question3, answer3)


}



