import type { Hand } from './type';
import { numberRanking, suitRanking, sortingNumber } from './type';

// 尋找一對組合
export function findPairAndStraightSameSuit(hand: Hand[], getAllSet: boolean = false) {
	// 排序各花色的牌
	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 花色 大小排序
			return suitRanking.indexOf(a.suit) - suitRanking.indexOf(b.suit);
		});
	};

	// 排序各數字的牌
	const sortRankHandNumber = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 number 大小排序
			return sortingNumber.indexOf(a.number) - sortingNumber.indexOf(b.number);
		});
	};

	const sortUniqueSets = (hand: Hand[][]) => {
		hand.sort((handA: Hand[], handB: Hand[]) => {
			for (let i = 0; i < handA.length; i++) {
				const numberA = handA[i].number;
				const numberB = handB[i].number;
				if (numberA !== numberB) {
					return numberRanking.indexOf(numberA) - numberRanking.indexOf(numberB);
				}
			}
			return 0;
		});

		return hand;
	};

	const pair2: Hand[][] = [];

	for (const getNumber of numberRanking) {
		const result = sortRankHand(hand.filter(item => item.number === getNumber));
		if (result.length > 1) {
			const newResult = result.filter(item => item.suit === 'spades');
			if (newResult.length > 1) {
				pair2.push(newResult);
			}
		}
	}

	if (pair2.length === 0) {
		return null;
	}

	// 找尋同花
	const suits: Record<string, Hand[]> = {
		spades: [],
		hearts: [],
		diamonds: [],
		clubs: [],
	};

	const allCombinations = (items: Hand[], k: number) => {
		const results: Hand[][] = [];

		const combine = (arr: Hand[], memo: Hand[], start: number) => {
			if (memo.length === k) {
				const sortSets: Hand[] = sortRankHandNumber(memo.slice());
				results.push(sortSets);
				return;
			}

			for (let i = start; i < arr.length; i++) {
				memo.push(arr[i]);
				combine(arr, memo, i + 1);
				memo.pop();
			}
		};

		combine(items, [], 0);
		return results;
	};

	const newHand = sortRankHandNumber(hand);

	// 分類牌到各花色計數器中
	newHand.forEach((card) => {
		suits[card.suit].push(card);
	});

	// 排序各花色的牌
	const allSets: Hand[][] = [];

	// 找出同花組合
	for (const suit in suits) {
		if (suits[suit].length > 2) {
			const newSets = allCombinations(suits[suit], 3);
			allSets.push(...newSets);
		}
	}

	const allSetsFilter = new Set<string>();

	for (const newHand of allSets) {
		allSetsFilter.add(JSON.stringify(newHand));
	}

	const uniqueSets = Array.from(allSetsFilter).map(set => JSON.parse(set) as Hand[]);

	if (uniqueSets.length === 0) {
		return null;
	}

	// 取得大小排列後的 uniqueSets
	const newuniqueSets = sortUniqueSets(uniqueSets);

	const finalResult: Hand[][] = [];

	// 處理最終組合
	pair2.forEach((pair) => {
		newuniqueSets.forEach((sameSuit) => {
			const isSame = sameSuit.some(card => card.number === pair[0].number);
			if (!isSame) {
				const tmp = [...pair, ...sameSuit];
				finalResult.push(tmp);
			}
		});
	});

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
		if (finalResult.length === 0) {
			return null;
		}

		return finalResult[0];
	}
}
