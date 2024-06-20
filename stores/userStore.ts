export const useUserStore = defineStore('user', {
  state: () => ({
    account: 'account',
    name: 'Eduardo',
    exp: 0,
  }),
  getters: {
    userAccount: (state) => state.account,
    userExp: (state) => state.exp,
  },
  actions: {
    incrementExp() {
      this.exp++
    },
    resetExp() {
      this.exp = 0
    }
  },
})