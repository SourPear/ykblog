<template>
  <div class="create">
    <div class="create-operate">
      <div class="create-operate-bg">
        <div class="create-operate-bg-left">
          <Logo style="min-width: 32px" />
          <a-input
            style="width: 100%; height: 32px; margin-left: 16px"
            placeholder="写个标题吧"
            allow-clear
            v-model="title"
          />
        </div>
        <div class="create-operate-bg-publish">
          <a-button type="outline" @click="saveArticle">保存</a-button>
          <a-button type="primary">发布</a-button>
        </div>
      </div>
    </div>
    <editor class="create-editor" v-model="content" :theme="theme"> </editor>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Editor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import Logo from "../components/Logo.vue";
// import axios from "axios";

export default defineComponent({
  name: "VueTemplateDemo",
  components: { Editor, Logo },
  data() {
    return {
      content: "# 开始创作吧",
      title: "",
      theme: "",
    };
  },
  created() {
    document.body.setAttribute("arco-theme", localStorage.getItem("theme"));
    this.theme = document.body.getAttribute("arco-theme");
  },
  methods: {
    saveArticle() {
      this.$fetch.createBlog({
        title: this.title,
        content: this.content,
        like: 0,
        comment: 0,
        view: 0,
        user: "布丁豆角",
      });
    },
  },
});
</script>
<style lang="less" scoped>
.create {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg-1);
  &-editor {
    box-shadow: 0px 4px 36px -8px rgba(black, 0.08);
    width: 100vw;
    height: 88vh;
    max-width: 1440px;
    margin: 72px 26px 0;
    background-color: var(--color-bg-2);
    border-radius: 6px;
    color: var(--color-text-2);
    box-sizing: border-box;
  }
  &-operate {
    box-shadow: 0px 4px 36px -8px rgba(black, 0.04);
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 56px;
    background-color: var(--color-bg-2);
    display: flex;
    justify-content: center;
    align-items: center;
    &-bg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      padding: 0 16px;
      box-sizing: border-box;
      max-width: 1440px;
      &-left {
        display: flex;
        align-items: center;
        width: 720px;
      }
      &-publish {
        width: 152px;
        min-width: 152px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 0 32px;
      }
    }
  }
}
</style>