<template>
  <div class="container">
    <div style="font-size: 20px; margin-bottom: 32px">完善您的信息</div>
    <a-space direction="vertical" size="large" :style="{ width: '100%' }">
      <a-form :model="form" :layout="layout">
        <a-form-item field="name" label="设置用户名" required="true">
          <a-input
            v-model="form.username"
            placeholder="限字母、汉字、数字、特殊字符"
            style="height: 36px"
          />
        </a-form-item>
        <a-form-item field="post" label="设置密码" required="true">
          <a-input
            v-model="form.password"
            placeholder="限字母和数字组合，8～16位"
            style="height: 36px"
          />
        </a-form-item>
        <a-form-item field="name" label="设置头像 (限PNG、JPG格式，10M)">
          <div
            style="
              display: flex;
              justify-content: center;
              width: 240px;
              margin-top: 12px;
            "
          >
            <a-avatar
              @click="toast"
              :style="{ backgroundColor: 'rgb(var(--primary-5))' }"
              size="40"
            >
              <IconUser />
              <template #trigger-icon>
                <IconEdit />
              </template>
            </a-avatar>
          </div>
        </a-form-item>
        <a-button
          type="primary"
          style="width: 100%; height: 36px; border-radius: 4px; margin-top: 4px"
        >
          提交
        </a-button>
      </a-form>
    </a-space>
  </div>
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
  methods: {
    toast() {
      this.$message.info("Uploading...");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 379px;
}
</style>