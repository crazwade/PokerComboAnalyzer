<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

onMounted(() => {
	// 設定時間
	userStore.setCurrentTime(Date.now());
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
