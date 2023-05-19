import request from "../request";

// 获取文章列表
export function getArticles(count, offset) {
  return request.post({
    url: "/admin/articles/getarticles",
    data: {
      count,
      offset,
    },
  });
}
// 根据文章id获取某一篇文章
export function getArtDetails(articleId) {
  return request.post({
    url: "/admin/articles/queryisexistart",
    data: {
      articleId,
    },
  });
}

// 获取某篇文章评论信息
export function getCertainArtMsg(articleId, offset, count) {
  return request.post({
    url: "/blog/articles/getartmsg",
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
    url: "/blog/articles/commentart",
    data: { name, content, qq, reply, replyId, articleId },
  });
}
