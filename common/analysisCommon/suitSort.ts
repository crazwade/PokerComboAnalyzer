type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

export function suitSort(hand: Hand[]) {
	const sorting = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	const spades = hand.filter(card => card.suit === 'spades')
		.sort(
			(a, b) => sorting.indexOf(a.number) - sorting.indexOf(b.number),
		);

	const hearts = hand.filter(card => card.suit === 'hearts')
		.sort(
			(a, b) => sorting.indexOf(a.number) - sorting.indexOf(b.number),
		);

	const diamonds = hand.filter(card => card.suit === 'diamonds')
		.sort(
			(a, b) => sorting.indexOf(a.number) - sorting.indexOf(b.number),
		);

	const clubs = hand.filter(card => card.suit === 'clubs')
		.sort(
			(a, b) => sorting.indexOf(a.number) - sorting.indexOf(b.number),
		);

	return [...spades, ...hearts, ...diamonds, ...clubs];
}
