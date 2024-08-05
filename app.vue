<script setup lang='ts'>
import { version } from './package.json';
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
	<div class="absolute top-0 right-5 text-xs opacity-15">
		ver {{ version }}
	</div>
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
