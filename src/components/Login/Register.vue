<template>
  <div class="container">
    <div
      style="font-size: 20px; margin-bottom: 32px; color: var(--color-text-2)"
    >
      完善您的信息
    </div>
    <a-space direction="vertical" size="large" :style="{ width: '100%' }">
      <a-form :model="form" :layout="layout">
        <a-form-item
          field="username"
          label="设置用户名"
          :rules="[
            { required: true, message: '用户名不能为空' },
            { minLength: 3, message: '最短三个字符' },
            { maxLength: 10, message: '最长十个字符' },
          ]"
        >
          <a-input
            v-model="form.username"
            placeholder="请设置用户名"
            :style="{ height: 36 }"
          />
        </a-form-item>
        <a-form-item
          field="password"
          label="设置密码"
          :rules="[
            { required: true, message: '密码不能为空' },
            { minLength: 6, message: '最短6个字符' },
            { maxLength: 12, message: '最长12个字符' },
          ]"
        >
          <a-input
            v-model="form.password"
            placeholder="设置密码，6～12位"
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
              :size="48"
              :style="{ backgroundColor: 'rgb(var(--primary-5))' }"
            >
              <img alt="avatar" v-if="isupload" id="preview" src="" />
              <IconUser v-if="!isupload" />
              <template #trigger-icon>
                <IconEdit />
                <input
                  type="file"
                  class="upavatar"
                  accept="image/png, image/jpeg"
                  required
                  id="avatar"
                  @change="handleFileChange"
                />
              </template>
            </a-avatar>
          </div>
        </a-form-item>
        <a-button
          type="primary"
          style="width: 100%; height: 36px; border-radius: 4px"
          @click="submit"
        >
          提交
        </a-button>
      </a-form>
    </a-space>
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      isupload: 0,
      avatar: "",
    };
  },
  methods: {
    handleFileChange(e) {
      // 拿到上传的图片
      const files = e.target.files;
      if (files && files[0]) {
        var file = files[0];
        if (file.size > 1024 * 1024 * 3) {
          this.$message.error("文件大小不能超过3M");
          return false;
        }
      }
      this.upload();

      // 预览图片
      let fr = new FileReader();
      fr.onload = () => {
        document.getElementById("preview").src = fr.result;
      };
      fr.readAsDataURL(file);

      let formdata = new FormData();
      formdata.append("文件", file);
      this.avatar = formdata;
      console.log(this.avatar);
      console.log(file);
    },
    submit() {
      this.$message.success("chengg");
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          processData: false,
          contentType: false,
        },
      };

      axios.post(
        "https://qcb559.api.cloudendpoint.cn/submit",
        this.avatar,
        config
      );
      // this.$fetch.submit({ avatar: 123 }).then((res) => {
      //   console.log(res.data);
      // });
    },
    upload() {
      this.isupload = 1;
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
.upavatar {
  position: absolute;
  width: 48px;
  height: 64px;
  left: -32px;
  top: -48px;
  opacity: 00;
  cursor: pointer;
}
</style>