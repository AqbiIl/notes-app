<template>
  <div>logout</div>
</template>

<script setup>
definePageMeta({
  middleware: function (to, from) {
    const token = useCookie("token");

    token.value = null;

    return navigateTo("/login");
  },
});
</script>

<style lang="scss" scoped></style>
