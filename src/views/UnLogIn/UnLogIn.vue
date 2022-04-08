<template>
  <a-layout class="root" id="root">
    <a-layout-header>
      <UnLogHeader :logIn="logIn" />
    </a-layout-header>
    <a-layout-content class="blog-content">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
import UnLogHeader from "../../components/Header/UnLogHeader.vue";
export default {
  components: {
    UnLogHeader,
  },
};
</script>

<style lang="less">
* {
  transition: 340ms background-color;
}
.root {
  background-color: var(--color-bg-1);
  display: flex;
  align-items: center;
  color: var(--color-text-2);
}
.arco-layout-header {
  z-index: 1000;
  position: fixed;
  background-color: var(--color-bg-4);
  transition: 340ms background-color;
  box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.08);
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 56px;
}
.arco-layout-content {
  padding-top: 56px;
  color: var(--color-text-2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog-content {
  margin-top: 16px;
}
</style>
