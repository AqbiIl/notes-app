<template>
  <div>
    <header
      class="border-b-2 border-solid border-emerald-300 flex justify-between px-7 py-6"
    >
      <h1 class="font-bold text-3xl underline">
        <NuxtLink to="/">Notes App</NuxtLink>
      </h1>
      <div class="flex gap-5 text-xl">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/archived" class="underline">Archived</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <button><NuxtLink to="/logout">Logout</NuxtLink></button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style scoped></style>
