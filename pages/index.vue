<script setup lang='ts'>
import DisplayArea from '@/components/index/displayArea.vue';
import AnalysisArea from '@/components/index/analysisArea.vue';

const items = [
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
			<template #displayArea>
				<DisplayArea />
			</template>
			<template #analysisArea>
				<AnalysisArea />
			</template>
		</UTabs>
	</div>
</template>

<style lang="scss" scoped>

</style>
