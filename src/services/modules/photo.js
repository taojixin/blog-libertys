import request from "../request";

// 获取所有图片信息
export function getAllPhotos() {
  return request.get({
    url: "/admin/alioss/getallphoto"
  })
}