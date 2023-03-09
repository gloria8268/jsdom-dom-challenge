const timerEl = document.querySelector('#counter')

const minusEl = document.getElementById("minus")
const plusEl = document.getElementById("plus")
const heartEl = document.getElementById("heart")
const pauseEl = document.getElementById("pause")

const likesEl = document.querySelector(".likes")

let inputEl = document.querySelector("#comment-input")
const submitEl = document.querySelector("#submit")
const commentEl = document.querySelector(".comments")

let i = 0;
let interval = ''
let timer = function () {
  return setInterval(function () {
    i++;
    timerEl.innerText = i
  }, 1000)
}

document.addEventListener('DOMContentLoaded', function () {
  return interval = timer()
})

minusEl.addEventListener('click', function () {
  timerEl.innerText = parseInt(timerEl.innerText) - 1;
})

plusEl.addEventListener('click', function () {
  timerEl.innerText = parseInt(timerEl.innerText) + 1;
})

heartEl.addEventListener("click", function () {
  console.log('test')
  let likeEl = document.createElement("li")
  let queen = parseInt(timerEl.innerText)
  likeEl.innerHTML = `${queen} has been liked <span>1</span> time `
  likesEl.appendChild(likeEl)
})

pauseEl.addEventListener("click", function () {
  const buttonsEl = document.getElementsByTagName("button")
  if (pauseEl.innerText === 'pause') {
    clearInterval(interval)
    pauseEl.innerText = ("resume")
    for (const button of buttonsEl) {
      button.disabled = true;
      this.disabled = false;
    }
  } else {
    pauseEl.innerText = 'pause'
    for (const button of buttonsEl) {
      button.disabled = false;
    }
    i = 0
    interval = timer()
  }
})

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  let reviewEl = document.createElement("p")
  reviewEl.innerText = inputEl.value
  commentEl.appendChild(reviewEl);
  inputEl.innerText=' '
})