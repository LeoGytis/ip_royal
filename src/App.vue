<script setup lang="ts">
import Activity from './components/Activity.vue';
import NavMenu from './components/NavMenu.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <div class="mx-auto min-h-screen flex items-center justify-center p-2">
    <div class="flex w-full bg-white border-8 border-[#FF7D7D] rounded-3xl">
      <header class="hidden sm:flex w-1/6">
        <NavMenu />
      </header>
      <main class="flex flex-col w-full">
        <TopBar />
        <!-- <Dashboard /> -->
        <Activity />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
