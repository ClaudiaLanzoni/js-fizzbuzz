/*for (let i = 1; i <= 100; i++) {
    
    let numeri = [i];
    let multiploDiTre = (i % 3 == 0);
    let multiploDiCinque = (i % 5 == 0);


    if (i % 3 == 0) {
        numeri.splice (multiploDiTre, 1, "Fizz");
        
    } else if (i % 5 == 0) {
        numeri.splice (multiploDiCinque, 1, "Buzz");
    } else if (i % )
    
    console.log(numeri)
}*/

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");   

    } else if (i % 3 == 0) {
        console.log("Fizz");
        
    } else if (i % 5 == 0) {
        console.log("Buzz"); 

    }  else {
        console.log(i)
    }
    
}

//perchè se si mette && come ultimo else if non funziona e invece messo per primo sì?
