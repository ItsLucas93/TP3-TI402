/*function bienvenue(){
    alert("Hello world !");
    /*setTimeout(bienvenue,2000)
    setInterval(bienvenue,5000)
}
setInterval(bienvenue,5000)*/

function generer(){
    /*let monformulaire = document.forms.ajoutPWD;
    console.log(monformulaire.nombrecar.value);*/
    var newLine = document.createElement("tr");

    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");

    col1.textContent="8";
    col2.textContent="08/01/2003";
    col3.textContent="site";
    col4.textContent="netflix";
    col5.textContent="5(_ofsd)fgv";

    newLine.append(col1,col2,col3,col4,col5);

    var pwdTab = document.getElementById("montab");
    
    pwdTab.appendChild(newLine);
}