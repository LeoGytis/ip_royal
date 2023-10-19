<template>
  <div class="w-full bg-gray-50 rounded-l-3xl border-r border-gray-200 px-4 lg:px-6">
    <div class="flex flex-col gap-10 justify-between lg:h-5/6 text-gray-400">
      <div>
        <h1 class="flex justify-center text-2xl text-black font-bold py-10">
          WeHR
        </h1>
        <div class="flex flex-col gap-6 items-center lg:items-start mb-10">
          <h2 class="text-xs text-gray-300">MAIN MENU</h2>
          <div class="flex flex-row">
            <v-icon name="fa-cube" class="text-[#FF5151] mt-1 mr-4" />
            <div class="hidden lg:flex">Dashboard</div>
          </div>
          <div class="flex">
            <v-icon name="fa-user-plus" class="mt-1 mr-4" />
            <div class="hidden lg:flex">Recruitment</div>
          </div>
          <div class="flex">
            <v-icon name="fa-calendar-week" class="mt-1 mr-4" />
            <div class="hidden lg:flex">Schedule</div>
          </div>
          <div class="flex">
            <v-icon name="io-people" class="mt-1 mr-4" />
            <div class="hidden lg:flex"> Employee</div>
          </div>
          <div class="flex">
            <v-icon name="fa-school" class="mt-1 mr-4" />
            <div class="hidden lg:flex">Department</div>
          </div>
        </div>
        <div class="flex flex-col gap-6 items-center lg:items-start">
          <h2 class="text-xs text-gray-300">OTHER</h2>
          <div class="flex">
            <v-icon name="fa-headphones" class="mt-1 mr-4" />
            <div class="hidden lg:flex">Support</div>
          </div>
          <div class="flex">
            <v-icon name="io-settings" class="mt-1 mr-4" />
            <div class="hidden lg:flex">Settings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>