// Définition de la classe Jeux
function Jeux() {
    // Propriétés et méthodes de la classe Jeux
    this.nom = "Mon Jeu";
}

// Singleton pour la classe Jeux
var SingletonJeux = (function () {
    // Instance unique stockée ici
    var instance;

    // Fonction de création du singleton
    function init() {
        // Créez une instance de la classe Jeux ici
        var jeuxInstance = new Jeux();

        // Exposez des méthodes et des propriétés publiques en retournant un objet
        return {
            getInstance: function () {
                return jeuxInstance;
            },
            // Ajoutez d'autres méthodes et propriétés publiques si nécessaire
        };
    }

    // Point d'accès global au singleton
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

// Utilisation du singleton pour la classe Jeux
var jeuxSingleton = SingletonJeux.getInstance();
console.log(jeuxSingleton.nom); // Sortie : "Mon Jeu"

// Vous obtiendrez toujours la même instance, peu importe combien de fois vous appelez getInstance
var autreJeuxSingleton = SingletonJeux.getInstance();
console.log(autreJeuxSingleton === jeuxSingleton); // Sortie : true