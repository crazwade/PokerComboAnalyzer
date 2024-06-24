<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
</script>

<template>
	<div class="text-textColor-mark text-sm">
		{{ userStore.currentTime }}
	</div>
</template>

<style scoped></style>
