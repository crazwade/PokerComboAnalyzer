import type { Hand } from './type';
import { numberRanking, suitRanking } from './type';
// 尋找一對組合
export function findPair(hand: Hand[], getAllSet: boolean = false) {
	// 排序各花色的牌
	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 花色 大小排序
			return suitRanking.indexOf(a.suit) - suitRanking.indexOf(b.suit);
		});
	};

	const pair2: Hand[][] = [];

	for (const getNumber of numberRanking) {
		const result = sortRankHand(hand.filter(item => item.number === getNumber));
		if (result.length > 1) {
			pair2.push(result.slice(0, 2));
		}
	}

	if (getAllSet) {
		return pair2.length > 0 ? pair2 : null;
	}
	else {
		let max = -1;
		let target: Hand[] = [];

		if (pair2.length === 0) {
			return null;
		}

		pair2.forEach((pair) => {
			const tmp = numberRanking.indexOf(pair[0].number);
			if (max === -1 || tmp < max) {
				target = pair;
				max = tmp;
			}
		});

		return target.length > 0 ? target : null;
	}
}
