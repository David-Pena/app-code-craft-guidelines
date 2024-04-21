<template>
  <div>
    <Navbar />
    <main class="flex flex-col justify-center">
      <div class="w-full">
        <TiptapEditor v-model="content" />
      </div>
    </main>
  </div>
</template>

<script setup>
const content = ref("");
</script>
