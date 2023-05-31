import request from "../request";

// 获取所有图片信息
export function getTimeline() {
  return request.get({
    url: "/admin/daily/gettimeline"
  })
}