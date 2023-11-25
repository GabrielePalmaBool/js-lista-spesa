/**
 * Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 */


//Svolgimento

//Creo Lista spesa
const ListSpesa = ["patate", "cipolle", "carote", "bicchieri di plastica", "pasta", "pane", "yogurt"];


// acquisisco l'elemento che ha per classe list , una lista non ordinata
const ul = document.querySelector(".list");

// acquisisco l'elemento che ha per classe box
const Box = document.querySelector(".Box");

// acquisisco l'elemento che ha per classe prodotto: nome del prodotto digitato
const prodotto = document.querySelector(".prodotto");

// acquisisco l'elemento (bottone) che ha per id calcolo,
const InsButton = document.getElementById("inserisci");

// acquisisco l'elemento (bottone) che ha per id cencella,
const delButton = document.getElementById("cencella");



//inizializzo variabile contatore
let i = 0;

//Stampo in pagina lista array
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


// Quando viene cliccato il pulsante inserisci
InsButton.addEventListener("click",

    function () {
        
        //chiamo la funzione per l'inserimento
        InsProd();
    }
);


//funzione per l'inserimento del prodotto in lista
function InsProd(){

    let val1 = prodotto.value;

    if(val1 == null || val1 == "") {
        alert("digitare il nome del prodotto e cliccare: inserisci");
    }

    else {

        //acquisisco i valore nel tag p(qualora ci fosse)
        const number = document.querySelector('#box p');

        //Verifico che c'è
        if(number != null){
           
             //rimuovo scritta dal documento
             Box.removeChild(Box.lastChild);
        }

        //Inserisco prodotto nell'array
        ListSpesa.push(val1);

        //creo all'interno della mia pagina html il tag li
        const li = document.createElement("li");

        //inserisco all'interno del mio tag li il prodotto scelto
        li.append(val1);

        //inserisco nel tag ul il mio li
        ul.append(li);

    }

    
}


// Quando viene cliccato il pulsante elimina
delButton.addEventListener("click",

    function () {

        //chiamo la funzione per la cancellazione
        DelProd();
    }
);

//funzione per la cancellazione dell'ultimo prodotto inserito in lista
function DelProd() {

    //inizializzo variabile contatore
    let i = 0;

    while (i < ListSpesa.length) {

        if (i == ListSpesa.length - 1){

            //elimino l'elemento in ultima posizione dell'array
            ListSpesa.pop(i);

            console.log(ListSpesa);
        }
        //incremento la variabile i
        i++;
    }

    //rimuovo ultimo elemento inserito in lista sul mio documento html
    ul.removeChild(ul.lastChild);

    let empty=(ul.lastChild);
    
    // Se la lista è vuota
    if (empty == null) {
        
        //Creo l'elemento all'interno del mio file html
        const stringa = document.createElement ("p");

        //inserisco scritta all'interno del mio contenuto
        stringa.append("La lista è vuota");

        //inserisco stringa all'interno del mio contenitore "none"
        Box.append(stringa);
    }
}