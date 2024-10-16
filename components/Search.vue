<template>
  <div>
    <div class="p-7">
      <h1 class="font-bold text-2xl mb-5">{{ props.title }}</h1>
      <input
        type="text"
        placeholder="Search by title..."
        class="p-2 w-full border-solid border-2 rounded-md border-emerald-200 focus:outline-emerald-500"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title"]);
</script>

<style lang="scss" scoped></style>
