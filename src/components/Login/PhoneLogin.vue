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
          v-model="form.verifyCode"
          placeholder="6位验证码"
          style="height: 36px"
        />
        <a-button
          style="height: 36px; color: rgb(var(--primary-6)); width: 216px"
          type="secondary"
          :disabled="disabled"
          @click="sendCode"
          >{{ clickSend }}
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          style="width: 100%; margin-top: 8px; height: 36px; border-radius: 4px"
          @click="phoneLogin"
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
      verifyCode: "",
    });

    return {
      layout,
      form,
    };
  },
  data() {
    return {
      clickSend: "发送验证码",
      totalTime: 60,
      disabled: false,
      hasPhone: "",
    };
  },
  methods: {
    sendCode() {
      this.$fetch.sendCode({ phone: this.form.phone }).then((res) => {
        this.$message.success("验证码发送成功，3~5s后手机查收");
        this.hasPhone = res.data;
      });

      //设置禁用
      this.disabled = true;
      // 定时器
      let timer = setInterval(() => {
        this.totalTime--;
        this.clickSend = "重新发送 " + this.totalTime + "s";
        if (this.totalTime == 0) {
          this.clickSend = "发送验证码";
          this.totalTime = 60;
          this.disabled = false;
          clearInterval(timer);
        }
      }, 1000);
    },
    phoneLogin() {
      this.$fetch
        .phoneLogin({
          phone: this.form.phone,
          code: this.form.verifyCode,
        })
        .then((res) => {
          if (res.data == "000") {
            if (this.hasPhone) {
              this.$router.push("/main");
              this.$message.success("验证成功，欢迎使用EPBlog");
            } else {
              this.$message.success("验证成功,请注册用户信息");
              this.$router.push("/register");
            }
          } else {
            this.$message.error("验证码错误，请重试");
          }
        });
    },
  },
  props: ["change"],
};
</script>
<style lang="less" scoped>
</style>
