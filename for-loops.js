console.log("here we go");

let numberCounter;

for (numberCounter = 5; numberCounter <= 120; numberCounter += 10) {
    console.log(numberCounter);
}



let numberDecrement;

for (numberDecrement = 4096; numberDecrement >= 1; numberDecrement /= 2) {
    console.log(numberDecrement);
}


// Array iteration

// Create an array that contains the names of American Presidents. 
// Loop over that array with a for loop, 
// and use string concatenation with console.log() 
// to output the order and name of each President (see example below).

// Example output:

// President #1 was George Washington

// President #2 was John Adams

// President #3 was Thomas Jefferson

let POTUS = ["Ronald Reagan",
    "George H.W. Bush",
    "Bill Clinton",
    "George Bush Jr.",
    "Barry Obama",
    "Donald Trump"
];


POTUS.forEach(function(POTUS, index) {
    console.log(`President # ${index + 40} was ${POTUS}`);
})


// Object iteration

// You can use another kind of
// for loop to iterate over objects.Iterate over the object below and use 
//     console.log() to output the names of the keys in the object.

// var antSpecies = {
//     argentine: {},
//     army: {},
//     bigHeaded: {},
//     black: {},
//     bull: {},
//     carpenter: {},
//     crazy: {},
//     fire: {},
//     glider: {},
//     honeyPot: {},
//     jackJumper: {}
// }