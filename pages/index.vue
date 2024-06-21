<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<template>
	<div>
		<div class="text-textColor-link hover:underline hover:font-medium">
			<NuxtLink to="/test">
				test page
			</NuxtLink>
		</div>
		<div class="my-[20px]">
			===
		</div>
		<div class="flex flex-col gap-2">
			exp: {{ userStore.exp }}
			<button
				class="w-fit py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-500"
				@click="userStore.incrementExp"
			>
				exp++
			</button>
			<button
				class="w-fit py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-500"
				@click="userStore.resetExp"
			>
				reset exp
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>

</style>
