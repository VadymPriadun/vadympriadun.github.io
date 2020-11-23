var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imm.jpg') {
      myImage.setAttribute ('src','images/kk.jpg');
    } else {
      myImage.setAttribute ('src','images/imm.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Запишіть своє імя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привіт, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привіт, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}