<script setup lang='ts'>
import CurrentTime from '~/components/CurrentTime.vue';

const isOpen = ref(false);

const router = useRouter();

enum routeName {
	index = '首頁',
	test = '測試頁',
}

enum routeIcon {
	index = 'material-symbols:other-houses',
	test = 'material-symbols:person-rounded',
}
</script>

<template>
	<div class="h-[60px] text-textColor-default p-4 pb-2">
		<div class="flex items-center justify-between">
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

			<CurrentTime />
		</div>

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
				<div class="mt-[44px] flex flex-col gap-2">
					<template
						v-for="(route) in router.options.routes"
						:key="route.name"
					>
						<div class="w-fit flex items-center gap-2 font-mono hover:text-textColor-link">
							<UIcon
								:name="routeIcon[route.name as keyof typeof routeName]"
								dynamic
							/>
							<NuxtLink
								:to="`/${String(route.name === 'index' ? '' : route.name)}`"
								@click="isOpen = false"
							>
								{{ routeName[route.name as keyof typeof routeName] }}
							</NuxtLink>
						</div>
					</template>
				</div>
			</div>
		</USlideover>
	</div>
</template>

<style lang="scss" scoped>

</style>
