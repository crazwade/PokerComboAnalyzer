<script setup lang='ts'>
import CardItem from '../CardItem.vue';
import { usePokerStore } from '@/stores/usePoker.js';

const pokerStore = usePokerStore();
const isFlipping = ref<boolean>(false);
const isSpreadOut = ref<boolean>(false);
const colddown = ref<boolean>(false);

const clear = () => {
	colddown.value = true;
	isSpreadOut.value = false;
	pokerStore.clearPokerHands();
	setTimeout(() => {
		colddown.value = false;
	}, 1000);
};

const flop = () => {
	pokerStore.newPokerHands();
	isSpreadOut.value = true;
};
</script>

<template>
	<div class="flex flex-col w-full gap-4 justify-center items-center">
		<div class="flex gap-10 w-full justify-center items-center text-white">
			<UButton
				v-if="!isSpreadOut && !colddown"
				:label="'發牌'"
				:disabled="colddown"
				@click="flop()"
			/>
			<UButton
				:label="'清空'"
				color="red"
				@click="clear()"
			/>
		</div>
		<div
			class="flex justify-center items-center cardpool border-2 pt-10 pb-5"
			:class="[isSpreadOut ? 'w-full' : 'w-[80px]']"
		>
			<div class="absolute top-14 left-1/2 -translate-x-1/2">
				手牌
			</div>
			<div class="w-full flex flex-row flex-wrap justify-center">
				<CardItem
					v-for="(card, index) in pokerStore.pokerhands"
					:key="index"
					:is-flipping="isFlipping"
					:number="card.number"
					:is-flip="card.isFlip"
				/>
			</div>
		</div>
		<div class="h-[800px] bg-pink-600">
			456
		</div>
	</div>
</template>

<style lang="scss" scoped>
@for $i from 1 through 15 {
  .card#{$i} {
    left: calc(50% - 40px + #{($i * 40 - 320)}px);
  }
}

.cardpool {
	transition: 1s;
}
</style>
