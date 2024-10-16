<template>
  <div class="">
    <div
      class="bg-white shadow-lg rounded-lg px-24 py-20 grid justify-center self-center"
    >
      <h1 class="font-semibold text-3xl text-center">Register</h1>
      <div class="mt-10 grid">
        <h3 class="mb-2">Nama</h3>
        <input
          class="w-80 p-2 border-2 rounded-md border-solid focus:outline-emerald-500 border-emerald-200 mb-5"
          type="text"
          placeholder="Nama Anda"
          v-model="registerForm.name"
        />
        <h3 class="mb-2">Email</h3>
        <input
          class="w-80 p-2 border-2 rounded-md border-solid focus:outline-emerald-500 border-emerald-200 mb-5"
          type="email"
          placeholder="Email Anda"
          v-model="registerForm.email"
        />
        <h3 class="mb-2">Password</h3>
        <input
          class="w-80 p-2 border-2 rounded-md border-solid focus:outline-emerald-500 border-emerald-200 mb-5"
          type="password"
          placeholder="Password Anda"
          v-model="registerForm.password"
        />
        <button
          class="transition ease-in-out delay-150 hover:bg-emerald-500 bg-emerald-700 shadow-md text-white rounded-md px-8 py-2 font-semibold"
          @click="register"
        >
          Register
        </button>
        <p class="text-center mt-7">
          Sudah punya akun?
          <NuxtLink to="/login" class="text-blue-500 hover:underline"
            >Login</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const registerForm = ref({
  name: "",
  email: "",
  password: "",
});

async function register() {
  const { data, error } = await useFetch(
    "https://notes-api.dicoding.dev/v1/register",
    {
      method: "POST",
      body: {
        name: registerForm.value.name,
        email: registerForm.value.email,
        password: registerForm.value.password,
      },
    }
  );
  if (error.value) {
    alert(error.value.data.message);
  } else {
    await navigateTo("/login");
  }
}
</script>

<style scoped></style>
