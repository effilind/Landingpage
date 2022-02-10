// Pop-up als Reaktion auf Anmeldung

const submit = document.querySelector(".button");
submit.addEventListener('click', () => {
  const popup = document.querySelector(".popup");
  popup.classList.toggle("show");

})

// Set time to close pop-up

setTimeout(() => {
popup.classList.remove("show");

}, 2000);



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

