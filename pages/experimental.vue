<template>
  <div>
    <Navbar />
    <main class="flex justify-center">
      <div class="w-[600px] border-2 border-secondary h-[600px]">
        <TiptapEditorVue v-model="content" />
      </div>
    </main>
  </div>
</template>

<script setup>
const content = ref(
  "<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>"
);
</script>
