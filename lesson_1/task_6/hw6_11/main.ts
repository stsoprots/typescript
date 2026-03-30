type SuitsType = {
    suit: string,
    color: string
}
type DeckType = {
    cardSuit: string,
    value: string,
    color: string
}

let suits: SuitsType[] = [
    { suit: 'spade',  color: 'black' },
    { suit: 'diamond', color: 'red' },
    { suit: 'heart',   color: 'red' },
    { suit: 'clubs',   color: 'black' }
];

let values:string[] = ['6','7','8','9','10','jack','queen','king','ace'];

let deck: DeckType[] = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit.suit,
            value: value,
            color: suit.color
        });
    }
}

interface ISuitsGroups {
    spades: string[];
    diamonds: string[];
    hearts: string[];
    clubs: string[];
}

let reduce = deck.reduce((acc: ISuitsGroups, card):ISuitsGroups => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card.value);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card.value);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card.value);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card.value);
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [],  clubs: []});
console.log(reduce);
