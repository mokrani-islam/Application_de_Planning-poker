function genererNombresAleatoires(nombreDeNombres) {
    let nombresAleatoires = [];
    var valeursPossibles = [1, 3, 5, 8, 13, 20, 40, 100];
    for (let i = 0; i < nombreDeNombres; i++) {
  
  var indexAleatoire = Math.floor(Math.random() * valeursPossibles.length);
  var nombreAleatoire = valeursPossibles[indexAleatoire];
      nombresAleatoires.push(nombreAleatoire);
    }
  
    return nombresAleatoires;
  }
  

  
  function calculerMoyenne(nombres) {
      if (nombres.length === 0) {
        return 0;
      }
    
      const somme = nombres.reduce((acc, nombre) => acc + nombre, 0);
      return somme / nombres.length;
    }
    
  

  
  function calculerMediane(nombres) {
      // Assurez-vous que le tableau est trié
      const nombresTriés = nombres.slice().sort((a, b) => a - b);
    
      const longueur = nombresTriés.length;
      
      // Si la longueur du tableau est paire, la médiane est la moyenne des deux valeurs du milieu
      if (longueur % 2 === 0) {
        const milieuGauche = longueur / 2 - 1;
        const milieuDroit = longueur / 2;
        return (nombresTriés[milieuGauche] + nombresTriés[milieuDroit]) / 2;
      } else {
        // Si la longueur du tableau est impaire, la médiane est la valeur du milieu
        const milieu = Math.floor(longueur / 2);
        return nombresTriés[milieu];
      }
    }
  
module.exports ={
    genererNombresAleatoires,
    calculerMoyenne,
    calculerMediane,


}
  
  
  
  