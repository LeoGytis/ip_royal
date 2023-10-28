<template>
  <div class="mx-auto min-h-screen flex items-center justify-center p-2">
    <div class="flex w-full bg-white border-8 border-[#FF7D7D] rounded-3xl">
      <header class="hidden sm:flex w-1/6">
        <NavMenu />
      </header>
      <main class="flex flex-col w-full">
        <TopBar />
        <Dashboard />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
