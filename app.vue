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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
