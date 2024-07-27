type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const suitRanking = ['spades', 'hearts', 'diamonds', 'clubs'];

// 尋找鐵支組合
export function findSameFour(hand: Hand[], getAllSet: boolean = false) {
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
		if (result.length > 3) {
			if (result.length > 4) {
				allSets.push(sortRankHand(result.slice(0, 4)));
			}
			else {
				allSets.push(sortRankHand(result));
			}
		}
	}

	if (getAllSet) {
		return allSets.length > 0 ? allSets : null;
	}
	else {
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
