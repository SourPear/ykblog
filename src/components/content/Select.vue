<template>
  <div class="select">
    <div class="select-focus">
      <a-button
        type="text"
        style="
          padding: 0;
          margin: 7px 16px 0 0;
          color: rgb(var(--primary-5)) !important;
        "
      >
        关注
      </a-button>
    </div>
    <a-button type="text" style="padding: 0; margin: 2px 16px 0 20px">
      推荐
    </a-button>
    <a-button type="text" style="padding: 0; margin: 2px 16px 0 20px">
      热榜
    </a-button>
  </div>
</template>

<script>
export default {
  naem: "Select",
};
</script>

<style lang="less" scoped>
.select {
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  box-shadow: 0px 1px 0px var(--color-border);
  transition: 340ms box-shadow;
  &-focus {
    border-bottom: 3px solid rgb(var(--primary-5));
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 16px 0;
    width: 32px;
  }
  .arco-btn-size-medium {
  font-size: 16px !important;
}
}

</style>