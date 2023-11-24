/**
 * Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 */


//Svolgimento

//Creo Lista spesa
const ListSpesa = ["patate", "cipolle", "carote", "bicchieri di plastica", "pasta", "pane", "yogurt"];


// acquisisco l'elemento che ha per classe risultato, dove andrò ad inserire il risultato
const ul = document.querySelector(".list");

// selezione del nome/cognome
const prodotto = document.querySelector(".prodotto");

// acquisisco l'elemento (bottone) che ha per id calcolo,
const InsButton = document.getElementById("inserisci");

// acquisisco l'elemento (bottone) che ha per id cencella,
const delButton = document.getElementById("cencella");


//inizializzo variabile contatore
let i = 0;

while (i < ListSpesa.length) {

    //acquissco il valore nella posizione i esima della mia lista
    let prodotto = ListSpesa[i];

    //creo all'interno della mia pagina html il tag li
    const li = document.createElement("li");

    //inserisco all'interno del mio tag li il prodotto nella i-esima posizione
    li.append(prodotto);

   //inserisco nel tag ul il mio li
    ul.append(li);

    //incremento la variabile i
    i++;
}



// Quando viene cliccato il pulsante invia
InsButton.addEventListener("click",

    function () {

        InsProd();
    }
);


//funzione per l'inserimento del prodotto in lista
function InsProd(){

    let val1 = prodotto.value;

    ListSpesa.push(val1);

    //creo all'interno della mia pagina html il tag li
    const li = document.createElement("li");

    //inserisco all'interno del mio tag li il prodotto nella i-esima posizione
    li.append(val1);

    //inserisco nel tag ul il mio li
     ul.append(li);


}


// Quando viene cliccato il pulsante elimina
delButton.addEventListener("click",

    function () {

        DelProd();
    }
);

//funzione per la cancellazione dell'ultimo prodotto inserito in lista
function DelProd() {

    //inizializzo variabile contatore
    let i = 0;

    while (i < ListSpesa.length) {

        if (i == ListSpesa.length - 1){

            //elimino l'ultima posizione
            ListSpesa.pop(i);

            console.log(ListSpesa);
        }

        //incremento la variabile i
        i++;
    }

}