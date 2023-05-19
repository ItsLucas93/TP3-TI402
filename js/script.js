/*function bienvenue(){
    alert("Hello world !");
    /*setTimeout(bienvenue,2000)
    setInterval(bienvenue,5000)
}
setInterval(bienvenue,5000)*/

function generer(){
    /*let monformulaire = document.forms.ajoutPWD;
    console.log(monformulaire.nombrecar.value);*/
    let newLine = document.createElement("tr");
    let col1 = document.createElement("td").textContent="AZERTY";
    let col2 = document.createElement("td").textContent="QSDJHJKFG";
    let col3 = document.createElement("td").textContent="65S4DFG";
    let col4 = document.createElement("td").textContent="2354KJRHH";
    let col5 = document.createElement("td").textContent="5(_ofsd)fgv";
    newLine.append(col1,col2,col3);
    console.log(newLine);
}