for (let age = 30; age < 40; age++) {
    console.log (`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wraped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


const people = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
function writeCards(people, event) {
    const cards = [];
    for (let i = 0; i < people.length; i++) {
        let message = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
        cards.push(message);
    }
    return cards;
}

function countDown () {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}