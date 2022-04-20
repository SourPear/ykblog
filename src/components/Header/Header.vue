<template>
  <div class="header mda">
    <div class="nav-left">
      <Logo style="minwidth: 36px; padding-right: 10px" />

      <router-link to="/unLogIn">
        <IconWithText>
          <icon-home :size="16" />
          <span style="margin: 2px">首页</span>
        </IconWithText>
      </router-link>
      <IconWithText style="padding: 0">
        <icon-bulb :size="16" />
        <span style="margin: 2px">问答</span>
      </IconWithText>
    </div>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <div class="nav-right">
      <router-link to="/create">
        <a-button type="primary" size="large" style="margin-left: 8px">
          我要创作
        </a-button>
      </router-link>
      <IconWithText @click="changeColor">
        <icon-sun v-if="this.theme === '明色'" :size="16" />
        <icon-moon v-if="this.theme === '暗色'" :size="16" />
        <span>{{ theme }}</span>
      </IconWithText>
      <IconWithText>
        <icon-history :size="17" />
        <span>历史</span>
      </IconWithText>
      <IconWithText>
        <icon-star :size="17" />
        <span>收藏</span>
      </IconWithText>
      <IconWithText>
        <icon-notification :size="17" />
        <span>消息</span>
      </IconWithText>
      <router-link to="/Login">
        <a-avatar :size="32" class="avatar">
          <img src="../../assets/Avatar.png" />
        </a-avatar>
      </router-link>
    </div>
  </div>
  <div class="header mda-i">
    <a-avatar class="avatar" :size="32">
      <img src="../../assets/Avatar.png" />
    </a-avatar>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <a-button style="width: 36px" type="text">
      <template #icon>
        <icon-menu-fold :size="24" />
      </template>
    </a-button>
  </div>
</template>

<script>
import IconWithText from "./IconWithText.vue";
import Logo from "../Logo.vue";

export default {
  name: "Header",
  components: {
    Logo,
    IconWithText,
  },
  data() {
    return {
      theme: "明色",
    };
  },
  created() {
    document.body.setAttribute("arco-theme", localStorage.getItem("theme"));
    if (localStorage.getItem("theme") != "dark") this.theme = "明色";
    else this.theme = "暗色";
  },
  methods: {
    changeColor() {
      if (document.body.getAttribute("arco-theme") === "dark") {
        document.body.setAttribute("arco-theme", "light");
        localStorage.setItem("theme", "light");
        this.theme = "明色";
      } else {
        document.body.setAttribute("arco-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.theme = "暗色";
      }
    },
  },
};
</script>

<style lang="less">
@import "../../utils/media.less";
.header {
  color: var(--color-text-1);
  width: 100vw;
  max-width: 1440px;
  height: 56px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  justify-content: space-between;
  .nav-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 165px;
  }
  .nav-right {
    width: 432px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .arco-btn-text {
    color: var(--color-text-2);
    border: none;
  }
  .arco-btn-text:hover {
    color: rgb(var(--primary-5));
    background: transparent;
    border: none;
  }
  .arco-btn-text:active {
    color: var(--color-text-2);
    background: transparent;
    border: none;
  }
}
.nav-right-moblie {
  width: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 72px;
}
.avatar {
  min-width: 32px;
}
.input {
  width: 100%;
  margin: 0 16px;
  font-size: 12px;
}
@media @mda {
  .input {
    margin: 0 12px;
    max-width: 400px;
  }
}
@media @lg {
  .avatar {
    margin: 0 6px 0 8px;
  }
}
</style>
