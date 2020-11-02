function bonjour(prenom) {
    return "Bonjour " + prenom;
}

console.log(bonjour("Marko"));

console.log(bonjour(prompt("quel est ton prénom?")));

function fibonacci(num) 
{ 
    var num0=0; 
    var num1=1; 
    var sum; 

    if (num <= 1) {
        return num;
    }
    
    for (var i = 0; i < num - 1; i++)  
    { 
        sum=num0+num1;
        num0=num1; 
        num1=sum; 
    } 
    return num1; 
} 

function fibonacciRecursive(num) {
    
    if (num<=1) {
        return num;
        }
  
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
  }

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(10));


console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(10));


function estPair(num) {

    return (num % 2 === 0);
}

console.log(estPair(15));

console.log(estPair(16));

function estPremier(nombre) {

    if (nombre === 1) 
        return false;

    var i;

    if (nombre % 2 === 0) {
        if (nombre  === 2) {
            return true;
        } else {
            return false;
        }
    }

    i = 3;

    while (i*i <= nombre) {
        if (nombre%i === 0) {
            return false;
        }
        i += 2;
    }

    return true;

}

//par définition, 1 n'est pas premier; 2 est premier

console.log("1 est premier oui ou non : " + estPremier(1));

console.log(estPremier(2));

console.log(estPremier(17));

console.log(estPremier(6));

console.log(estPremier(97));


function palindromeMot(mot) {
    return (mot.toLowerCase().split('').reverse().join('') === mot.toLowerCase());
}

function palindromeMot2(mot) {
    var temp = '';
    mot = mot.toLowerCase();

    for (var i = mot.length - 1; i >=0; i--) {
        temp += mot.charAt(i);
    }
    
    console.log(temp);

    return mot === temp;
}


console.log(palindromeMot("radar"));


console.log(palindromeMot("bazar"));

console.log(palindromeMot("AnavoliMilovana"));


function palindromeNumber(number) {

    var sum = 0;
    
    var r;

    console.log(number);
    var temp = number;    
    while(number > 0)
      {    
       r = number%10;   
       sum = r + sum*10;    
       number = Math.floor(number/10);
      } 

    console.log(sum);

     if(temp===sum)   
       return true;  
     else    
       return false;   
}  

function palindromeNumber2(nombre) {
    nombre = nombre.toString();

    return palindromeMot(nombre);

}


console.log(palindromeNumber(525));
console.log(palindromeNumber(22));
console.log(palindromeNumber(235));


console.log(palindromeNumber2(4423244));


console.log(palindromeMot2("AnavoliMilovana"));


//palindrome 3

var mot2 = prompt("Ecrivez le mot que vous voulez tester");

function palindrome3(mot) {
        mot = mot.toLowerCase();
        for(var k = 0, j = (mot.length - 1); k < j; k++, j--) {
            if (mot[k] != mot[j]) {
                return mot + " n'est pas un palindrome"
            }
        }
            return mot + " est un palindrome"
}


alert(palindrome3(mot2));


