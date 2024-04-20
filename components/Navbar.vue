<script lang="ts" setup>
useHead({
  title: "Home",
});
</script>

<template>
  <header class="flex justify-between items-center">
    <div>
      <img src="/public/logo.png" alt="logo" width="100px" />
    </div>

    <div>
      <UButton class="bg-transparent hover:bg-transparent text-base font-rubik">Sign In</UButton>
    </div>
  </header>
</template>
