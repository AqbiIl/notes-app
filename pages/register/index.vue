<template>
  <div>
    <Register class="flex justify-center h-screen" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
