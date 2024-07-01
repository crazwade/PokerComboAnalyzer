<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore';
import DisplayArea from '@/components/index/displayArea.vue';
import AnalysisArea from '@/components/index/analysisArea.vue';
import Index from '@/components/index/index.vue';

const userStore = useUserStore();

const items = [
	{
		slot: 'index',
		label: '首頁',
	},
	{
		slot: 'displayArea',
		label: '展示',
	},
	{
		slot: 'analysisArea',
		label: '分析',
	},
];
</script>

<template>
	<div class="px-2">
		<UTabs
			:items="items"
			:default-index="0"
		>
			<template #index>
				<Index />
			</template>
			<template #displayArea>
				<DisplayArea />
			</template>
			<template #analysisArea>
				<AnalysisArea />
			</template>
		</UTabs>
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
