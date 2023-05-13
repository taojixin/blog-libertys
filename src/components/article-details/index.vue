<template>
  <div class="article-details">
    <div class="loading" v-if="loading">
      <img src="https://img.libertys.cn/blog/load1.gif">
    </div>
    <div class="first" :style="bgImage(artDetails.imgUrl)"></div>
    <div class="second">
      <div class="content-box markdown-body" v-html="artContent"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,reactive,ref} from 'vue'
import {useRoute,useRouter} from "vue-router"
import {getArtDetails} from "../../services/index"

const route = useRoute()
const router = useRouter()

let artDetails = reactive({})
let artContent = ref("")
let loading = ref(true)
onMounted(async () => {
  const articleId = route.params.articleId
  await getArtDetails(articleId).then(res => {
    if (res.code === -1) {
      router.back()
    } else {
      loading.value = false
      artDetails = res.data.result[0]
    }
  })
  artContent.value = artDetails.content
})
function bgImage(src) {
  return {
    backgroundImage: `url(${src})`,
  };
}
</script>

<style lang="less" scoped>
.article-details {
  .loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
  .first {
    height: 300px;
    // background-image: url(https://img.libertys.cn/background/1.jfif);
    background-size: cover;
    background-position: center center;
  }
  .second {
    // border: 1px solid black;
    width: 60vw;
    margin: 0 auto;
    .content-box {
      padding: 20px;
    }

    
  }
}
@media (max-width: 749px) {
  .article-details {
    .second-floor {
      width: 97vw;
    }
  }
}
</style>