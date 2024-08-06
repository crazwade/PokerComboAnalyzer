<script setup lang="ts">
const props = defineProps<{
	modelValue: boolean;
	number: number;
}>();
const emit = defineEmits(['close']);

const visible = computed(() => props.modelValue);

const getSuit = (number: number): string => {
	if (number <= 13) {
		return '黑桃';
	}
	else if (number <= 26) {
		return '紅心';
	}
	else if (number <= 39) {
		return '方塊';
	}
	else {
		return '梅花';
	}
};

const getNumber = (number: number): string => {
	const suit = getSuit(number);
	const cardNumber = (number % 13);
	switch (cardNumber) {
		case 1:
			return `${suit} A`;
		case 11:
			return `${suit} J`;
		case 12:
			return `${suit} Q`;
		case 0:
			return `${suit} K`;
		default:
			return `${suit} ${cardNumber}`;
	}
};

const onSuccess = () => {
	emit('close');
};
</script>

<template>
	<div>
		<UModal
			v-model="visible"
			:transition="true"
			overlay
			prevent-close
			@click="onSuccess"
		>
			<div class="p-4">
				<div class="flex flex-row pb-2 gap-2">
					<UButton
						color="orange"
						size="xs"
						variant="outline"
					>
						{{ getSuit(number) }}
					</UButton>
					<UButton
						color="pink"
						size="xs"
						variant="outline"
					>
						{{ getNumber(number) }}
					</UButton>
				</div>
				<Img
					:src="`image/poker/${number}.webp`"
					fit="contain"
					width="80"
					class="card_item back"
				/>
			</div>
			<UButton
				variant="solid"
				@click="onSuccess"
			>
				關閉
			</UButton>
		</UModal>
	</div>
</template>

<style scoped></style>
