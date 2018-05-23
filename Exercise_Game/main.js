let Red = document.querySelector('#clickOnRed')
let Yellow = document.querySelector("#clickOnYellow")
let Cyan = document.querySelector('#clickOnCyan')
let Pink = document.querySelector('#clickOnPink')
let Blue = document.querySelector('#clickOnBlue')
let GreenYellow = document.querySelector ('#clickOnGreenYellow')
let Purple = document.querySelector('#clickOnPurple')
let Grey = document.querySelector('#clickOnGrey')
let firstChoice_SR = document.querySelector('#clickOnFirst')
let secondChoice_SR = document.querySelector('#clickOnSecond')
let thirdChoice_SR = document.querySelector('#clickOnThird')
let forthChoice_SR = document.querySelector ('#clickOnForth')
let fifthChoice_TR = document.querySelector('#clickOnFifth')
let sixthChoice_TR = document.querySelector('#clickOnSixth')
let clickOnLast = document.querySelector('#clickOnLast')
Red.addEventListener("click", function(event){
  firstChoice_SR.style.backgroundColor = 'red'
})
Yellow.addEventListener("click", function(event){
  firstChoice_SR.style.backgroundColor = 'yellow'
})
Cyan.addEventListener('click', function(event){
  secondChoice_SR.style.backgroundColor = 'cyan'
})
Pink.addEventListener('click', function(event){
  secondChoice_SR.style.backgroundColor = 'pink'
})
Blue.addEventListener('click', function(event){
  thirdChoice_SR.style.backgroundColor = 'blue'
})
GreenYellow.addEventListener('click', function(event){
  thirdChoice_SR.style.backgroundColor = 'greenyellow'
})
Purple.addEventListener('click', function(event){
  forthChoice_SR.style.backgroundColor = 'purple'
})
Grey.addEventListener('click', function(event){
  forthChoice_SR.style.backgroundColor = 'grey'
})
firstChoice_SR.addEventListener('click', function(event){
  fifthChoice_TR.style.backgroundColor = firstChoice_SR.style.backgroundColor
})
secondChoice_SR.addEventListener('click', function(event){
  fifthChoice_TR.style.backgroundColor = secondChoice_SR.style.backgroundColor
})
thirdChoice_SR.addEventListener('click', function(event){
  sixthChoice_TR.style.backgroundColor = thirdChoice_SR.style.backgroundColor
})
forthChoice_SR.addEventListener('click', function(event){
  sixthChoice_TR.style.backgroundColor = forthChoice_SR.style.backgroundColor
})
fifthChoice_TR.addEventListener('click', function(event){
  clickOnLast.style.backgroundColor = fifthChoice_TR.style.backgroundColor
})
sixthChoice_TR.addEventListener('click', function(event){
  clickOnLast.style.backgroundColor = sixthChoice_TR.style.backgroundColor
})




