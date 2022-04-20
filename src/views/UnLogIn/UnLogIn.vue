<template>
  <a-layout class="root" id="root">
    <a-layout-header>
      <UnLogHeader />
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
