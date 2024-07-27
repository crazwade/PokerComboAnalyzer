type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const sortingNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export function findStraightSameSuit(hand: Hand[], getAllSet: boolean = false) {
	const suits: Record<string, Hand[]> = {
		spades: [],
		hearts: [],
		diamonds: [],
		clubs: [],
	};

	hand.forEach((card) => {
		suits[card.suit].push(card);
	});

	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			return sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number);
		});
	};

	let max = -1;
	let target: Hand[] = [];
	const allSets: Hand[][] = [];

	for (const suit in suits) {
		if (suits[suit].length > 4) {
			const sortedSuit = sortRankHand(suits[suit]);
			for (let i = 0; i < sortedSuit.length; i++) {
				let result = [sortedSuit[i]];
				for (let j = 0; j < 4; j++) {
					const currentNumberIndex = sortingNumber.indexOf(suits[suit][(i + j) % sortedSuit.length].number);
					const nextNumberIndex = sortingNumber.indexOf(suits[suit][(i + j + 1) % sortedSuit.length].number);
					if (currentNumberIndex !== nextNumberIndex - 1 && !(currentNumberIndex === 12 && nextNumberIndex === 0)) {
						result = [];
						break;
					}
					result.push(suits[suit][(i + j + 1) % sortedSuit.length]);
				}

				if (result.length !== 0) {
					allSets.push(result);
					const tmp = numberRanking.indexOf(sortRankHand(result)[4].number);
					if (max === -1 || tmp < max) {
						max = tmp;
						target = result;
					}
				}
			}
		}
	}

	if (getAllSet) {
		return allSets.length > 0 ? allSets : null;
	}
	else {
		return target.length > 0 ? target : null;
	}
}
