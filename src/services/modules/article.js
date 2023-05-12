import request from "../request";

// 获取文章列表
export function getArticles(count, offset) {
  return request.post({
    url: "/admin/articles/getarticles",
    data: {
      count,offset
    }
  });
}
// 根据文章id获取某一篇文章
export function getArtDetails(articleId) {
  return request.post({
    url: "/admin/articles/queryisexistart",
    data: {
      articleId
    }
  })
}