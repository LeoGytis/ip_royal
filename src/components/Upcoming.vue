<script setup lang="ts">


</script>

<template>
  <div className="font-medium rounded-lg border border-gray-300">
    <div className="p-4">
      <div className="flex justify-between pb-4">
        <div className="font-semibold">Upcoming Schedule</div>
        <div
          className="flex items-center justify-between gap-4 text-xs rounded-lg text-gray-400 border border-gray-200 py-1 px-3">
          Today, 17 Oct 2023
          <v-icon name="fa-chevron-down" scale="0.8" class="text-gray-400 mx-1" />


        </div>
      </div>

      <div className="text-xs text-gray-500 pb-2">
        <div className="pb-2">Priority</div>
        <div className="flex justify-between items-center rounded-lg border border-gray-200 bg-gray-50 py-2 px-4">
          <div>
            <div className="text-sm text-gray-700 pb-1">
              Review candidate applications
            </div>
            <div>Today - 11:30</div>
          </div>
          <v-icon name="fa-chevron-down" scale="0.8" class="text-gray-400 mx-1" />


        </div>
      </div>

      <div className="text-xs text-gray-500 pb-2">
        <div className="pb-2">Other</div>
        <div className="flex justify-between items-center rounded-lg border border-gray-200 bg-gray-50 py-2 px-4 mb-2">
          <div>
            <div className="text-sm text-gray-700 pb-1">
              Interviewwith candidates
            </div>
            <div>Today - 13:30</div>
          </div>
          <v-icon name="fa-chevron-down" scale="0.8" class="text-gray-400 mx-1" />


        </div>
        <div className="flex justify-between items-center rounded-lg border border-gray-200 bg-gray-50 py-2 px-4">
          <div className="w-3/4">
            <div className="text-sm text-gray-700 pb-1">
              Short meeting with product designer from IT Departement
            </div>
            <div>Today - 9:30</div>
          </div>
          <v-icon name="fa-chevron-down" scale="0.8" class="text-gray-400 mx-1" />


        </div>
      </div>
    </div>
    <div className="flex justify-center rounded-b-lg border-t text-[#FF5151] py-2 px-6">
      Create a New Schedule
    </div>
  </div>
</template>

<style scoped></style>
    