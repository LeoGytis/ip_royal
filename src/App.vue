<script setup lang="ts">
import NavMenu from './components/NavMenu.vue';
import TopBar from './components/TopBar.vue';
import Dashboard from './components/Dashboard.vue';
</script>

<template>
  <div class="app_container">
    <div class="wrapper">
      <header class="header">
        <!-- <header class="hidden sm:flex w-1/6"> -->
        <NavMenu />
      </header>
      <main class="main">
        <TopBar />
        <Dashboard />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
