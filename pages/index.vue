<template>
  <div
    class="flex justify-center h-screen content-center py-16 overflow-y-scroll"
  >
    <div
      class="w-full max-w-5xl bg-white rounded-lg relative min-h-[80vh] h-max shadow-xl"
    >
      <Header />
      <Search title="Active Note" />
      <Notes :notes="data.data" />
      <AddBtn />
    </div>
  </div>
</template>

<script setup>
const token = useCookie("token").value;
const { data } = await useFetch("https://notes-api.dicoding.dev/v1/notes", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped></style>
