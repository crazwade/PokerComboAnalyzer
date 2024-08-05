import type { Hand } from '../common/analysisCommon/type';

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type Card = {
	/** 卡牌索引值 翻牌時使用 */
	index: number;
	/** 卡牌的總順序
	 * @type 1-52
	 * @type 1-13 黑桃 A-K
	 * @type 14-26 愛心 A-K
	 * @type 27-39 方塊 A-K
	 * @type 40-52 梅花 A-K
	 */
	number: IntRange<1, 53>;
	/** 是否翻牌 */
	isFlip: boolean;
};

export const usePokerStore = defineStore('poker', {
	state: () => (<{
		displayPool: Card[];
		pokerhands: Card[];
		combohands: Hand[];
	}>{
		displayPool: [],
		pokerhands: [],
		combohands: [],
	}),
	getters: {
		getDisplayPool: state => state.displayPool,
		getPokerHands: state => state.pokerhands,
	},
	actions: {
		transferNumberCardtoHand(index: number): Hand['number'] {
			const cardNumber = (index % 13);
			switch (cardNumber) {
				case 1:
					return 'A';
				case 11:
					return 'J';
				case 12:
					return 'Q';
				case 0:
					return 'K';
				default:
					return String(cardNumber) as '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
			}
		},
		transferNumberHandtoCard(number: Hand['number'], suit: Hand['suit']): IntRange<1, 53> {
			const getStandardSutiNumber = {
				spades: 0,
				hearts: 1,
				diamonds: 2,
				clubs: 3,
			};

			const getStandardNumber = (handNumber: string) => {
				switch (handNumber) {
					case 'A':
						return 1;
					case 'J':
						return 11;
					case 'Q':
						return 12;
					case 'K':
						return 13;
					default:
						return parseInt(handNumber);
				}
			};

			return getStandardNumber(number) + 13 * getStandardSutiNumber[suit] as IntRange<1, 53>;
		},
		transferSuit(index: number): Hand['suit'] {
			if (index <= 13) {
				return 'spades';
			}

			if (index <= 26) {
				return 'hearts';
			}

			if (index <= 39) {
				return 'diamonds';
			}

			return 'clubs';
		},
		transferCardtoHand(cards: Card[]): Hand[] {
			return cards.map((card: Card) => ({
				number: this.transferNumberCardtoHand(card.number),
				suit: this.transferSuit(card.number),
			}));
		},
		transferHandtoCard(cards: Hand[]): Card[] {
			let index = 0;
			return cards.map((card: Hand) => ({
				index: index += 1,
				number: this.transferNumberHandtoCard(card.number, card.suit),
				isFlip: true,
			}));
		},
		setDisplayPool(newPool: Card[]) {
			this.displayPool = newPool;
		},
		newPokerHands() {
			const newHands: Card[] = [];
			const cardNumbers: number[] = [];

			while (cardNumbers.length < 15) {
				const getSpecCard = Math.floor(Math.random() * 52) + 1 as IntRange<1, 53>;
				if (!cardNumbers.includes(getSpecCard)) {
					cardNumbers.push(getSpecCard);
					newHands.push({
						index: newHands.length,
						number: getSpecCard,
						isFlip: true,
					});
				}
			}

			this.pokerhands = newHands;
			this.combohands = this.transferCardtoHand(newHands);
		},
		clearPokerHands() {
			this.pokerhands = [];
		},
		filpCard(index: number) {
			this.displayPool[index].isFlip = !this.displayPool[index].isFlip;
		},
	},
});
