export const useFetch = {
  async get(url) {
    const response = await fetch(url, {
      method: "GET",
      //   credentials: "include",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
    });
    return await response.json();
  },

  async post(url, body) {
    return await fetch(url, {
      method: "POST",
      //   credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
  },
};
