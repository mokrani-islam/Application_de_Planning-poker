const {calculerMoyenne}= require ('./Model/Test.js');
const {calculerMediane}= require ('./Model/Test.js');

describe(

'test sur la moyenne ',()=>{

    test('test sur la moyenne aucune valeur',()=>{
        expect(calculerMoyenne([])).toBe(0)

    })
    
    test('la mediane [1, 2, 3, 4, 6, 7, 9] est 4 ',()=>{
       expect(calculerMediane([1, 2, 3, 4, 6, 7, 9])).toBe(4)

    })
    test('la mediane 8 et 4 est 6',()=>{
        expect(calculerMoyenne([4,8])).toBe(6)

    })

}



)