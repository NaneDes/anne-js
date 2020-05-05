let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let texte = document.getElementById('hiddenText');
let bio = document.getElementById('bio');

let giselleImg = document.querySelector('.giselle');
let rougeImg = document.querySelector('.rouge');
let whiteImg = document.querySelector('.white');
let blueImg = document.querySelector('.blue');

let etoile2 = document.querySelector('.khanStar2');
let etoile1 = document.querySelector('.khanStar1');

let khanBas = document.querySelector('.khanBas');



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



// IMAGE 1 WHITE/BLUE
let changeImg = function() {
  whiteImg.style.display = 'none';
  blueImg.style.display = 'block';
}

let backImg = function() {
  whiteImg.style.display = 'block';
  blueImg.style.display = 'none';
}

whiteImg.addEventListener('mouseover', changeImg);
whiteImg.addEventListener('mouseout', backImg);


// IMAGE 2 GISELLE
let extendImg2 = function() {
  giselleImg.style.height = '100vh';
  giselleImg.style.width = '100vw';
  rougeImg.hidden = true;
  whiteImg.hidden = true;
  khanTextes.style.backgroundColor = '#121212';
  khanPage.style.backgroundColor = '#121212';
  view.style.color = '#121212';
  etoile2.hidden = true;
}

let reduceImg2 = function() {
  giselleImg.style.height = '';
  giselleImg.style.width = '';
  rougeImg.hidden = false;
  whiteImg.hidden = false;
  khanTextes.style.backgroundColor = '';
  khanPage.style.backgroundColor = '';
  view.style.color = '';
  etoile2.hidden = false;
}

giselleImg.addEventListener('mouseover', extendImg2);
giselleImg.addEventListener('mouseout', reduceImg2);
giselleImg.addEventListener('click', reduceImg2);



// KHAN ROUGE
let changeRouge = function() {
  khanBas.style.backgroundColor = '#B30000';
}

let removeRouge = function() {
  khanBas.style.backgroundColor = '';
}

khanBas.addEventListener('mouseover', changeRouge);
khanBas.addEventListener('mouseout', removeRouge);