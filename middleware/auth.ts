export default defineNuxtRouteMiddleware(async (to, from) => {
  const authenticated = useCookie("token");

  try {
    const response: any = await $fetch(
      "https://notes-api.dicoding.dev/v1/users/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authenticated.value}`,
        },
      }
    );
  } catch {
    if (to.path == "/login" || to.path == "/register") {
      return;
    }

    return navigateTo("/login");
  }
});
