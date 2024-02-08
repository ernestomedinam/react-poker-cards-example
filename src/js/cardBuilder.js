const suits = [{
    color: "red",
    kind: "♦"
}, {
    color: "red",
    kind: "♥"
}, {
    color: "black",
    kind: "♣"
}, {
    color: "black",
    kind: "♠"
}];

export const faceValues = ["J", "Q", "K"];
for (let value = 10; value > 1; value--) {
    faceValues.unshift(value.toString());
}
faceValues.unshift("A");


export function buildAllCards() {
    const allCards = [];
    for (const suit of suits) {
        for (const value of faceValues) {
            allCards.push({
                suit: suit,
                faceValue: value
            });
        }
    }
    return allCards;
};
