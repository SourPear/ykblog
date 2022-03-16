<template>
  <div class="home">
    <Label class="mda" />
    <a-row :gutter="16" class="home-blog-row">
      <a-col :md="18" :sm="24" :xs="24" :lg="18">
        <Card headline="博客列表" :hasHeader="true">
          <Blogitem
            v-for="blogitem in bloglist"
            :key="blogitem"
            :blogitem="blogitem"
          />
        </Card>
      </a-col>
      <a-col :md="6" :sm="24" :xs="24" :lg="6">
        <Card headline="推荐作者">
          <Authoritem
            v-for="authoritem in authorlist"
            :key="authoritem"
            :authoritem="authoritem"
          />
        </Card>
        <Card headline="高赞回答"
          ><Answeritem v-for="answeritem in answerlist" :key="answeritem"
        /></Card>
      </a-col>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script>
import Answeritem from "../components/content/Answeritem.vue";
import Authoritem from "../components/content/Authoritem.vue";
import Blogitem from "../components/content/Blogitem.vue";
import Label from "../components/content/Label.vue";
import Card from "../components/content/Card.vue";
import axios from 'axios';

export default {
  name: "Home",
  created() {
    axios.post('https://qcb559.api.cloudendpoint.cn/getBlogList').then(res => {
      this.bloglist = res.data
      this.blogLoading = false
    })
  },
  data() {
    return {
      bloglist: [],
      blogLoading : true,
      authorlist: [
        {
          author: "布丁豆角",
          sign: "正在努力写自己的博客网站的靓仔",
        },
        {
          author: "布丁豆角",
          sign: "正在努力写自己的博客网站的靓仔",
        },
        {
          author: "布丁豆角",
          sign: "正在努力写自己的博客网站的靓仔",
        },
        {
          author: "布丁豆角",
          sign: "正在努力写自己的博客网站的靓仔",
        },
        {
          author: "布丁豆角",
          sign: "正在努力写自己的博客网站的靓仔",
        },
      ],
      answerlist: [
        {
          like: 99,
          title: "在 JavaScript 对象数组中按 id 查找对象",
        },
        {
          like: 99,
          title: "在 JavaScript 对象数组中按 id 查找对象",
        },
        {
          like: 99,
          title: "在 JavaScript 对象数组中按 id 查找对象",
        },
        {
          like: 99,
          title: "在 JavaScript 对象数组中按 id 查找对象",
        },
        {
          like: 99,
          title: "在 JavaScript 对象数组中按 id 查找对象",
        },
      ],
    };
  },
  components: {
    Card,
    Blogitem,
    Label,
    Authoritem,
    Answeritem,
  },
};
</script>

<style lang="less">
@import "../utils/media.less";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-blog-row {
    width: 100vw;
    max-width: 1484px;
    padding: 0 16px;
    box-sizing: border-box;
  }
}
</style>
