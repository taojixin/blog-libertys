import request from "../request";

export function getAllArticles() {
  return request.post({
    url: "/admin/articles/getarticles"
  });
}