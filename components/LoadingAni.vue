<script setup lang='ts'>
</script>

<template>
	<div class="text-[5rem] font-extrabold flex flex-row">
		<div class="loading">
			F
		</div>
		<div class="loading">
			l
		</div>
		<div class="loading">
			i
		</div>
		<div class="loading">
			p
		</div>
		<div class="loading">
			p
		</div>
		<div class="loading">
			i
		</div>
		<div class="loading">
			n
		</div>
		<div class="loading">
			g
		</div>
		<div class="loading">
			.
		</div>
		<div class="loading">
			.
		</div>
		<div class="loading">
			.
		</div>
	</div>
</template>

<style lang="scss" scoped>
.loading {
	animation: jump 1s ease-in infinite;
}

.loading:nth-child(even) {
	animation-delay: 0.1s;
}

.loading:nth-child(odd) {
	animation-delay: 0.3s;
}

@keyframes jump {
	0%, 100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-15px);
	}
}
</style>
