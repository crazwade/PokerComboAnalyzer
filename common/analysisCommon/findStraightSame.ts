type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const sortingNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

export function findStraightSame(hand: Hand[], getAllSet: boolean = false) {
	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			return sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number);
		});
	};

	const sortUniqueSets = (hand: Hand[][]) => {
		hand.sort((handA: Hand[], handB: Hand[]) => {
			for (let i = handA.length; i > 0; i--) {
				const numberA = handA[i - 1].number;
				const numberB = handB[i - 1].number;
				if (numberA !== numberB) {
					return numberRanking.indexOf(numberA) - numberRanking.indexOf(numberB);
				}
			}
			return 0;
		});

		return hand;
	};

	const filterHand: Hand[] = [];
	const newfilterHand: Hand[][] = [];
	const allSets: Hand[][] = [];

	const sortHand = sortRankHand(hand);
	let numberTmp = '-1';
	let suitTmp = '-1';

	sortHand.forEach((card) => {
		if (numberTmp === '-1' || suitTmp === '-1' || (numberTmp !== card.number || suitTmp !== card.suit)) {
			numberTmp = card.number;
			suitTmp = card.suit;
			filterHand.push(card);
		}
	});

	const splitHand = (target: Hand[], hands: Hand[]): void => {
		for (const card of target) {
			const tmpHand = hands.filter(item => item !== card);
			filerSameNumber(tmpHand);
		}
	};

	const filerSameNumber = (hand: Hand[]) => {
		let isGood = true;
		for (let i = 0; i < hand.length; i++) {
			const getIndex = hand.filter(item => item.number === hand[i].number);
			if (getIndex.length > 1) {
				isGood = false;
				splitHand(getIndex, hand);
				break;
			}
		}

		if (isGood) {
			newfilterHand.push(hand);
		}
	};

	// 將重複數字的手牌分拆
	filerSameNumber(filterHand);

	newfilterHand.forEach((newHand) => {
		newHand.forEach((card) => {
			let consecutiveCount = 1;
			let currentNumber = card.number;
			const currentIndex = newHand.findIndex(item => item === card);
			const sequence: Hand[] = [card];

			for (let j = 1; j < 5; j++) {
				const nextIndex = (currentIndex + j) % newHand.length;
				const nextNumber = newHand[nextIndex].number;
				const nextCard = newHand[nextIndex];

				if (sortingNumber.indexOf(nextNumber) === (sortingNumber.indexOf(card.number) + j) % sortingNumber.length) {
					consecutiveCount++;
					sequence.push(nextCard);
					currentNumber = nextNumber;
				}
				else {
					break;
				}

				if (consecutiveCount === 5) {
					allSets.push(sortRankHand(sequence));
				}
			}
		});
	});

	const allSetsFilter = new Set<string>();

	if (allSets.length === 0) {
		return null;
	}

	for (const newHand of allSets) {
		allSetsFilter.add(JSON.stringify(newHand));
	}

	const uniqueSets = Array.from(allSetsFilter).map(set => JSON.parse(set) as Hand[]);

	const finalResult = sortUniqueSets(uniqueSets);

	if (getAllSet) {
		if (finalResult.length === 0) {
			return null;
		}

		if (finalResult.length > 5) {
			return finalResult.splice(0, 5);
		}

		return finalResult;
	}
	else {
		return finalResult[0];
	}
}
