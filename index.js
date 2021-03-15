// Code your solutions in this file
//const names = ["Ada", "Brendon", "Ali"]


function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

function countDown(num) {
    num = 0 
    while (num < 11) {
        console.log(num++)
    }
}