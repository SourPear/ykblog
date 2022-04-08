<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <a-form :model="form" :layout="layout">
      <a-form-item field="name" label="手机号码">
        <a-input
          v-model="form.phone"
          placeholder="请输入正确的手机号"
          style="height: 36px"
        />
      </a-form-item>
      <a-form-item field="post" label="验证码">
        <a-input
          v-model="form.verificationCode"
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
      <div
        style="
          text-align: center;
          margin: -16px 0px 8px;
          font-size: 12px;
          color: var(--color-text-3);
          user-select: none;
        "
      >
        未注册的手机号将自动注册
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
      phone: "",
      verificationCode: "",
    });

    return {
      layout,
      form,
    };
  },
  props: ["change"],
};
</script>
<style lang="less" scoped>
</style>
