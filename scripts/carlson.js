let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let texte = document.getElementById('hiddenText');
let bio = document.getElementById('bio');

let milieu = document.querySelector('.carlsonMilieu');
let imageTwo = document.querySelector('.imageMouse');
let allImages = document.getElementById('carlsonPage');



// VIEW / CLOSE BUTTON
let open = function() {
  bio.style.display = 'none';
  texte.style.display = 'block';
  close.style.display = 'block';
  view.style.display = 'none';
};

let hide = function() {
  texte.style.display = 'none';
  close.style.display = 'none';
  view.style.display = 'block';
  bio.style.display = 'block';
};

view.onclick = open;
close.onclick = hide;



// IMAGE 1
let changeImg = function() {
  milieu.style.display = 'none';
  imageTwo.style.display = 'block';
}

let backImg = function() {
  milieu.style.display = 'block';
  imageTwo.style.display = 'none';
}

milieu.addEventListener('mouseover', changeImg);
allImages.addEventListener('mouseout', backImg);