
/** 
*la classe Partie
*@class
*@description constructeur de la classe Partie
*@param {string} nomPartie nom du backlog 
*@param {string} nomTache  nom du sprint backlog
*@param {string} modeJeu   le mode du jeu de la partie 
*@param {number} nombreJoeur nombre de joueurs dans la partie




*/
class Partie {
   /** 
*la classe Partie
*@method constructeur
*@description constructeur de la classe Partie
*@param {string} nomPartie nom du backlog 
*@param {string} nomTache  nom du sprint backlog
*@param {string} modeJeu   le mode du jeu de la partie 
*@param {number} nombreJoeur nombre de joueurs dans la partie

*/
    constructor(nomPartie, nomTache, modeJeu, nombreJoeur) {
      this.nomPartie = nomPartie;
      this.nomTache = nomTache;
      this.modeJeu = modeJeu;
      this.nombreJoeur= nombreJoeur;
    }


  
    // Méthode pour afficher les détails de la partie //
    afficherDetails() {
      console.log(`Partie : ${this.nomPartie}`);
      console.log(`Tâche : ${this.nomTache}`);
      console.log(`Mode de jeu : ${this.modeJeu}`);
      console.log(`Mode de jeu : ${this.nombreJoueur}`);
    }
  }
  
  // Exemple d'utilisation de la classe
  //let maPartie = new Partie("Partie 1", "Tâche 1", "Mode 1",4);
  //maPartie.afficherDetails();

 
// fonction qui prermet de récupérer les valeur saisie en dans le formulaire pour la configuration d'une partie initial//
// des que on récupere le jeu la partie se lance avec une configuration initial //
// on serra rediriger vers le table de poker où on pourra choisir une carte //

/** 
*la classe Partie
*@method 
*@description constructeur de la classe Partie
*@param {string} nomPartie nom du backlog 
*@param {string} nomTache  nom du sprint backlog
*@param {string} modeJeu   le mode du jeu de la partie 
*@param {number} nombreJoeur nombre de joueurs dans la partie

*/
function submitForm() {
    // Récupérer les valeurs des champs
    var partie = document.getElementById('nomP').value;
    var tache = document.getElementById('nomT').value;
    var NombreJoueur = document.getElementById('nombreJ').value;
    var Mode= document.getElementById('pet-select').value;

  
  
    let maPartie = new Partie( partie, tache, NombreJoueur,Mode);
    localStorage.setItem('maPartie', JSON.stringify(maPartie));
    maPartie.afficherDetails();
   // Cette ligne permet de rediriger le navigateur où pas selon les champs saisie
   // c'est à dire c'est un champ manque parmis les quatres il ne serra pas rediriger !c
   if( maPartie.nomPartie!== '' && maPartie.nomTache!== '' && maPartie.modeJeu!== '' && maPartie.nombreJoeur!== '' ) {window.location.href = '../View/poker.html';}
}