/*Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che potremmo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/




for (let i = 1; i <= 100; i++) {
    
    let numeri = [i];
    let multiploDiTre = (i % 3 == 0);
    let multiploDiCinque = (i % 5 == 0);


    if (i % 3 == 0) {
        numeri.splice (multiploDiTre, 1, "Fizz");
        
    } else if (i % 5 == 0) {
        numeri.splice (multiploDiCinque, 1, "Bizz");
    } 
    
    console.log(numeri)
}

