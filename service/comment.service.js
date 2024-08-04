import http from "@/api/interseptors";

const comment = {
  get: (id) =>
    http.get("/product-comments", { params: { id, page: 1, limit: 10 } }),
  post: (commentData) => http.post("/comment", commentData),
};

export default comment;
