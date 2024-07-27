type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const suitRanking = ['spades', 'hearts', 'diamonds', 'clubs'];

// 尋找順子組合
export function findSameThree(hand: Hand[], getAllSet: boolean = false) {
	// 排序各花色的牌
	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 number 大小排序
			return suitRanking.indexOf(a.suit) - suitRanking.indexOf(b.suit);
		});
	};

	const allSets: Hand[][] = [];

	for (const getNumber of numberRanking) {
		const result = hand.filter(item => item.number === getNumber);
		if (result.length > 2) {
			const sortSet = sortRankHand(result);
			allSets.push(sortSet.splice(0, 3));
		}
	}

	if (getAllSet) {
		return allSets.length > 0 ? allSets : null;
	}
	else {
		if (allSets.length === 0) {
			return null;
		};

		let max = -1;
		let target: Hand[] = [];
		for (const set of allSets) {
			const tmp = numberRanking.indexOf(set[0].number);
			if (max === -1 || tmp < max) {
				target = set;
				max = tmp;
			}
		}

		return target.length > 0 ? target : null;
	}
}
