<script setup lang='ts'>
import CardItem from '../CardItem.vue';
import LoadingAni from '../LoadingAni.vue';
import { usePokerStore } from '@/stores/usePoker.js';

const pokerStore = usePokerStore();

const isFlipping = ref<boolean>(false);
const isAllFlip = ref<boolean>(false);

const flip = (index: number): void => {
	if (isAllFlip.value) {
		return;
	}
	pokerStore.filpCard(index);
};

const recover = (index: number): void => {
	pokerStore.displayPool[index].isFlip = isAllFlip.value;
};

const flipAll = async () => {
	// 如果正在翻牌中，直接返回，不再執行
	if (isFlipping.value) {
		return;
	}
	isFlipping.value = true;
	isAllFlip.value = !isAllFlip.value;

	for (const [index] of pokerStore.displayPool.entries()) {
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				pokerStore.filpCard(index);
				resolve();
			}, 50);
		});
	}

	isFlipping.value = false; // 翻牌完成，設置標記為 false
};

onMounted(() => {
	const cardlist: {
		index: number;
		number: number;
		isFlip: boolean;
	}[] = Array.from({ length: 52 }, (_, index) => {
		return {
			index,
			number: index + 1,
			isFlip: false,
		};
	});
	pokerStore.setDisplayPool(cardlist);
});
</script>

<template>
	<div class="flex flex-col w-full gap-4">
		<div class="flex gap-2 w-full justify-center items-center">
			<UButton
				:label="isAllFlip ? '全部蓋上' : '全部翻開'"
				:disabled="isFlipping"
				@click="flipAll"
			/>
		</div>
		<div class="relative grid gap-x-2 gap-y-2 w-full grid-cols-[repeat(auto-fill,80px)] justify-center py-5">
			<template
				v-for="(card, index) in pokerStore.displayPool"
				:key="index"
			>
				<CardItem
					:is-flipping="isFlipping"
					:index="card.index"
					:number="card.number"
					:is-flip="card.isFlip"
					@procsee-filp="flip"
					@recover="recover"
				/>
			</template>
			<div
				v-if="isFlipping"
				class="absolute top-0 left-0 h-full w-full bg-gray-500 opacity-60 flex justify-center items-center"
			>
				<LoadingAni />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
