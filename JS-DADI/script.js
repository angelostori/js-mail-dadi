/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

//definisco un array con i valori della faccia del dado
const facceDado = [1, 2, 3, 4, 5, 6]

//creo due numeri casuali
let numeroCasuale1 = parseInt((Math.random() * 6) + 1)
let numeroCasuale2 = parseInt((Math.random() * 6) + 1)

//uso i numeri casuali come indice per estrarre una faccia del dado
const numeroUtente = facceDado.at(numeroCasuale1)
const numeroComputer = facceDado.at(numeroCasuale2)

//stampo dei messaggi con il risultato
console.log(`Il risultato del tuo lancio è: ${numeroCasuale1}`)
console.log(`Il risultato del lancio del computer è: ${numeroCasuale2}`);

//eseguo un controllo su chi ha estratto il numero maggiore e 
//lancio un messaggio
if (numeroUtente > numeroComputer) {
    console.log('HAI VINTO!!! :)'); 
} else if (numeroUtente === numeroComputer) {
    console.log('PAREGGIO! :\\');
} else {
    console.log('HAI PERSO :\'(');
    
}


