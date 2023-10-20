function inverserPhrase() {
    var phrase = document.getElementById('phraseInput').value;
    
    if (phrase.trim() === "") {
        alert("Le champ de texte est vide. Veuillez entrer une phrase.");
    } else {
        var phraseInverse = phrase.split('').reverse().join('');
        document.getElementById('resultat').textContent = phraseInverse;
    }
}