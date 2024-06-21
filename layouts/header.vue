<script setup lang='ts'>
const isOpen = ref(false);
</script>

<template>
	<div class="h-[60px] text-textColor-default p-4 pb-2">
		<UButton
			color="gray"
			variant="solid"
			class="w-[32px] h-[32px] justify-center items-center"
			square
			@click="isOpen = true"
		>
			<UIcon
				class="w-[18px] h-[18px]"
				name="charm:menu-hamburger"
				dynamic
			/>
		</UButton>

		<USlideover
			v-model="isOpen"
			:side="'left'"
		>
			<div class="p-4 flex-1 bg-bgColor-sidebar">
				<UButton
					color="gray"
					variant="ghost"
					size="sm"
					icon="i-heroicons-x-mark-20-solid"
					class="flex sm:hidden absolute end-5 top-5 z-10"
					square
					padded
					@click="isOpen = false"
				/>
				<Placeholder class="h-full" />
			</div>
		</USlideover>
	</div>
</template>

<style lang="scss" scoped>

</style>
