function triInsertion(tableau) {
  
     //nombre des éléments dans le tableau
  var len = tableau.length;       
  var tmp, i, j;                  
  
  for(i = 1; i < len; i++) {
    //stocker la valeur actuelle 
    tmp = tableau[i];
    j = i - 1;
    while (j >= 0 && tableau[j] > tmp) {
      // déplacer le nombre
      tableau[j+1] = tableau[j];
      j--;
    }
    //Insère la valeur temporaire à la position 
    //correcte dans la partie triée.
    tableau[j+1] = tmp;
  }
  return tableau;
}


console.log(triInsertion([1, -3, 5, 0, 45]));