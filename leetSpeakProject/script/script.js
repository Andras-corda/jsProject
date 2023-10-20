// Fonction pour convertir le texte en leet speak
function textToLeetSpeak(text, level) {
    // Définir les substitutions de base et leurs équivalents
    let substitutions = {
      'a': '4',  // 'a' ou 'A' sont remplacés par '4'
      'A': '4',
      'e': '3',  // 'e' ou 'E' sont remplacés par '3'
      'E': '3',
      'i': '1',  // 'i' ou 'I' sont remplacés par '1'
      'I': '1',
      's': '5',  // 's' ou 'S' sont remplacés par '5'
      'S': '5',
      'o': '0',  // 'o' ou 'O' sont remplacés par '0'
      'O': '0',
    };
  
    // Si le niveau est 2, ajouter des substitutions supplémentaires
    if (level >= 2) {
      substitutions['c'] = '(';  // 'c' ou 'C' sont remplacés par '('
      substitutions['C'] = '(';
      substitutions['t'] = '7';  // 't' ou 'T' sont remplacés par '7'
      substitutions['T'] = '7';
      substitutions['h'] = '#';  // 'h' ou 'H' sont remplacés par '#'
      substitutions['H'] = '#';
    }

    // Si le niveau est 2, ajouter des substitutions supplémentaires
    if (level >= 3) {
        substitutions['b'] = 'ß';  // 'b' ou 'B' sont remplacés par 'ß'
        substitutions['B'] = 'ß';
        substitutions['d'] = '|>';  // 'd' ou 'D' sont remplacés par '|>'
        substitutions['D'] = '|>';
        substitutions['f'] = '/=';  // 'f' ou 'F' sont remplacés par '/='
        substitutions['F'] = '/=';
        substitutions['g'] = '6';  // 'g' ou 'G' sont remplacés par '6'
        substitutions['G'] = '6';
        substitutions['j'] = '¿';  // 'j' ou 'J' sont remplacés par '¿'
        substitutions['J'] = '¿';
        substitutions['k'] = '|<';  // 'k' ou 'K' sont remplacés par '|<'
        substitutions['K'] = '|<';
        substitutions['m'] = '|V|';  // 'm' ou 'M' sont remplacés par '|V|'
        substitutions['M'] = '|V|';
        substitutions['n'] = '|V';  // 'n' ou 'N' sont remplacés par '|V'
        substitutions['N'] = '|V';
        substitutions['p'] = '|º';  // 'p' ou 'P' sont remplacés par '|º'
        substitutions['P'] = '|º';
        substitutions['l'] = '£';  // 'l' ou 'L' sont remplacés par '£'
        substitutions['L'] = '£';
        substitutions['p'] = '¶';  // 'p' ou 'P' sont remplacés par '¶'
        substitutions['P'] = '¶';
        substitutions['r'] = '2';  // 'r' ou 'R' sont remplacés par '2'
        substitutions['R'] = '2';
        substitutions['u'] = 'µ';  // 'u' ou 'U' sont remplacés par 'µ'
        substitutions['U'] = 'µ';
        substitutions['v'] = '\/';  // 'v' ou 'V' sont remplacés par '\/'
        substitutions['V'] = '\/';
        substitutions['w'] = 'vv';  // 'v' ou 'V' sont remplacés par 'vv'
        substitutions['W'] = 'vv';
        substitutions['x'] = '}{';  // 'x' ou 'X' sont remplacés par '}{'
        substitutions['X'] = '}{';
        substitutions['y'] = '¥';  // 'y' ou 'Y' sont remplacés par '¥'
        substitutions['Y'] = '¥';
        substitutions['z'] = '≥';  // 'z' ou 'Z' sont remplacés par '≥'
        substitutions['Z'] = '≥';
      }
  
    // Initialiser une chaîne vide pour le texte converti
    let leetText = '';
  
    // Parcourir chaque caractère du texte d'entrée
    for (let char of text) {
      // Si le caractère a une substitution, l'ajouter, sinon conserver le caractère tel quel
      leetText += substitutions[char] || char;
    }
  
    // Convertir tout le texte en majuscules
    leetText = leetText.toUpperCase();
  
    // Retourner le texte converti
    return leetText;
  }
  
  // Sélectionner le bouton "Convertir" et le résultat
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");
  
  // Ajouter un écouteur d'événement pour le clic sur le bouton "Convertir"
  convertButton.addEventListener("click", function() {
    // Obtenir le niveau sélectionné par l'utilisateur et le texte d'entrée
    const level = parseInt(document.getElementById("level").value);
    const inputText = document.getElementById("inputText").value;
    
    // Vérifier que le niveau est valide (1 ou 2)
    if (level === 1 || level === 2 || level === 3) {
      // Appeler la fonction pour convertir le texte et afficher le résultat
      const leetText = textToLeetSpeak(inputText, level);
      result.textContent = leetText;
      result.style.display = "block"; // Afficher la réponse
    } else {
      // Afficher une alerte en cas de niveau invalide
      alert("Niveau de leet speak invalide. Veuillez choisir 1, 2 ou 3.");
    }
  });
  
// Récupération des éléments 
const copyButton = document.getElementById("copyButton");

// Ajout d'un gestionnaire d'événement pour le clic sur le bouton de copie
copyButton.addEventListener("click", function() {
    const textToCopy = result.textContent;

    // Utilisation de la Clipboard API pour copier le texte dans le presse-papiers
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Succès : affichage d'une alerte indiquant que le texte a été copié avec succès
            alert("Le texte a été copié dans le presse-papiers : " + textToCopy);
        })
        .catch(err => {
            // Gestion des erreurs en cas d'échec de la copie
            console.error("Erreur lors de la copie dans le presse-papiers : ", err);
        });
});