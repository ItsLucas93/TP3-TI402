/*function bienvenue(){
    alert("Hello world !");
    /*setTimeout(bienvenue,2000)
    setInterval(bienvenue,5000)
}
setInterval(bienvenue,5000)*/

var minuscule = "abcdefghijklmnopqrstuvwxyz";
var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chiffre = "0123456789";
var carspecial = "%!&*^()#$:";

function generer(){
    var monformulaire = document.forms.ajoutPWD;
    var password = "";
    var listecar= "";

    if (monformulaire.elements["minuscule"].checked){
        listecar+=minuscule;
    }
    if (monformulaire.elements["majuscule"].checked){
        listecar+=majuscule;
    }
    if (monformulaire.elements["chiffre"].checked){
        listecar+=chiffre;
    }
    if (monformulaire.elements["symbole"].checked){
        listecar+=symbole;
    }

    for (var i=1; i <= monformulaire.elements["nombrecar"].value;i++){
        var randomNumber = Math.floor(Math.random()*listecar.length);
        password+=listecar.substring(randomNumber,randomNumber+1);
    }

    /*console.log(monformulaire.nombrecar.value);*/

    var newLine = document.createElement("tr");

    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    //var col5 = document.createElement("td");

    col1.textContent="8";
    col2.textContent="08/01/2003";
    col3.textContent="site";
    col4.textContent="netflix";
    //col5.textContent="5(_ofsd)fgv";

    newLine.append(col1,col2,col3,col4,password);

    var pwdTab = document.getElementById("montab");

    pwdTab.appendChild(newLine);


}

