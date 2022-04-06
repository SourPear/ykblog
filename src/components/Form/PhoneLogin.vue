<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <a-form :model="form" :layout="layout">
      <a-form-item field="name" label="手机号码">
        <a-input
          v-model="form.name"
          placeholder="请输入正确的手机号"
          style="height: 36px"
        />
      </a-form-item>
      <a-form-item field="post" label="验证码">
        <a-input
          v-model="form.post"
          placeholder="4位验证码"
          style="height: 36px"
        />
        <a-button
          style="height: 36px; color: rgb(var(--primary-6))"
          type="secondary"
          >发送验证码</a-button
        >
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          style="width: 100%; margin-top: 8px; height: 36px; border-radius: 4px"
        >
          登录
        </a-button>
      </a-form-item>
      <div style="width: 240px; display: flex; justify-content: center">
        <div class="otherLogin">
          <div
            style="
              color: var(--color-text-3);
              font-weight: 900;
              margin-top: 4px;
            "
          >
            更多登录方式
          </div>
          <div class="otherLogin-logo">
            <icon-github size="17" />
            <icon-wechat size="18" />
            <icon-lock size="18" />
          </div>
        </div>
      </div>
    </a-form>
  </a-space>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const layout = ref("vertical");
    const form = reactive({});

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
