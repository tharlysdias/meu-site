var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imagem-perfil.png') {
        myImage.setAttribute ('src','images/imagem-perfil2.png');
    } else {
        myImage.setAttribute ('src','images/imagem-perfil.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Por favor, digite seu nome!');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Aprender é sensacional, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Aprender é sensacional, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}