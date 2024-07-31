type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};
const sortingNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const numberRanking = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

// 尋找同花組合 並依據黑桃>紅心>方塊>梅花 順序給牌
export function findSameSuit(hand: Hand[], getAllSet: boolean = false) {
	// 定義各花色的計數器
	const suits: Record<string, Hand[]> = {
		spades: [],
		hearts: [],
		diamonds: [],
		clubs: [],
	};

	const sortRankHand = (hand: Hand[]) => {
		return hand.sort((a, b) => {
			// 以 number 大小排序
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

	// 進行 C litems.legnth 取 k 的組合元素
	const allCombinations = (items: Hand[], k: number) => {
		const results: Hand[][] = [];

		const combine = (arr: Hand[], memo: Hand[], start: number) => {
			if (memo.length === k) {
				const sortSets: Hand[] = sortRankHand(memo.slice());
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

	const newHand = sortRankHand(hand);

	// 分類牌到各花色計數器中
	newHand.forEach((card) => {
		suits[card.suit].push(card);
	});

	// 排序各花色的牌
	const allSets: Hand[][] = [];

	// 找出同花組合
	for (const suit in suits) {
		if (suits[suit].length > 4) {
			const newSets = allCombinations(suits[suit], 5);
			allSets.push(...newSets);
		}
	}

	const allSetsFilter = new Set<string>();

	if (allSets.length === 0) {
		return null;
	}

	for (const newHand of allSets) {
		allSetsFilter.add(JSON.stringify(newHand));
	}

	const uniqueSets = Array.from(allSetsFilter).map(set => JSON.parse(set) as Hand[]);

	if (uniqueSets.length === 0) {
		return null;
	}

	const sortfinalResult: Hand[][] = sortUniqueSets(uniqueSets);

	if (getAllSet) {
		if (sortfinalResult.length > 5) {
			return sortfinalResult.splice(0, 5);
		}

		return sortfinalResult;
	}
	else {
		return sortfinalResult[0];
	}
}
