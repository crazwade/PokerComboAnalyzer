<script setup lang='ts'>
import { useUserStore } from './stores/userStore';

const userStore = useUserStore();

</script>

<template>
  <div>
    <div class="text-pink-500 bg-gray-500">
      test tailwind
    </div>
    <div class="my-[20px]">
      ===
    </div>
    <div class="flex flex-col gap-2">
      exp: {{ userStore.exp }}
      <button
        @click="userStore.incrementExp"
        class="w-fit py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-500"
      >
        exp++
      </button>
      <button
        @click="userStore.resetExp"
        class="w-fit py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-500"
      >
        reset exp
      </button>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
