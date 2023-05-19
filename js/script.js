console.log("Je suis la console !");

let bonjour = document.getElementById("b1");

bonjour.addEventListner("click",alerte);

function alerte(){
    alert("Hello world !");
}