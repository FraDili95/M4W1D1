
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


// function checkAnagrams ( string1, string2 ){

//     let counter, counterCompare, flag = true;
//     for( let i=0; i < string1.length && flag === true; i++ ){
//         counter = 0;
//         counterCompare = 0;
  
//         for( let n=0; n < string2.length; n++ ){
//             if( string1[i] === string1[n] ){
//                 counter++;
//             }
//             if( string1[i] === string2[n]){
//                 counterCompare++;
//             }
//         }//fine for interno
//         if( counter !== counterCompare ){
//              flag = false;
//              }
     
//     }//fine ultimo for
//     if( flag ){
//         return "anagrammi!";
//     }else{
//         return "non sono anagrammi!";
//     }
// }

// console.log( checkAnagrams( "roma", "amor"));

//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
// 4.EXTRA Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti
// nagrammi corretti della parola data.
// function palindroma( stringa ){
//     let flag = true, x;
//         for( let i = 0; i < stringa.length; i++ ){
//             x = stringa.length - i - 1;
//             if( stringa[i] !== stringa[x] ){
//                 flag = false;
//             }
//         }
//    return flag;
// }

// console.log( palindroma( "annaz" ));
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

// function inversione( intero ){
//     let inverso = [];
//     let x;
//     while( intero > 0 ){
//         x = intero % 10;
//         inverso.push( String(x) );
//         intero = parseInt( intero / 10 );
//     } 
//     inverso = inverso.join("");
//     return parseInt(inverso);
// }

// console.log( typeof(inversione(189)));
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
//6
// function downchairs( x ){
//    let ramo=[];
//     for( let i = 1; i <= x; i++ ){//determina quanti rami ci sono 
//         for( y = i; y > 0; y-- ){//determima quante foglie ci sono
//             ramo.push("#");//aggiunge foglie
//         }
//         ramo = ramo.join("");//unisce il tutto
//         console.log(ramo);//stampo
//         ramo = [];//pulisco il ramo
//     }
// }

// downchairs( 5 );
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. "Ciao" **** "
//  function reverse( word ){
//      word = word.split("");
//      word = word.reverse();
//      return word.join("");
//  }
// //oppureee
// function reverseTwo( word ){
//     let reverse = [];
//     for( i = word.length-1; i >= 0; i-- ){
//         reverse.push(word[i]);
//     }
//     reverse = reverse.join(""); 
//     return reverse;
// }

// console.log(reverseTwo("canguro"));
// console.log(reverse("canguro"));
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l'array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 [C 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 [L 1, 2, 3, 4], [5]]
// let test= [1,2,3,4,5,6,7,8];
// function dividiArray (array, y){
//     let newArray = [];//nuovo array contenitore mini array
//     while( array.length > 0 ){//finchè la lunghezza di array è positiva
//         let tmp = array.slice(0,y);//mini array da creare con porzioni da y
//         newArray.push(tmp);//ci pusho dentro i mini array creati
//         for(let i=y; i>0; i--){ //tolgo i mini array da quello originale
//             array.shift();
//         }
//         tmp = [];//azzero il temporaneo alla fine di ogni ciclo
//     }
//     return newArray;//ritorno cio che ho creato
// }

// console.log( dividiArray( test, 4) );
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una "piramide" create con il
// carattere "#" e avente X strati.
//  function piramide( x ){
//     let ramo=[], j=0;
//      for( let i = 1; i <= x; i++ ){//determina quanti rami ci sono 
//         for( y = x-i; y > 0; y-- ){//determima quante foglie ci sono
//             ramo.push(" ");//aggiunge spazi
//         }
//          for( y = i+j; y > 0; y-- ){//determima quante foglie ci sono
//              ramo.push("#");//aggiunge foglie
//          }
//          j++;
//          ramo = ramo.join("");//unisce il tutto
//          console.log(ramo);//stampo
//          ramo = [];//pulisco il ramo
//      }
//  }

//  piramide(15);
// IO. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// 2, 3, 13, 14, 16, 15, 9, 8, 7]]
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//


function createMatrix(rows, cols) {
    let matrix = []; // Inizializza la matrice come un array vuoto

    for (let i = 0; i < rows; i++) {
        // Per ogni riga, aggiungi un nuovo array vuoto
        matrix.push(new Array(cols).fill(0)); // Crea una riga con "cols" colonne e riempi con zeri
    }

    return matrix;
}


function spiralMatrix( dimension ){
   let Matrix = createMatrix(dimension, dimension);
   let counterNum = 0, direction = 1;
   const RIGHT = 1, BOTTOM = 2, LEFT = 3, TOP = 4; //DIREZIONI COSTANTI
   let globalCounterPosition = 0;
   while( counterNum < dimension*dimension){//finche il conteggio dei numeri non raggiunge N*N
   
    for( let i = 0; i < 4; i++ ){
        //DX
        if( direction === RIGHT ){//se va a destra
                for( x = globalCounterPosition; x < dimension-globalCounterPosition; x++ ){
                    counterNum++;//continuo il conteggio
                    Matrix[globalCounterPosition][x] = counterNum;//assegno nella posizione giusta
                }
        }
        //BTM
        if( direction === BOTTOM ){//se va verso il basso
                for( x = 0 + globalCounterPosition + 1; x < dimension - globalCounterPosition; x++ ){
                    counterNum++;//continuo il conteggio
                    Matrix[x][dimension-1-globalCounterPosition] = counterNum;//assegno nella posizione giusta
                }                
        }
        //SX
        if( direction === LEFT ){//se va verso sinistra
                for( x = dimension - 2 - globalCounterPosition;  x >= 0 + globalCounterPosition; x-- ){
                    counterNum++;//continuo il conteggio
                    Matrix[dimension-1-globalCounterPosition][x] = counterNum;//assegno nella posizione giusta
                }
        }
        //TOP
        if( direction === TOP ){//se va verso il basso
            for( x = dimension - 2 - globalCounterPosition; x >= 1 + globalCounterPosition; x-- ){
                counterNum++;//continuo il conteggio
                Matrix[x][0 + globalCounterPosition] = counterNum;//assegno nella posizione giusta
            }

        }
        //incremento direzione
        if(direction < 4){
            direction++;
        }else{
            direction = 1;
        }   
    }//fine for

   globalCounterPosition++;//aggiornamento posizione ogni 4 direzioni
}//fine di while
return Matrix;
}
   
console.log( spiralMatrix(15) );