import request from "../request";

// 获取留言信息
export function getMessage(count, offset) {
  return request.post({
    url: "/blog/message/list",
    data: {
      count,
      offset,
    },
  });
}

// 进行留言
export function sendMessage(name, content, qq, reply, replyId) {
  return request.post({
    url: "/blog/message/create",
    data: {
      name,
      content,
      qq,
      reply,
      replyId,
    },
  });
}
