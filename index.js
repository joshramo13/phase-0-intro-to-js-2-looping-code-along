
for (let age = 30; age < 40; age++) {
    console.log (`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["Charlie", "Samip", "Ali"];

function writeCards(gifts, event) {
    let newArray = [];

    for(let i = 0; i < gifts.length; i++) {
        
        newArray.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);

    };

    return newArray
    
}

// writeCards(gifts);


// const theTeam = ["Jacob", "Bobby", "Dubby"];

// function writeCards(theTeam) {
//     for (let u = 0; u < theTeam.length; u++) {
//         `We linked ${theTeam[u]} danced hit part`}
// debugger;
//         return theTeam;
//     }

//     writeCards(theTeam);
    


    function countDown(numb) {

        while (numb >= 0) {

        console.log(numb--)};
    }
