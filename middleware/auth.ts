export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("token");

  try {
    const response: any = await $fetch(
      "https://notes-api.dicoding.dev/v1/users/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    if (
      response.status == "success" &&
      (to.path == "/login" || to.path == "/register")
    ) {
      return navigateTo("/");
    }
  } catch {
    if (to.path == "/login" || to.path == "/register") {
      return;
    }

    return navigateTo("/login");
  }
});
