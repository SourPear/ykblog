<template>
  <div class="login">
    <div class="login-nav">123</div>
    <div class="login-container">123</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-nav {
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
}
</style>