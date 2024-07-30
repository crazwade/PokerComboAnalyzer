<script setup lang='ts'>
import CardModal from './CardModal.vue';

const selected = ref(false);
const modalVisible = ref(false);

const emit = defineEmits<{
	(e: 'procseeFilp', index: number, isFlip: boolean): void;
	(e: 'recover', index: number): void;
}>();

const props = defineProps<{
	index?: number;
	number: number;
	isFlip: boolean;
	isFlipping: boolean;
}>();

const recover = () => {
	selected.value = false;
	emit('recover', props.index!);
};

const flip = () => {
	if (props.isFlipping) {
		return;
	}

	selected.value = true;
};
</script>

<template>
	<div
		class="w-fit"
		@mouseenter="emit('procseeFilp', index!, isFlip)"
		@mouseleave="emit('procseeFilp', index!, isFlip)"
	>
		<div
			v-if="!selected"
			class="card_wrap"
			@click="flip"
		>
			<div
				class="card"
				:class="{ flip: isFlip }"
			>
				<NuxtImg
					src="/image/poker/pokerBack.webp"
					fit="contain"
					width="80"
					class="card_item front"
				/>
				<NuxtImg
					:src="`/image/poker/${number}.webp`"
					fit="contain"
					width="80"
					class="card_item back"
				/>
			</div>
		</div>

		<div
			v-else
			class="card_wrap selected relative"
		>
			<UButton
				class="absolute top-0 right-0"
				icon="i-heroicons-x-mark-20-solid"
				size="2xs"
				color="red"
				square
				variant="solid"
				@click="recover"
			/>
			<NuxtImg
				:src="`/image/poker/${number}.webp`"
				fit="contain"
				width="80"
				style="width: 100%; height: 100%"
				@click="modalVisible = true"
			/>
		</div>
		<CardModal
			:model-value="modalVisible"
			:number="number"
			@close="modalVisible = false"
		/>
	</div>
</template>

<style lang="scss" scoped>
.card_wrap {
	display: inline-block;
	width: 80px;
	height: 120px;
	box-sizing: border-box;
	&.selected {
		border: 1px solid red;
	}
}

.card {
  width: 100%;
	height: 100%;
	transition: all 0.578s ease;
	transform-style: preserve-3d;
	&.flip {
		transform: rotateY(180deg);
	}
}

.card_item {
	width: 100%;
	height: 100%;
	position: absolute;
  left: 0;
  top: 0;
}

.front{
  backface-visibility: hidden;
}

.back{
  backface-visibility: hidden;
  transform: rotateY(180deg);
  box-sizing: border-box;
}
</style>
