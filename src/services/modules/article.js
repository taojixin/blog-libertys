import request from "../request";

// 获取文章列表
export function getArticles(count, offset) {
  return request.get({
    url: "/admin/articles",
    params: {
      count,
      offset,
    },
  });
}
// 根据文章id获取某一篇文章
export function getArtDetails(articleId) {
  return request.post({
    url: "/admin/article/exist",
    data: {
      articleId,
    },
  });
}

// 获取某篇文章评论信息
export function getCertainArtMsg(articleId, offset, count) {
  return request.post({
    url: "/blog/article/comments",
    data: {
      articleId,
      offset,
      count,
    },
  });
}

// 给某篇文章进行留言
export function commentArtMsg(name, qq, content, articleId, reply, replyId) {
  return request.post({
    url: "/blog/article/comment/create",
    data: { name, content, qq, reply, replyId, articleId },
  });
}

// 获取所有标签
export function getAllLabels() {
  return request.get({
    url: "/admin/labels",
  });
}

// 根据标签id获取文章列表
export function getArticlesLabel(labelId) {
  return request.get({
    url: `/admin/article/${labelId}`,
  });
}
