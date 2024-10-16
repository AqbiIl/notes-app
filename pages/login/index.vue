<template>
  <div>
    <Login class="flex justify-center h-screen" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped></style>
