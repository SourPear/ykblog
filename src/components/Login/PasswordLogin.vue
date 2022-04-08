<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <a-form :model="form" :layout="layout">
      <a-form-item field="name" label="用户名">
        <a-input
          v-model="form.username"
          placeholder="请输入用户名"
          style="height: 36px"
        />
      </a-form-item>
      <a-form-item field="post" label="密码">
        <a-input-password
          v-model="form.password"
          :style="{ width: '320px' }"
          placeholder="请输入密码"
          allow-clear
          style="height: 36px; width: 100%"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          style="width: 100%; margin-top: 8px; height: 36px; border-radius: 4px"
        >
          登录
        </a-button>
      </a-form-item>

      <div
        style="
          text-align: center;
          margin: -16px 0px 8px;
          font-size: 12px;
          color: var(--color-text-3);
          user-select: none;
        "
      >
        首次登陆请使用手机号方式
      </div>
    </a-form>
  </a-space>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const layout = ref("vertical");
    const form = reactive({
      username: "",
      password: "",
    });

    return {
      layout,
      form,
    };
  },
};
</script>
<style lang="less" scoped>
.otherLogin {
  width: 184px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(var(--gray-3));
  padding-top: 8px;
  margin-top: 8px;
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
