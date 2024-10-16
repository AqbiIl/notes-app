<template>
  <div
    class="flex justify-center h-screen content-center py-16 overflow-y-scroll"
  >
    <div
      class="w-full max-w-5xl bg-white rounded-lg relative min-h-[80vh] h-max shadow-xl"
    >
      <Header />
      <div class="p-7">
        <h1 class="text-5xl font-bold mb-5">{{ data.data.title }}</h1>
        <p class="text-slate-500 mb-7">Created At {{ data.data.createdAt }}</p>
        <p class="text-xl">{{ data.data.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const token = useCookie("token").value;
const { data } = await useFetch(
  `https://notes-api.dicoding.dev/v1/notes/${id}`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
