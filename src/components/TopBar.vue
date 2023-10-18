<script setup lang="ts">
</script>

<template>
  <div class="w-full flex items-center justify-between px-4 lg:px-10 py-2 border-b border-gray-100">
    <div class="flex items-center text-gray-300">
      <v-icon name="fa-bars" class="block lg:hidden text-gray-300 mr-5" />
      <div class="flex items-center text-gray-300 border border-gray-200 bg-gray-50 rounded p-2">
        <div class="hidden lg:flex text-xs pr-48">Search</div>
        <v-icon name="fa-search" class="block lg:hidden text-gray-300" />
      </div>
    </div>
    <div class="flex items-center text-gray-500 gap-6 ">
      <v-icon name="fa-comment-dots" />
      <div>
        <v-icon name="bi-ChatDotsFill" />
        <v-icon name="fa-bell" />
      </div>
      <div class="flex items-center text-xs font-semibold text-black">
        <img src="../images/gytis.png" alt="profile" class="mr-2 rounded-full" />
        <div class="hidden lg:flex">Gytis Leonavicius</div>
        <div class="text-gray-500 pl-2">
          <v-icon name="fa-chevron-down" class="img_style block lg:hidden text-gray-300 mr-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_style {
  width: 35px;
  height: 35px;
}
</style>
