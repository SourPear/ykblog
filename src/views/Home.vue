<template>
  <div class="home">
    <Label class="mda" />
    <a-row :gutter="16" class="home-blog-row">
      <a-col :md="18" :sm="24" :xs="24" :lg="18">
        <Card headline="博客列表" :hasHeader="true" style="min-height: 75vh">
          <Blogitem
            v-for="blogitem in bloglist"
            :key="blogitem"
            :blogitem="blogitem"
          />
          <div class="loading" v-if="blogLoading"><icon-loading />加载中</div>
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
import Answeritem from "../components/Content/Answeritem.vue";
import Authoritem from "../components/Content/Authoritem.vue";
import Blogitem from "../components/Content/Blogitem.vue";
import Label from "../components/Content/Label.vue";
import Card from "../components/Content/Card.vue";

export default {
  name: "Home",
  created() {
    this.$fetch.getBlogList().then((res) => {
      this.bloglist = res.data;
      this.blogLoading = false;
    });
  },
  data() {
    return {
      bloglist: [],
      blogLoading: true,
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

<style lang="less" scoped>
@import "../utils/media.less";
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-blog-row {
    width: 100vw;
    max-width: 1440px;
    padding: 0 8px;
    box-sizing: border-box;
    min-height: 90vh;
  }
}
.loading {
  width: 100%;
  height: 56vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
