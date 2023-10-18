<script setup lang="ts">

// import gytis from "../../../public/images/gytis.png";


</script>

<template>
  <div class="w-full flex items-center justify-between px-4 lg:px-10 py-2 border-b border-gray-100">
    <div class="flex items-center text-gray-300">
      <v-icon name="fa-hamburger" class="block lg:hidden text-gray-300 mr-5" />


      <div class="flex items-center text-gray-300 border border-gray-200 bg-gray-50 rounded p-2">
        <div class="hidden lg:flex text-xs pr-48">Search</div>
        <AiOutlineSearch />
      </div>
    </div>
    <div class="flex items-center text-gray-500 gap-6 ">
      <div>
        <v-icon name="fa-bell" />

      </div>
      <div>
        <v-icon name="fa-chat" />

      </div>
      <div class="flex items-center text-xs font-semibold text-black">
        <img src={gytis} width={35} height={35} alt="profile" class="mr-2 rounded-full" />
        <div class="hidden lg:flex">Gytis Leonavicius</div>
        <div class="text-gray-500 pl-2">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
