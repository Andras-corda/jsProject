function encoder() {
    var texte = document.getElementById("texte").value;
    var resultat = "";
    for (var i = 0; i < texte.length; i++) {
        resultat += texte.charCodeAt(i).toString(2) + " ";
    }
    document.getElementById("resultat").innerHTML = "Binaire : " + resultat;
}

function decoder() {
    var binaire = document.getElementById("binaire").value;
    var texte = "";
    var binaires = binaire.split(" ");
    for (var i = 0; i < binaires.length; i++) {
        if (binaires[i] !== "") {
            texte += String.fromCharCode(parseInt(binaires[i], 2));
        }
    }
    document.getElementById("resultat").innerHTML = "Texte : " + texte;
}