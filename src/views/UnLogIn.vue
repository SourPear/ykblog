<template>
  <a-layout class="root" id="root">
    <a-layout-header>
      <UnLogHeader :logIn="logIn" />
    </a-layout-header>
    <a-layout-content class="blog-content">
      <router-view></router-view>
    </a-layout-content>
    <div class="mask" id="logInMask"></div>
    <div class="login" id="logIn">
      <div class="login-close">
        <a-button
          type="text"
          style="width: 24px; height: 24px; padding: 0"
          @click="close"
        >
          <icon-close size="18" />
        </a-button>
      </div>
      <div class="login-text">欢迎使用 EPBlog</div>
      <div class="login-container">
        <div style="width: 80%; height: 90%">
          <div class="login-container-user">
            <span style="margin: 0 16px; user-select: none">账号</span>
            <div class="login-container-user-name">
              <input type="text">
            </div>
          </div>
          <div class="login-container-password">
            <span style="margin: 0 16px; user-select: none">密码</span>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
import UnLogHeader from "../components/Header/UnLogHeader.vue";
export default {
  components: {
    UnLogHeader,
  },
  data() {
    return {
      userName: "请输入账号",
    };
  },
  methods: {
    logIn() {
      document.getElementById("logIn").style.display = "block";
      document.getElementById("logInMask").style.display = "block";
      // document.getElementById("root").style.width = "100vw";
      // document.getElementById("root").style.height = "100vh";
      // document.getElementById("root").style.overflow = "hidden";
    },
    close() {
      document.getElementById("logIn").style.display = "none";
      document.getElementById("logInMask").style.display = "none";
      // document.getElementById("root").style.width = "";
      // document.getElementById("root").style.height = "";
      // document.getElementById("root").style.overflow = "";
    },
  },
};
</script>

<style lang="less">
* {
  transition: 340ms background-color;
}
body {
  background-color: var(--color-bg-1);
  transition: 340ms background-color;
}
.root {
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
.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(var(--gray-10), 0.271828);
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
}
.login {
  width: 27%;
  height: 60%;
  position: fixed;
  left: 36%;
  top: 15%;
  background-color: var(--color-bg-2);
  z-index: 1000;
  border-radius: 4px;
  display: none;
  &-close {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 8px 0 0;
  }
  &-text {
    margin-top: 24px;
    text-align: center;
    font-size: 22px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 21%;
    margin-top: 56px;
    &-user {
      height: 50%;
      border: 1px solid var(--color-border);
      border-radius: 4px 4px 0 0;
      display: flex;
      align-items: center;
    }
    &-password {
      border-left: 1px solid var(--color-border);
      border-right: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      height: 50%;
      border-radius: 0 0 4px 4px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
