import request from "../request";

export function getMessage(count, offset) {
  return request.post({
    url: "/blog/message/getmsg",
    data: {
      count,
      offset,
    },
  });
}

export function sendMessage(name, content, email, reply, replyId) {
  return request.post({
    url: "/blog/message/makemsg",
    data: {
      name,
      content,
      email,
      reply,
      replyId,
    },
  });
}
