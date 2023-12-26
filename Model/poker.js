import  { calculerMoyenne } from './mode.js';
import  { genererNombresAleatoires } from './mode.js';
import {calculerMediane} from './mode.js';
import {valeurStricte} from './mode.js';



var maPartie = localStorage.getItem('maPartie');
if (maPartie) {
    var maPartie = JSON.parse(maPartie);
    console.log("Nomdepartie:", maPartie.nomPartie);
    console.log("nomTache:", maPartie.nomTache);
    console.log("ModeJeu:", maPartie.nombreJoeur);
    console.log("NombrePartie:", maPartie.modeJeu);
} else {
    console.log("Aucune donnée utilisateur trouvée.");
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez toutes les cartes
    const cartes = document.querySelectorAll('.small-image');

    // Ajoutez un gestionnaire d'événements pour chaque carte
    cartes.forEach(carte => {
        carte.addEventListener('mouseenter', function () {
            // Ajoutez une classe ou effectuez des ajustements spécifiques à la survol
            // Vous pouvez également utiliser des styles directement ici au lieu d'une classe
            carte.classList.add('survol');
        });

        carte.addEventListener('mouseleave', function () {
            // Retirez la classe ou effectuez des ajustements lorsqu'on quitte le survol
            carte.classList.remove('survol');
        });
    });
});

var elementDonnees = document.getElementById('sprint');

elementDonnees.innerHTML = ' Tache : '+ maPartie.nomTache;


var cartes = document.querySelectorAll('.small-image');


cartes.forEach(function(carte) {
   
carte.addEventListener('click', function() {

var altValue = carte.alt;
var entier = parseInt(altValue);

var monParagrapheElement = document.getElementById("islam");

        // Modification du contenu de l'élément p avec la valeur de la variable
    monParagrapheElement.textContent = entier;



if(maPartie.nombreJoeur=='MA'){

    if(nombreAleatoire == entier){
    alert("vous avez réussis: " + carte.alt +""+ nombreAleatoire);

}else{alert("Maleureusement Votre carte est : " + carte.alt +""+ nombreAleatoire);}


}


if(maPartie.nombreJoeur=='mediane'){

    const resultatMediane = calculerMediane(genererNombresAleatoires(maPartie.modeJeu)) ;

    if( entier == resultatMediane ){

    alert("Bravo ! Votre carte est : " + entier +" "+"et la Médiane est : "+resultatMediane  );
   
    }
    
    else{
        
    alert("Maleureusement Votre carte est : " + carte.alt +" et la Médiane est : "+ resultatMediane );
    
    }


}


if(maPartie.nombreJoeur=='stricte'){

    const resultatstrict = valeurStricte(genererNombresAleatoires(maPartie.modeJeu)) ;

    if( entier == resultatstrict ){

    alert("Bravo ! Votre carte est : " + entier +" "+"et la valeur stricte : "+resultatstrict  );
   
    }
    
    else{
        
    alert("Maleureusement Votre carte est : " + carte.alt +" et la valeur stricte est : "+ resultatstrict );
    
    }


}

if(maPartie.nombreJoeur=='MR'){

    if(nombreAleatoire == entier){
    alert("Bravo ! Votre carte est :"+ carte.alt +""+ nombreAleatoire);

}else{alert("Maleureusement Votre carte est : "+ carte.alt +""+ nombreAleatoire);}


}
if(maPartie.nombreJoeur=='moyenne'){
    const Moy=parseInt(calculerMoyenne(genererNombresAleatoires(maPartie.modeJeu))) 
    if(Moy== entier){
    alert("Bravo ! Votre carte est : " + carte.alt +" la moyenne est  "+ Moy);

}else{alert("Maleureusement Votre carte est : " + carte.alt +" la moyenne est "+ Moy);}


}

 var resultat =document.getElementById('resultat');
 resultat.innerHTML = nombreAleatoire; 
 
  });
});