const baseURL =
  process.env.BASE_URL || "http+unix://%2Fvar%2Frun%2Fdocker.sock";

const port = process.env.PORT || "4000";

export { baseURL, port };
