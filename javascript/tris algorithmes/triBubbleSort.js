//tri par ordre croissant

function bubbleSort(tableau) {

    var permute;

    do {

        permute = false;

        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] > tableau[i + 1]) {
                var temp = tableau[i];
                tableau[i] = tableau[i + 1];
                tableau[i + 1] = temp;
                permute = true;
            }

        }

        } while (permute === true);

        return tableau;


}

console.log("Toto");

console.log(bubbleSort([2, 3, 1, 5, 8]));
console.log(bubbleSort([6, 3, 1, 5, 15, -47]));
