<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-7">
      <div
        class="border-solid border-2 border-emerald-300 border-r-8 rounded-md p-5"
        v-for="note in notes"
        :key="note.id"
      >
        <h3 class="text-xl underline font-bold mb-2">
          <NuxtLink :to="`/notes/${note.id}`">{{ note.title }}</NuxtLink>
        </h3>
        <p class="text-slate-500 mb-5">Created At {{ note.createdAt }}</p>
        <p class="text-lg">{{ note.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["notes"]);
</script>

<style lang="scss" scoped></style>
