function convertLongueur() {
    const longueur = parseFloat(document.getElementById('longueur').value);

    if (isNaN(longueur)) {
        alert('Veuillez entrer une valeur numérique valide.');
        return;
    }

    const knakiLongueur = longueur / 14;

    showModal(`Longueur en Knackis : ${knakiLongueur.toFixed(2)} Knacki`);
}

function convertLargeur() {
    const largeur = parseFloat(document.getElementById('largeur').value);

    if (isNaN(largeur)) {
        alert('Veuillez entrer une valeur numérique valide.');
        return;
    }

    const knakiLargeur = largeur / 14;

    showModal(`Largeur en Knackis : ${knakiLargeur.toFixed(2)} Knacki`);
}

function convertPoids() {
    const poids = parseFloat(document.getElementById('poids').value);
    const unitePoids = document.getElementById('unitePoids').value;

    if (isNaN(poids)) {
        alert('Veuillez entrer une valeur numérique valide.');
        return;
    }

    let poidsEnGr;
    if (unitePoids === 'kg') {
        poidsEnGr = poids * 1000;
    } else if (unitePoids === 'tonnes') {
        poidsEnGr = poids * 1000000;
    } else {
        poidsEnGr = poids;
    }

    const knakiPoids = poidsEnGr / 35;

    showModal(`Poids en Knackis : ${knakiPoids.toFixed(2)} Knacki`);
}

function showModal(content) {
    const modal = document.getElementById('resultModal');
    const modalContent = modal.querySelector('.modal-content');
    const resultatDiv = document.getElementById('resultat');

    resultatDiv.innerHTML = content;
    modal.style.display = 'block';
}

function hideModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

function convertArea() {
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);

    if (isNaN(longueur) || isNaN(largeur)) {
        alert('Veuillez entrer des valeurs numériques valides pour la longueur et la largeur.');
        return;
    }

    const areaCm2 = longueur * largeur;

    const areaM2 = areaCm2 / 10000;

    showModal(`Aire en m² : ${areaM2.toFixed(2)} m²`);
}

function convertVolume() {
    const longueur = parseFloat(document.getElementById('longueur').value);
    const largeur = parseFloat(document.getElementById('largeur').value);
    const hauteur = parseFloat(document.getElementById('hauteur').value);

    if (isNaN(longueur) || isNaN(largeur) || isNaN(hauteur)) {
        alert('Veuillez entrer des valeurs numériques valides pour la longueur, la largeur et la hauteur.');
        return;
    }

    const volumeCm3 = longueur * largeur * hauteur;

    const volumeM3 = volumeCm3 / 1000000;

    showModal(`Volume en m³ : ${volumeM3.toFixed(4)} m³`);
}

function calculateFallTime() {
    const hauteur = parseFloat(document.getElementById('hauteur').value);
    const planete = document.getElementById('planete').value;

    if (isNaN(hauteur)) {
        alert('Veuillez entrer une valeur numérique valide pour la hauteur.');
        return;
    }

    const graviteTerre = 9.81;
    const graviteLune = 1.625;
    const graviteMars = 3.72076; 
    const graviteVenus = 8.87;   
    const graviteJupiter = 24.79; 

    let gravite = graviteTerre;

    switch (planete) {
        case 'terre':
            gravite = graviteTerre;
            break;
        case 'lune':
            gravite = graviteLune;
            break;
        case 'mars':
            gravite = graviteMars;
            break;
        case 'venus':
            gravite = graviteVenus;
            break;
        case 'jupiter':
            gravite = graviteJupiter;
            break;
        default:
            gravite = graviteTerre;
    }

    const tempsChute = Math.sqrt((2 * hauteur) / gravite);

    showModal(`Temps de chute sur ${planete} : ${tempsChute.toFixed(2)} secondes`);
}
