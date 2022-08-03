// Prendo dal documento la form
const ticketForm = document.getElementById('ticketForm');
console.log(ticketForm);

// Imposto le variabili
const under = 18;
const over = 65;
const prezzoBase = 0.21;
const scontoUnder = 0.2;
const scontoOver = 0.4;

ticketForm.addEventListener('submit', calcolaBiglietto);

// Imposto la funzione di calcolo del biglietto
function calcolaBiglietto(event)
{
    event.preventDefault();
    console.log(event);
    
    const età =document.getElementById('età').value;
    const km = document.getElementById('km').value;

    const etàValue = parseInt(età.value);
    const kmValue = parseInt(km.value);

    const prezzo = km * prezzoBase;

    let result;

    if(età<under) 
        result = prezzo - (prezzo * scontoUnder);
    
    else if (età> over) 
        result = prezzo - (prezzo * scontoOver);
    else 
        result = prezzo;

    prezzoFinale.innerHTML = result;

}
