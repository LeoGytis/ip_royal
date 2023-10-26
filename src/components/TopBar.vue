<template>
  <div class="topbar-container">
    <div class="topbar-wrapper">
      <v-icon name="fa-bars" class="search-icons" />
      <div class="topbar-wrapper border topbar-border">
        <div class="search-placeholder">Search</div>
        <v-icon name="fa-search" class="search-icons" />
      </div>
    </div>
    <div class="topbar-wrapper">
      <v-icon name="fa-comment-dots" />
      <v-icon name="fa-bell" />
      <div class="topbar-wrapper text-xs font-semibold ">
        <img src="../images/gytis.png" alt="profile" class="img_style mr-2 rounded-full" />
        <div class="hidden lg:flex text-black">Gytis Leonavicius</div>
        <v-icon name="fa-chevron-down" scale="0.8" class="text-gray-500 mx-1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_style {
  width: 30px;
  height: 30px;
}
</style>
