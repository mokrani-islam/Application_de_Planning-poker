import  { calculerMoyenne } from './mode.js';
import  { genererNombresAleatoires } from './mode.js';
import {calculerMediane} from './mode.js';
import {valeurStricte} from './mode.js';
import {MajoriteAbsolue} from './mode.js';



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
if  ( altValue != "intrro" && altValue != "Carte_cafe")  {var entier = parseInt(altValue);}


var monParagrapheElement = document.getElementById("islam");

        // Modification du contenu de l'élément p avec la valeur de la variable
    monParagrapheElement.textContent = entier;

if(altValue=="intrro"){alert('besoin de temps de refléxion')}
if(altValue=="Carte_cafe"){alert('besoin de faire une pause')} 
if(maPartie.nombreJoeur=='MA' && altValue != "intrro" && altValue != "Carte_cafe" ){

    const mg = genererNombresAleatoires(maPartie.modeJeu); 
    const majoriAB = MajoriteAbsolue(genererNombresAleatoires(maPartie.modeJeu)) ;
    if( majoriAB == true && entier == mg[0] ){
        alert("Bravo ! Votre carte est : " + entier +" "+"et la Majorité absolue est : "+mg[0] );

    } else 
    { alert("Malheureusement Votre carte est : " + entier +"");}
}

if(maPartie.nombreJoeur=='mediane' && ( altValue != "intrro" && altValue != "Carte_cafe") ){

    const resultatMediane = calculerMediane(genererNombresAleatoires(maPartie.modeJeu)) ;

    if( entier == resultatMediane ){


       // Swal.fire("SweetAlert2 is working!");
    alert("Bravo ! Votre carte est : " + entier +" "+"et la Médiane est : "+resultatMediane  );
   
    }
    
    else{
      //  Swal.fire("SweetAlert2 is working!");
   alert("Malheureusement Votre carte est : " + carte.alt +" et la Médiane est : "+ resultatMediane );
    
    }


}


if(maPartie.nombreJoeur=='stricte' && ( altValue != "intrro" && altValue != "Carte_cafe") ){

    const resultatstrict = valeurStricte(genererNombresAleatoires(maPartie.modeJeu)) ;

    if( entier == resultatstrict ){

    alert("Bravo ! Votre carte est : " + entier +" "+"et la valeur stricte : "+resultatstrict  );
   
    }
    
    else{
        
    alert("Malheureusement Votre carte est : " + carte.alt +" et la valeur stricte est : "+ resultatstrict );
    
    }


}

if(maPartie.nombreJoeur=='MR' && ( altValue != "intrro" && altValue != "Carte_cafe")){

    if(nombreAleatoire == entier){
    alert("Bravo ! Votre carte est :"+ carte.alt +""+ nombreAleatoire);

}else{alert("Malheureusement Votre carte est : "+ carte.alt +""+ nombreAleatoire);}


}
if(maPartie.nombreJoeur=='moyenne' && ( altValue != "intrro" && altValue != "Carte_cafe") ){
    const Moy=parseInt(calculerMoyenne(genererNombresAleatoires(maPartie.modeJeu))) 
    if(Moy== entier){
    alert("Bravo ! Votre carte est : " + carte.alt +" la moyenne est  "+ Moy);

}else{alert("Malheureusement Votre carte est : " + carte.alt +" la moyenne est "+ Moy);}


}

 
 
  });
});