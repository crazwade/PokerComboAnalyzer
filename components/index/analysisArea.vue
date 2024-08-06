<script setup lang='ts'>
import CardItem from '../CardItem.vue';
import { usePokerStore } from '@/stores/usePoker.js';
import { findStraightSameSuit } from '@/common/analysisCommon/findStraightSameSuit';
import { findSameSuit } from '@/common/analysisCommon/findSameSuit';
import { findPair } from '@/common/analysisCommon/findPair';
import { findPairAndStraightSameSuit } from '@/common/analysisCommon/findPairAndStraightSameSuit';
import { findSameFour } from '@/common/analysisCommon/findSameFour';
import { findStraightSame } from '@/common/analysisCommon/findStraightSame';
import { findFullhouse } from '@/common/analysisCommon/findFullhouse';
import { findSameThree } from '@/common/analysisCommon/findSameThree';
import type { Card } from '@/stores/usePoker';
import type { Hand } from '@/common/analysisCommon/type';

const pokerStore = usePokerStore();
const isFlipping = ref<boolean>(false);
const isSpreadOut = ref<boolean>(false);
const colddown = ref<boolean>(false);
const selectedCombo = ref<number>(0);
const comboCards = ref<Card[][]>([]);

const combos = [
	{
		label: '同花順',
		value: 'findStraightSameSuit',
		fun: findStraightSameSuit,
	}, {
		label: '同花',
		value: 'findSameSuit',
		fun: findSameSuit,
	}, {
		label: '一對',
		value: 'findPair',
		fun: findPair,
	}, {
		label: '對子同花',
		value: 'findPairAndStraightSameSuit',
		fun: findPairAndStraightSameSuit,
	}, {
		label: '鐵支',
		value: 'findSameFour',
		fun: findSameFour,
	}, {
		label: '順子',
		value: 'findStraightSame',
		fun: findStraightSame,
	}, {
		label: '葫蘆',
		value: 'findFullhouse',
		fun: findFullhouse,
	}, {
		label: '三條',
		value: 'findSameThree',
		fun: findSameThree,
	},
];

const clear = () => {
	colddown.value = true;
	isSpreadOut.value = false;
	comboCards.value = [];
	pokerStore.clearPokerHands();
	setTimeout(() => {
		colddown.value = false;
	}, 1000);
};

const flop = () => {
	pokerStore.newPokerHands();
	isSpreadOut.value = true;
};

watch([() => selectedCombo.value, () => isSpreadOut.value], ([val1, val2]: [number, boolean]) => {
	const combosTmp = combos[selectedCombo.value].fun(pokerStore.combohands);
	let comboHands: Hand[][] | null = [];

	if (combosTmp === null || !val2) {
		comboHands = [];
		comboCards.value = [];
		return;
	}

	comboHands = [...combos[val1].fun(pokerStore.combohands, true)];

	comboCards.value = comboHands.map((hand: Hand[]) => {
		return pokerStore.transferHandtoCard(hand);
	});
});
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
		<div class="w-full">
			<UTabs
				v-model="selectedCombo"
				:items="combos"
			/>
			<div
				class="flex flex-col gap-y-2"
			>
				<UCard
					v-if="comboCards.length === 0"
					class="text-center text-white"
				>
					沒有匹配
				</UCard>
				<UCard
					v-for="(cards, comboCardsIndex) in comboCards"
					v-else
					:key="comboCardsIndex"
				>
					<div class="w-full flex flex-row flex-wrap justify-center">
						<CardItem
							v-for="(card, index) in cards"
							:key="index"
							:is-flipping="isFlipping"
							:number="card.number"
							:is-flip="card.isFlip"
						/>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cardpool {
	transition: 1s;
}
</style>
