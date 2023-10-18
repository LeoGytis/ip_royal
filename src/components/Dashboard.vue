
<script setup lang="ts">
import Activity from './Activity.vue';
import Upcoming from './Upcoming.vue';
import DashStats from './DashStats.vue';
import Announcement from './Announcement.vue';
</script>;

<template>
  <div className="h-full p-6 px-4 lg:px-10">
    <div className="text-xl font-medium pb-4">Dashboard</div>
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4 w-full lg:w-2/3">
        <DashStats />
        <Announcement />
      </div>
      <div className="flex flex-col lg:w-1/3 gap-4">
        <Activity />
        <Upcoming />
      </div>
    </div>
  </div>
</template>

<style scoped></style>