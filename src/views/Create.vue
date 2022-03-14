<template>
  <div class="create">
    <div class="create-operate">
      <div class="create-operate-bg">
        <div class="create-operate-bg-left">
          <Logo style="min-width: 32px" />
          <a-input
            style="width: 100%; height: 32px; margin-left: 16px"
            placeholder="写个标题吧"
            :size="size"
            allow-clear
          />
        </div>
        <div class="create-operate-bg-publish">
          <a-button type="outline">保存</a-button>
          <a-button type="primary">发布</a-button>
        </div>
      </div>
    </div>
    <editor class="create-editor" v-model="text"> </editor>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Editor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import Logo from "../components/Header/Logo.vue";

export default defineComponent({
  name: "VueTemplateDemo",
  components: { Editor, Logo },
  data() {
    return {
      text: "# 开始创作吧",
    };
  },
});
</script>
<style lang="less" scoped>
.create {
  display: flex;
  justify-content: center;
  &-editor {
    box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.08);
    margin-top: 72px;
    height: 100%;
    width: 100vw;
    height: 88vh;
    max-width: 1440px;
    margin: 72px 16px 0;
    background-color: var(--color-bg-2);
    border-radius: 6px;
  }
  &-operate {
    box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.04);
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
      max-width: 1472px;
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