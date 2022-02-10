


const submit = document.querySelector(".button");
const popup = document.querySelector(".popup");
const main = document.querySelector("#main");
const input = document.querySelector(".input");

// Check E-Mail-Input
function checkInput() {
  
    submit.addEventListener('click', () => {
      if(validator.isEmail(input.value)){
      if(input.value !== ""){
        popup.classList.add("show"); // Pop-up als Reaktion auf Anmeldung
      setTimeout(() => {
        popup.classList.remove("show");
        
        }, 3000); 
      
        main.classList.add("hide");
        setTimeout(() => {
          main.classList.remove("hide");
          
          }, 3000); 
      } 
      }
      }) 
  
};

checkInput();
