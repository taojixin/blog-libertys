<template>
  <div class="message-panle">
      <div class="msg">
        <i class="iconfont icon-liuyan"></i>
        <span>留言</span>
      </div>

      <div class="msg-box">
        <div class="first-floor">
          <div class="name">
            <div>昵称</div>
            <input type="text" v-model="name" />
          </div>
          <div class="email">
            <div>邮箱</div>
            <input type="text" v-model="email" />
          </div>
        </div>
        <div class="second-floor">
          <div class="text">
            <textarea v-model="content"></textarea>
          </div>
        </div>
        <div class="third-floor">
          <div class="left-third">
            <i class="iconfont icon-24gl-tags3"></i>
          </div>
          <div class="right-third">
            <div class="preview">预 览</div>
            <div class="send" @click="sendMsg">发 送</div>
          </div>
        </div>
        <div class="fourth-floor"></div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {sendMessage} from "../../../services"
let name = ref("")
let email = ref("")
let content = ref("")

function sendMsg() {
  sendMessage(name.value,content.value,email,true, 0).then(res => {
    if (res.code === 0) {
      console.log(res.data);
    }
  })
}
</script>

<style lang="less" scoped>
.message-panle {
  .msg {
    height: 60px;
    .iconfont {
      font-size: 50px;
      font-weight: bold;
      color: gray;
    }
    span {
      font-size: 30px;
      font-weight: bold;
      color: gray;
    }
  }

  .msg-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid black;
    padding: 10px 30px;

    .first-floor {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .name,
      .email {
        height: 40px;
        // padding: 0 10px;
        margin: 5px 0px;
        // box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 1;
        overflow: hidden;
        min-width: 300px;

        div {
          height: 38px;
          padding: 0 20px;
          line-height: 38px;
          background-color: #f1f1f2;
        }

        input {
          flex: 1;
          height: 37px;
          border: none;
          padding: 0 5px;
          border-left: 1px solid gray;
          outline: none;
        }
      }
    }
    .second-floor {
      width: 100%;
      textarea {
        box-sizing: border-box;
        width: 100%;
        outline: none;
        height: 100px;
        resize: none;
      }
    }
    .third-floor {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;

      .left-third {
        line-height: 50px;
      }
      .right-third {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 220px;
        .preview,
        .send {
          width: 100px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 3px;
          user-select: none;
          &:hover {
            cursor: pointer;
          }
        }
        .preview {
          background-color: #f1f1f2ef;
          color: gray;
        }
        .send {
          background-color: rgb(145, 204, 227);
          color: white;
        }
      }
    }
    .fourth-floor {
      height: 100px;
      border: 1px solid black;
      width: 100%;
    }
  }
}
</style>
