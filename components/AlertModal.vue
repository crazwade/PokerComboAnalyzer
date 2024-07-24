<script setup lang="ts">
const props = defineProps<{
	modelValue: boolean;
	number: number;
}>();
const emit = defineEmits(['close']);

const visible = computed(() => props.modelValue);

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
			@click="onSuccess"
		>
			<div class="p-4">
				{{ number }}
			</div>
			<UButton
				variant="solid"
				@click="onSuccess"
			>
				Click to emit a success event
			</UButton>
		</UModal>
	</div>
</template>

<style scoped></style>
