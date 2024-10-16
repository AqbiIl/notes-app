<template>
  <div>
    <div
      class="bg-white shadow-lg rounded-lg px-24 py-20 grid justify-center self-center"
    >
      <h1 class="font-semibold text-3xl text-center">Login</h1>
      <div class="mt-10 grid">
        <h3 class="mb-2">Email</h3>
        <input
          class="w-80 p-2 border-2 rounded-md border-solid focus:outline-emerald-500 border-emerald-200 mb-5"
          type="email"
          placeholder="Email Anda"
          v-model="loginForm.email"
        />
        <h3 class="mb-2">Password</h3>
        <input
          class="w-80 p-2 border-2 rounded-md border-solid focus:outline-emerald-500 border-emerald-200 mb-5"
          type="password"
          placeholder="Password Anda"
          v-model="loginForm.password"
        />
        <button
          class="transition ease-in-out delay-150 hover:bg-emerald-500 bg-emerald-700 shadow-md text-white rounded-md px-8 py-2 font-semibold"
          @click="login"
        >
          Login
        </button>
        <p class="text-center mt-7">
          Belom punya akun?
          <NuxtLink to="/register" class="text-blue-500 hover:underline"
            >Register</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const loginForm = ref({
  email: "",
  password: "",
});

async function login() {
  const { data, error } = await useFetch(
    "https://notes-api.dicoding.dev/v1/login",
    {
      method: "POST",
      body: {
        email: loginForm.value.email,
        password: loginForm.value.password,
      },
    }
  );
  if (error.value) {
    alert(error.value.data.message);
  } else {
    console.log(data.value.message);
    const token = useCookie("token");
    token.value = data.value.data.accessToken;
    console.log(token.value);
    useRouter().push("/");
  }
}
</script>

<style lang="scss" scoped></style>
