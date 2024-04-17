
// 1. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
// "Los" o "New", altrimenti ritorni *false

// function CheckFifty( x, y ){
//     if( ( x == 50 || y == 50 ) || ( x + y == 50) ){
//         return true;
//     }else{
//         return false; 
//     }
// }

// console.log(CheckFifty( 50, 0));
// console.log(CheckFifty( 0, 50));
// console.log(CheckFifty( 0, 25));
// console.log(CheckFifty( 25, 25));
//-----------------------------------------------------------------//

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la
// stringa e la posizione come parametri e ritorna la stringa modificata.

// let stringaExample = "PaperiNo";

//  function removeCrh( stringa, position ){
//     let newStr = [];
//     for( let i = 0; i < stringa.length; i++ ){
//         if( i !== position ){
//             newStr.push( stringa[i] );
//         }
//     }
//     return newStr.join('');//join mi unisce i caratteri distinti in una stringa
//  }
// stringaExample = removeCrh( stringaExample, 6 );
//  console.log(stringaExample);

//-----------------------------------------------------------------//
//  3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100 i
// true' se rispecchiano queste condizioni, altrimenti ritorna 'false

// function checkInterval( x, y ) {
//      if( ((x > 40 && x < 60) || (x > 70 && x < 100) ) && ( (y > 40 && y < 60) || (y > 70 && y < 100) ) ){
//         return true;
//      }else {
//         return false;
//      }
// }

// console.log(checkInterval( 44, 55));
// console.log(checkInterval( 0, 55));
// console.log(checkInterval( 76, 55));
//-----------------------------------------------------------------//


// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
// "Los" o "New", altrimenti ritorni false .

// function checkLosNew( city ){
//     if( city.slice(0,3).toLowerCase() === "new" || city.slice(0,3).toLowerCase() === "los" ){
//         return city;
//     }else{
//         return false;
//     }
// }

// console.log(checkLosNew("New York"));
// console.log(checkLosNew("Los Angeles"));
// console.log(checkLosNew("Newed York"));
// console.log(checkLosNew("Now York"));
//-----------------------------------------------------------------//

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L'array deve essere passato come parametro.

// let tester = [1,2,3,4,5];

// function sumAll ( array ){
//     return array.reduce( (total, valueCurrent) => total + valueCurrent );
// }

// console.log( sumAll(tester) );
//-----------------------------------------------------------------//

// .6 Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene
// ritorna true, altrimenti ritorna false

//  const array1 = [0,1,3,4];
//  const array2 = [6,7,9,8];
//  function filterOne( array ){
//     let flag = true;
//     for (let i = 0; i < array.length; i++) {
//         if( array[i] == 3 || array[i] == 1 ){
//             flag = false;
//             break;
//         }        
//     }

//     return flag;
//   }
//   ---------
//   oppureeee
//   ---------
//   function filterTwo( array ){
//     let flag = true;
//     if( array.some( (x) => x == 3 || x == 1 ) ){
//         flag = false;
//     }
//     return flag;
//   }


// console.log( filterOne(array1), filterOne(array2) );
// console.log( filterTwo(array1), filterTwo(array2) );

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90 ritorna 'acuto"
// Angolo ottuso: tra i 90 e i 180 gradi ritorna "ottuso"
// Angolo retto: 90 ritorna "retto"
// Angolo Piatto: 180 ritorna "piatto"

// function checkCorner( corner ){
//     switch( true ){
//         case corner < 90 : return "acuto"; 
//         case corner == 90 : return "retto"; 
//         case corner > 90 && corner < 180 : return "ottuso";
//         case corner == 180 : return "piatto"; 
//         default: 
//         return "Angolo non valido";
//     }
// }
//oppureeeee
// function checkCornerTwo( corner ){
         
//          if (corner < 90){
//             return "acuto";
//          }else if(corner == 90){
//             return "retto";
//          }else if(corner > 90 && corner < 180 ){
//             return "ottuso";
//          }else if(corner == 180){
//             return "piatto"; 
//          }else{
//             return "Angolo non valido";
//          } 
             
//        }

    // console.log( checkCorner(90) );
    // console.log( checkCornerTwo(96) );
//-----------------------------------------------------------------//
// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Aut
// Torino" deve ritornare "FIAT".
// function makeAcronym( string ){
//     let acronym = [];
//     for( let i=0; i<string.length; i++ ){
//         if( i === 0 ){
//             acronym.push(string[i].toUpperCase());
//         }else if( string[i-1] === " " ){
//             acronym.push(string[i].toUpperCase());
//         }
//     }//fine for
//     return acronym.join("");
// }

// console.log(makeAcronym("fabbrica italiana auto torino"));

// 1.EXTRA Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
//BUG NON FUNZIONA SE CI SONO DUE O PIù CARATTERI USATI LO STESSO NUMERO DI VOLTE//
// function elementMoreUsed( string ){
//   let mostUsed;
//   let counter, maxCounter = 0;
//   for( let i=0; i < string.length; i++ ){
//     counter = 0;
//     if( mostUsed !== string[i]){//se non sto controllando una lettera già mostUsed salto il controllo
//         for( let n=0; n < string.length; n++ ){
//             if( string[i] === string[n] ){
//                 counter++;
//                 if( counter > maxCounter){
//                     maxCounter = counter;
//                     mostUsed = string[i];
//                 }
//             }
//         }//fine for interno
//     }//fine if
//   }//fine ultimo for
//   if(mostUsed === " "){
//     return "carattere spazio"
//   }else{
//     return mostUsed;
//   }
// }

// console.log( elementMoreUsed("Nel mezzzzzo del cammin di nostra vita"));
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
// 2.EXTRA Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
//  Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
//  Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

function checkAnagrams ( string1, string2 ){

    for( let i=0; i < string1.length; i++ ){
        
    }
}