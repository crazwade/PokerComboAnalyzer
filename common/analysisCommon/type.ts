export type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

export const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
export const suitRanking = ['spades', 'hearts', 'diamonds', 'clubs'];
export const sortingNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export function suitSort(hand: Hand[]) {
	const spades = hand.filter(card => card.suit === 'spades')
		.sort(
			(a, b) => sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number),
		);

	const hearts = hand.filter(card => card.suit === 'hearts')
		.sort(
			(a, b) => sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number),
		);

	const diamonds = hand.filter(card => card.suit === 'diamonds')
		.sort(
			(a, b) => sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number),
		);

	const clubs = hand.filter(card => card.suit === 'clubs')
		.sort(
			(a, b) => sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number),
		);

	return [...spades, ...hearts, ...diamonds, ...clubs];
}

export function numberSort(hand: Hand[]) {
	return hand.sort((a, b) => {
		const numberDiff = sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number);
		if (numberDiff !== 0) {
			return numberDiff;
		}
		return suitRanking.indexOf(b.suit) - suitRanking.indexOf(a.suit);
	});
}
