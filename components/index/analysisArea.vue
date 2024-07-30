<script setup lang='ts'>
import CardItem from '../CardItem.vue';
import { usePokerStore } from '@/stores/usePoker.js';

const pokerStore = usePokerStore();
const isFlipping = ref<boolean>(false);

onMounted(() => {
	console.log('analysis');
});
</script>

<template>
	<div class="flex flex-col w-full gap-4">
		<div class="flex gap-10 w-full justify-center items-center text-white">
			<UButton
				:label="'發牌'"
				@click="pokerStore.newPokerHands()"
			/>
			<UButton
				:label="'清空'"
				color="red"
				@click="pokerStore.clearPokerHands()"
			/>
		</div>
		<div class="relative flex w-full h-full">
			<div
				v-for="(card, index) in pokerStore.pokerhands"
				:key="index"
				class="absolute top-0 left-[calc(50%-40px)]"
			>
				<CardItem
					:is-flipping="isFlipping"
					:index="card.index"
					:number="card.number"
					:is-flip="card.isFlip"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
