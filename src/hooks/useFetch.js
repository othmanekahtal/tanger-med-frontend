export const useFetch = {
  async get(url, token = null) {
    const Headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    token && (Headers["Authorization"] = `Bearer ${token}`);
    return await fetch(url, {
      method: "GET",
      //   credentials: "include",
      headers: Headers,
    });
  },

  async post(url, body, token = null) {
    const Headers = {
      "Content-Type": "application/json",
    };
    token && (Headers["Authorization"] = `Bearer ${token}`);
    return await fetch(url, {
      method: "POST",
      //   credentials: "include",
      headers: Headers,
      body: JSON.stringify(body),
    });
  },
};
