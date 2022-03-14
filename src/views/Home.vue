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

export default {
  name: "Home",
  data() {
    return {
      bloglist: [
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
        {
          author: "布丁豆角",
          title: "Vue为何弃用经典的Ajax，选择新技术Axios？",
          content:
            "发送网络请求的方式有很多，下面来简单介绍一下：1、传统的Ajax是基于XMLHttpRequest（XHR）2、jQuery - Ajax为什么不适用jQuery的Ajax？在vue开发中不需要使用jQuery，因为jQuery很重量级3、vue官方在Vue1.x的时候，推出了Vue-resource。Vue-resource角jQuery轻便很多，但在vue2.x之后，尤雨溪对Vue-resource不维护了，简言之，就是弃用了。4、尤雨溪推荐使用axios。",
          sign: "正在努力写自己的博客网站的靓仔",
          like: 99,
          comment: 123,
          vies: 99,
        },
      ],
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
