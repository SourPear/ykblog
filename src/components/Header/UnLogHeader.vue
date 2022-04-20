<template>
  <div class="header mda">
    <div class="nav-left">
      <router-link to="/main"
        ><Logo style="min-width: 32px; padding: 3px 10px 0 0"
      /></router-link>

      <IconWithText>
        <icon-home :size="16" />
        <span style="margin: 2px">首页</span>
      </IconWithText>

      <IconWithText style="padding: 0">
        <icon-bulb :size="16" />
        <span style="margin: 2px">问答</span>
      </IconWithText>
    </div>
    <a-input-search class="input" placeholder="请输入搜索内容" />
    <div class="nav-right1">
      <router-link to="/login">
        <a-button type="primary" style="height: 36px"> 登录/注册 </a-button>
      </router-link>
      <IconWithText @click="changeColor" style="margin-left: 28px">
        <icon-sun v-if="this.theme === '明色'" :size="16" />
        <icon-moon v-if="this.theme === '暗色'" :size="16" />
        <span>{{ theme }}</span>
      </IconWithText>
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
import Logo from "../Logo.vue";
import IconWithText from "./IconWithText.vue";

export default {
  name: "UnLogHeader",
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

<style lang="less" >
@import "../../utils/media.less";
.header {
  color: var(--color-text-1);
  width: 100vw;
  max-width: 1440px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
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
  .nav-right1 {
    width: 200px;
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
