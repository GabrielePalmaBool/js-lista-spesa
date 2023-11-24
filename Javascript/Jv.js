/**
 * Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 */


//Svolgimento

//Creo Lista spesa
const ListSpesa = ["patate", "cipolle", "carote", "bicchieri di plastica", "pasta", "pane", "yogurt"];

//inizializzo variabile contatore
let i = 0;

// acquisisco l'elemento che ha per classe risultato, dove andrò ad inserire il risultato
const ul = document.querySelector(".list");


while (i < ListSpesa.length) {

    //acquissco il valore nella posizione i esima della mia lista
    let prodotto = ListSpesa[i];

    //creo all'interno della mia pagina html il ta li
    const li = document.createElement("li");

    //inserisco all'interno del mio tag li il prodotto nella i-esima posizione
    li.append(prodotto);

   //inserisco nel tag ul il mio li
    ul.append(li);
    
    //incremento la variabile i
    i++;
}