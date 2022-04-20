<template>
  <div class="content" v-show="this.loginType">
    <div style="font-size: 20px; color: var(--color-text-2)">手机号登录</div>
    <PhoneForm style="margin-top: 32px" :change="password" />
  </div>
  <div class="content" v-show="!this.loginType">
    <div style="font-size: 20px; color: var(--color-text-2)">账号密码登陆</div>
    <PasswordForm style="margin-top: 32px" />
  </div>

  <div style="width: 240px; display: flex; justify-content: center">
    <div class="otherLogin">
      <div
        style="color: var(--color-text-3); font-weight: 900; user-select: none"
      >
        更多登录方式
      </div>
      <div class="otherLogin-logo">
        <a-popover>
          <icon-github size="17" />
          <template #content>Github</template>
        </a-popover>
        <a-popover>
          <icon-wechat size="18" />
          <template #content>微信登陆</template>
        </a-popover>
        <a-popover>
          <icon-lock v-if="loginType" size="18" @click="password" />
          <icon-mobile v-if="!loginType" size="18" @click="password" />
          <template #content>{{ loginword }}</template>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneForm from "./PhoneLogin.vue";
import PasswordForm from "./PasswordLogin.vue";
export default {
  components: {
    PhoneForm,
    PasswordForm,
  },
  data() {
    return {
      loginType: 1,
      loginword: "账号密码",
    };
  },
  methods: {
    password() {
      this.loginType = !this.loginType;
      if (!this.loginType) {
        this.loginword = "手机号登陆";
      } else this.loginword = "账号密码";
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  height: 304px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.otherLogin {
  width: 184px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(var(--gray-3));
  padding-top: 8px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  &-logo {
    color: rgb(var(--gray-9));
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;
  }
  &-logo :hover {
    color: rgb(var(--primary-6));
    cursor: pointer;
  }
}
</style>