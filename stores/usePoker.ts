type DisplayPool = {
	index: number;
	number: number;
	isFlip: boolean;
};

export const usePokerStore = defineStore('poker', {
	state: () => (<{
		displayPool: DisplayPool[];
		pokerhands: DisplayPool[];
	}>{
		displayPool: [],
		pokerhands: [],
	}),
	getters: {
		getDisplayPool: state => state.displayPool,
		getPokerHands: state => state.pokerhands,
	},
	actions: {
		setDisplayPool(newPool: DisplayPool[]) {
			this.displayPool = newPool;
		},
		newPokerHands() {
			const newHands: DisplayPool[] = [];
			for (let i = 0; i < 15; i++) {
				newHands.push({
					index: Math.floor(Math.random() * 52) + 1,
					number: Math.floor(Math.random() * 52) + 1,
					isFlip: true,
				});
			}
			this.pokerhands = newHands;
		},
		clearPokerHands() {
			this.pokerhands = [];
		},
		filpCard(index: number) {
			this.displayPool[index].isFlip = !this.displayPool[index].isFlip;
		},
	},
});
