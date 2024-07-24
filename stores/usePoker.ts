type DisplayPool = {
	index: number;
	number: number;
	isFlip: boolean;
};

export const usePokerStore = defineStore('poker', {
	state: () => (<{
		displayPool: DisplayPool[];
	}>{
		displayPool: [],
	}),
	getters: {
		getDisplayPool: state => state.displayPool,
	},
	actions: {
		setDisplayPool(newPool: DisplayPool[]) {
			this.displayPool = newPool;
		},
		filpCard(index: number) {
			this.displayPool[index].isFlip = !this.displayPool[index].isFlip;
		},
	},
});
