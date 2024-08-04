import http from "@/api/interseptors";

const productsApi = {
  get: () => http.get("/products?", { params: { page: 1, limit: 10 } }),
};

export default productsApi;
