// tri par ordre croissant

function triSelection(tableau) {

    for (let i = 0; i < tableau.length ; i++) {
        
        for (let j = i+1; j < tableau.length; j++) {
            if (tableau[i] > tableau[j]) {
                let temp = tableau[i];
                tableau[i] = tableau[j];
                tableau[j] = temp;
            }
        } 
        

    }

    return tableau;

}

console.log(triSelection([3, 2, 6, 10, 9, 9, 8, 165]));
console.log(triSelection([3, 2, 1, 5, 4, -1, -14]));

