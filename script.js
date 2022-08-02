//prendo dal documento la form
const form = document.getElementById('data-insert');

// imposto le variabili
const under = 18;
const over = 65;
const prezzoBase = 0.21;
const scontoUnder = 0.2;
const scontoOver = 0.4;

form.addEventListener('submit', calcolaPrezzo);

function calcolaPrezzo(event)
{
    event.preventDefault();
    
    const età =document.getElementById('età').value;

    const km = document.getElementById('km').value;

    const prezzo = km * prezzoBase;
    
    let res;

    if(età<under)
        res= prezzo - (prezzo * scontoUnder);
    else if (età> over)
        res= prezzo - (prezzo * scontoOver);
    else
        res= prezzo;

    prezzoFinale.innerHTML = res;
}

