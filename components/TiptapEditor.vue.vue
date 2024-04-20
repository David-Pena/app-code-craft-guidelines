<script setup>
import { onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const editor = ref(null);

onMounted(() => {
  editor.value = new TiptapEditor({
    extensions: [TiptapStarterKit],
    content: props.modelValue,
    onUpdate: () => {
      emits("update:modelValue", editor.value.getHTML());
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});
</script>

<template>
  <!-- <div v-if="editor">
    <button
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
    >
      bold
    </button>
  </div> -->
  <TiptapEditorContent :editor="editor" />
</template>

<style>
.tiptap {
  padding: 20px;
  min-height: 600px;
}
</style>
