let menuToggle = document.querySelector("#menu-toggle");
let activeElements = document.querySelectorAll(".active-element");
let toggledMenu = menuToggle.addEventListener("click", function(){

for(let activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})


let enleve = document.getElementById('chut');
// let enleveTwo = document.getElementById('pics');

let hide = function() {
     // enleve.hidden=true;
     enleve.style.display='none';
}

menuToggle.onclick = hide;