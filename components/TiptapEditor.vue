<script setup>
import { TiptapDocument } from "#imports";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const CustomDocument = TiptapDocument.extend({
  content: "heading block*",
});

const editor = ref(null);

onMounted(() => {
  editor.value = new TiptapEditor({
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert border border-gray-400 p-4 min-h-[32rem] max-h-[32rem] overflow-y-auto outline-none max-w-none",
      },
    },
    extensions: [
      CustomDocument,
      TiptapStarterKit.configure({
        document: false,
      }),
      TiptapPlaceholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What's the title?";
          }

          return "Can you add some further context?";
        },
      }),
    ],
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
  <section
    v-if="editor"
    class="buttons flex justify-between items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4"
  >
    <span>Enter / to see all you can do</span>
    <div class="flex gap-3">
      <UButton
        :color="editor.isActive('bold') ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
      >
        bold
      </UButton>
      <UButton
        :color="editor.isActive('italic') ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
      >
        italic
      </UButton>
      <UButton
        :color="editor.isActive('code') ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
      >
        code
      </UButton>
      <UButton
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </UButton>
      <UButton
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </UButton>
      <UButton
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </UButton>
      <UButton
        :color="editor.isActive('codeBlock') ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </UButton>
      <UButton
        :color="editor.isActive('blockquote') ? 'primary' : 'white'"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </UButton>
      <UButton
        color="white"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        undo
      </UButton>
      <UButton
        color="white"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        redo
      </UButton>
    </div>
  </section>
  <TiptapEditorContent :editor="editor" />
</template>

<style>
.tiptap .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #c4c4c4;
  pointer-events: none;
  font-weight: 400;
  height: 0;
}
</style>
