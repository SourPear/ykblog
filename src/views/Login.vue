<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-bg-nav">
        <div class="login-bg-nav-left">
          <Logo style="minwidth: 36px; padding-right: 24px" />
          <span class="login-bg-nav-left-name">EPBlog</span>
        </div>
        <div class="login-bg-nav-right">
          <a-button type="outline">登录</a-button>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <div class="login-bottom-card">
        <p style="width: 100%; text-align: center">Enjoy</p>
        <p style="width: 100%; text-align: center">Process</p>
      </div>
      <div class="login-bottom-right">
        <div class="login-bottom-right-content" v-show="false">
          <div class="login-bottom-right-content-title">手机号登录</div>
          <PhoneForm style="margin-top: 32px" />
        </div>
        <div class="login-bottom-right-content" v-show="true">
          <div class="login-bottom-right-content-title">账号密码登陆</div>
          <Form style="margin-top: 32px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import PhoneForm from "../components/Form/PhoneLogin.vue";
export default {
  components: {
    Logo,
    PhoneForm,
  },
};
</script>

<style lang="less" scoped>
@import "../utils/media.less";
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &-bg {
    background-color: var(--color-bg-4);
    box-shadow: 0px 4px 36px -8px rgba(var(--gray-10), 0.08);
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      max-width: 1472px;
      margin-right: 16px;
      &-left {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 16px;
        font-weight: 600;
        &-name {
          font-family: "微软雅黑";
          font-size: 18px;
          color: var(--color-text-2);
        }
      }
      &-right {
        margin-right: 16px;
      }
    }
  }
  &-bottom {
    width: 100vw;
    height: 94vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg-1);
    &-card {
      width: 254px;
      height: 500px;
      background-color: rgb(42, 106, 220);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--color-bg-2);
      font-size: 24px;
      font-weight: 900;
      padding-bottom: 48px;
      box-sizing: border-box;
      box-shadow: 0px 4px 24px -8px rgba(var(--gray-10), 0.2);
    }
    &-right {
      width: 410px;
      height: 500px;
      border-top-right-radius: 6px;
      background-color: var(--color-bg-2);
      border-bottom-right-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 24px -8px rgba(var(--gray-10), 0.2);
      &-content {
        height: 400px;
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
          font-size: 20px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      &-card {
        width: 0px;
        transition: 300ms;
      }
      &-right {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        width: 100vw;
        margin: 0 16px;
      }
    }
  }
}
</style>