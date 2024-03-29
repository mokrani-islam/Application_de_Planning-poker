const {calculerMoyenne}= require ('./Model/Test.js');
const {calculerMediane}= require ('./Model/Test.js');
const {valeurStricte}= require ('./Model/Test.js');

describe(

'test sur la fonction selon la moyenne / mediane / mode stricte  ',()=>{
    /* tester quand on clique sur aucune carte et il n'y a aucun joueur  
    *
    */
    test('test sur la moyenne aucune valeur',()=>{
        expect(calculerMoyenne([])).toBe(0)

    })

    test('la moyenne de 10 et 20 est 15',()=>{
        expect(calculerMoyenne([10,20])).toBe(15)

    })
    /* tester  le resultat de la moyenne sur un nombre pair de joueur 
    *
    */
    test('la moyenne de 8 et 0 est  : 4',()=>{
        expect(calculerMoyenne([0,8])).toBe(4)

    })

     /* tester  le resultat de la moyenne sur un nombre pair de joueur 
    *
    */
     test('la moyenne de 8 et 20 et 40 est  : 68/3',()=>{
        expect(calculerMoyenne([20,8,40])).toBe(68/3)

    })
    
    /* tester  le resultat de la medianne sur un nombre pair de joueur 
    *
    */
    test('la mediane [0, 1, 5, 8, 13, 20, 40,100] est 10 ',()=>{
        expect(calculerMediane([0, 1, 5, 8, 13, 20, 40,100])).toBe(10.5)
 
     })
      /* tester  le resultat de la medianne sur un nombre impaire de joueur 
    *
    */
    test('la mediane [0, 1, 5, 8, 20, 40,100] est 10 ',()=>{
        expect(calculerMediane([0, 1, 5, 8, 20, 40,100])).toBe(8)
 
     })
 /* tester  le resultat de la valeur stricte sur un tableau
    *
    */
     test('la valeur stricte du tableau est : [0, 1, 5, 8, 20, 40,100,100,40,40] est 40 ',()=>{
        expect(valeurStricte([0, 1, 5, 8, 20, 40,100,100,40,40])).toBe(40)
 
     }) 

}
)