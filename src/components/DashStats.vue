<script setup lang="ts">
</script>;

<template>
  <div className="font-medium">
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <div className="sm:w-1/3 bg-orange-100 rounded-lg py-4 px-6">
        <div>Available Position</div>
        <div className="text-2xl py-2">24</div>
        <div className="text-sm text-orange-400">4 Urgently needed</div>
      </div>
      <div className="sm:w-1/3 bg-sky-100 rounded-lg py-4 px-6">
        <div>Available Position</div>
        <div className="text-2xl py-2">10</div>
        <div className="text-sm text-sky-400">4 Active hiring</div>
      </div>
      <div className="sm:w-1/3 bg-rose-100 rounded-lg py-4 px-6">
        <div>New Employees</div>
        <div className="text-2xl py-2">24</div>
        <div className="text-sm text-rose-400">4 Department</div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 ">
      <div className="flex sm:w-1/2 justify-between border border-neutral-200 rounded-lg p-4">
        <div>
          <div className="text-lg">Total Employees</div>
          <div className="text-4xl pt-3 pb-6">216</div>
          <div className="text-xs text-neutral-400">120 Men</div>
          <div className="text-xs text-neutral-400">96 Women</div>
        </div>
        <div className="flex flex-col gap-4 justify-evenly items-center">
          <img src="../images/scale.png" class="img_style" alt="scale" />
          <div className="text-xs bg-rose-100 rounded-lg p-1 px-3">
            +2% Past month
          </div>
        </div>
      </div>
      <div className="flex sm:w-1/2 justify-between border border-neutral-200 rounded-lg p-4">
        <div>
          <div className="text-lg">Talent Request</div>
          <div className="text-4xl pt-3 pb-6">16</div>
          <div className="text-xs text-neutral-400">6 Men</div>
          <div className="text-xs text-neutral-400">10 Women</div>
        </div>
        <div className="flex flex-col gap-4 justify-evenly items-center">
          <img src="../images/scale5.png" class="img_style" alt="scale5" />
          <div className="text-xs bg-rose-100 rounded-lg p-1 px-3">
            +5% Past month
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_style {
  width: 150px;
  height: 100px;
}
</style>