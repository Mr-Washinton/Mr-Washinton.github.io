// Sélection des éléments
var body = document.getElementById("body");
var videoSource = document.getElementById("video-source");
var video = document.getElementById("background-video");
var nightButton = document.querySelector("#night-button");

// Fonction pour changer la vidéo et le mode jour/nuit
function jour() {
    // Basculer la classe "night" sur le body
    body.classList.toggle("night");

    // Vérifier si le mode nuit est activé et changer la source vidéo
    if (body.classList.contains("night")) {
        videoSource.src = "./fondjour.mp4";  // Mode jour (fond jour)
    } else {
        videoSource.src = "./fondnuit.mp4";  // Mode nuit (fond nuit)
    }
    // Recharger la vidéo avec la nouvelle source
    video.load(); 
}

// Fonction pour changer l'icône du bouton en fonction du mode
const setButtonText = (isNightMode) => {
    nightButton.innerHTML = isNightMode ?
        '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';  // Soleil pour le jour, Lune pour la nuit
};

// Initialiser le bouton avec l'icône de la lune (mode jour au départ)
setButtonText(false);

// Ajouter l'événement sur le bouton pour basculer entre les modes
nightButton.addEventListener("click", () => {
    // Basculer la classe "active" pour activer le mode nuit sur le body
    body.classList.toggle("active");

    // Basculer l'apparence du bouton
    nightButton.classList.toggle("active-button");

    // Mettre à jour l'icône du bouton
    setButtonText(body.classList.contains("active"));

    // Appeler la fonction pour changer la vidéo
    jour();
});
