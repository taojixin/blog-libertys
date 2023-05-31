<template>
  <div class="record" v-show="isShow">
    <NavBar />
    <div class="first-floor">
      <span>记 录</span>
      <p>须知少时凌云志，曾许人间第一流!</p>
    </div>
    <div class="second-floor">
      <template v-for="(item,index) in timeline" :key="item.id">
        <div class="odd" v-if="index % 2 === 0">
          <div class="left">
            <div class="box">
              <div class="time">{{ item.time }}</div>
              <div class="p">{{ item.record }}</div>
            </div>
          </div>
          <div class="center"></div>
          <div class="right"></div>
        </div>
        <div class="even" v-else>
          <div class="left"></div>
          <div class="center"></div>
          <div class="right">
            <div class="box">
              <div class="time">{{ item.time }}</div>
              <div class="p">{{ item.record }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTimeline } from "../../../services/modules/daily";
import {formatTime} from '../../../utils/formatTime'
const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});
const timeline = ref([
  { id: 1, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 2, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 3, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 4, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 5, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 6, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 7, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 8, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 9, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 10, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 11, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
  { id: 12, time: "20200-09-06", record: "购买云服务器，部署项目的云服务器。" },
]);

getTimeline().then(res => {
  const result = res.data.map(item => {
    return {
      id: item.id,
      time: formatTime(item.time),
      record: item.content
    }
  })
  timeline.value = result
})
</script>

<style lang="less" scoped>
.record {
  .second-floor {
    background-color: white;
    // height: 500px;
    width: 80vw;
    margin: 0 auto;
    .odd,
    .even {
      height: 100px;
      position: relative;
      .left {
        width: 40vw;
        height: 100%;
        box-sizing: border-box;
        float: left;
      }
      .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 15px;
        border-radius: 15px;
        margin-left: 1px;
      }
      .right {
        width: 40vw;
        height: 100%;
        float: right;
        box-sizing: border-box;
        border-left: 3px solid skyblue;
      }
      .box {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        height: 60px;
        min-width: 300px;
        border: 2px solid skyblue;
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 0 10px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }

        .time {
          font-size: 14px;
          color: rgb(45, 178, 231);
          width: 100px;
          font-weight: bold;
        }
        .p {
          flex: 1;
          font-size: 14px;
        }
      }
    }
    .odd {
      .left {
        position: relative;
        .box {
          right: 30px;

          &::before {
            border-left: 10px solid skyblue;
            right: -10px;
          }
        }
      }
      .center {
        background-color: white;
        border: 3px solid skyblue;
      }
    }
    .even {
      .center {
        background-color: skyblue;
        border: 3px solid white;
        z-index: 5;
      }
      .right {
        position: relative;
        .box {
          left: 30px;

          &::before {
            border-right: 10px solid skyblue;
            left: -10px;
          }
        }
      }
    }
  }
  .first-floor {
    background: url("https://img.libertys.cn/blog/bg6.jpg") no-repeat;
    height: 40vh;
    width: 100vw;
    background-size: cover;
    background-position: 30% center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(182, 174, 174);
    font-weight: bold;
    font-size: 40px;
    p {
      font-size: 14px;
      color: rgb(150, 147, 147);
    }
  }
}

@media (max-width: 500px) {
  .record {
    .second-floor {
      width: 100vw;
      .odd,
      .even {
        .left {
          width: 50vw;
        }
        .right {
          width: 50vw;
          border-left: 2px solid skyblue;
        }
        .center {
          width: 8px;
          height: 8px;
          border-radius: 8px;
          margin-left: 1.5px;
        }
        .box {
          min-width: 0;
          height: 50px;
          border: 2px solid skyblue;
          padding: 5px 2px;
          &::before {
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
          }
          .time {
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 12px;
            font-weight: normal;
            width: 80px;
          }
          .p {
            margin-top: 12px;
            font-size: 12px;
            text-indent: 2em;
            // 文字超出省略
            overflow: hidden;
            text-overflow: ellipsis; // 产出部分省略
            display: -webkit-box;
            -webkit-line-clamp: 2; // 最多显示四行
            -webkit-box-orient: vertical;
          }
        }
      }
      .odd {
        .left {
          .box {
            right: 15px;
            &::before {
              border-left: 7px solid skyblue;
              right: -7px;
            }
          }
        }
      }
      .even {
        .right {
          .box {
            left: 15px;
            &::before {
              border-right: 7px solid skyblue;
              left: -7px;
            }
          }
        }
      }
    }
  }
}

.record-enter-from,
.record-leave-to {
  filter: blur(10px);
  opacity: 0.5;
}

.record-enter-to,
.record-leave-from {
  filter: blur(0px);
  opacity: 1;
}

.record-enter-active,
.record-leave-active {
  transition: all 1s ease;
}
</style>
