
// Pop-up als Reaktion auf Anmeldung

const submit = document.querySelector(".button");
const popup = document.querySelector(".popup");
const main = document.querySelector("#main");
const input = document.querySelector(".input");

function checkInput() {
  
    submit.addEventListener('click', () => {
      if(validator.isEmail(input.value)){
      if(input.value !== ""){
        popup.classList.add("show");
      setTimeout(() => {
        popup.classList.remove("show");
        
        }, 3000); 
      
        main.classList.add("hide");
        setTimeout(() => {
          main.classList.remove("hide");
          
          }, 3000); 
      } else {
        input.textContent = "E-Mail-erforderlich";
      }
      }
      }) 
  
};


/* 
formValidate({
  inpt: input.value,
  mail: 
}) */




checkInput();


// Feld überprüfen
// Klasse entfernen nach 3 Sekunden oder Klick
// Animation hinzufügen
/*
const formular = document.querySelector(".formaddbook")
formular.classList.toggle("show");
const showMenu = document.querySelector(".addbooks");
showMenu.classList.toggle("formshow");
//i.classlist.toggle('hidden-menu');
});  */

