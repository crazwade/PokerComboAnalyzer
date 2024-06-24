import currentTimeFormatted from '~/common/currentTimeFormatted';

export const useUserStore = defineStore('user', {
	state: () => (<{
		account: string;
		name: string;
		exp: number;
		timer: number;
	}>{
		account: 'account',
		name: 'Eduardo',
		exp: 0,
		timer: Date.now(),
	}),
	getters: {
		userAccount: state => state.account,
		userExp: state => state.exp,
		currentTime: state => currentTimeFormatted(state.timer),
	},
	actions: {
		incrementExp() {
			this.exp++;
		},
		resetExp() {
			this.exp = 0;
		},
		setCurrentTime(time: number) {
			this.timer = time;
			this.startTimer();
		},
		startTimer() {
			const intervalId = setInterval(() => {
				this.timer += 1000;
			}, 1000);

			return intervalId;
		},
	},
});
