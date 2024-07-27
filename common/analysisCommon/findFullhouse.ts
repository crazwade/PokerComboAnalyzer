type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const suitRanking = ['spades', 'hearts', 'diamonds', 'clubs'];

// 尋找葫蘆組合
export function findFullhouse(hand: Hand[], getAllSet: boolean = false) {
	// 排序各花色的牌
	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 花色 大小排序
			return suitRanking.indexOf(a.suit) - suitRanking.indexOf(b.suit);
		});
	};

	const allSets: Hand[][] = [];
	let target: Hand[] = [];
	const pair3: Hand[][] = [];
	const pair2: Hand[][] = [];

	for (const getNumber of numberRanking) {
		const result = sortRankHand(hand.filter(item => item.number === getNumber));
		if (result.length > 1) {
			if (result.length > 2) {
				pair3.push(result.slice(0, 3));
			}
			pair2.push(result.slice(0, 2));
		}
	}

	if (getAllSet) {
		pair3.forEach((pair) => {
			pair2.forEach((card) => {
				if (pair[0] !== card[0]) {
					allSets.push([...pair, ...card]);
				}
			});
		});

		return allSets.length > 0 ? allSets : null;
	}
	else {
		let max3 = -1;
		let max2 = -1;
		let target3: Hand[] = [];
		let target2: Hand[] = [];

		if (pair3.length === 0) {
			return null;
		}

		pair3.forEach((pair) => {
			const tmp = numberRanking.indexOf(pair[0].number);
			if (max3 === -1 || tmp < max3) {
				target3 = pair;
				max3 = tmp;
			}
		});

		const newPair2 = pair2.filter(pair => target3[0] !== pair[0]);

		if (newPair2.length === 0) {
			return null;
		}

		newPair2.forEach((pair) => {
			const tmp = numberRanking.indexOf(pair[0].number);
			if (max2 === -1 || tmp < max2) {
				target2 = pair;
				max2 = tmp;
			}
		});

		target = [...target3, ...target2];

		return target.length > 0 ? target : null;
	}
}
