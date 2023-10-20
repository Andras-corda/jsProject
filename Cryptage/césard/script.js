document.addEventListener("DOMContentLoaded", function () {
    const texteInput = document.getElementById("texte");
    const decalageInput = document.getElementById("decalage");
    const crypterBtn = document.getElementById("crypter");
    const decrypterBtn = document.getElementById("decrypter");
    const resultatTextarea = document.getElementById("resultat");

    function chiffrementCesar(texte, decalage) {
        let texteChiffre = "";
        for (let i = 0; i < texte.length; i++) {
            const charCode = texte.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                texteChiffre += String.fromCharCode(((charCode - 65 + decalage) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                texteChiffre += String.fromCharCode(((charCode - 97 + decalage) % 26) + 97);
            } else {
                texteChiffre += texte.charAt(i);
            }
        }
        return texteChiffre;
    }

    crypterBtn.addEventListener("click", function () {
        const texte = texteInput.value;
        const decalage = parseInt(decalageInput.value);
        const texteChiffre = chiffrementCesar(texte, decalage);
        resultatTextarea.value = texteChiffre;
    });

    decrypterBtn.addEventListener("click", function () {
        const texte = texteInput.value;
        const decalage = parseInt(decalageInput.value);
        const texteDechiffre = chiffrementCesar(texte, 26 - decalage);
        resultatTextarea.value = texteDechiffre;
    });
});
