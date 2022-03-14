<template>
  <Label />
  <a-row class="Blog-content" gutter="16">
    <a-col class="Blogleft" :span="18">
      <Blogleft />
    </a-col>
    <a-col class="Blogright" :span="6">
      <Blogright />
    </a-col>
  </a-row>
</template>

<script>
import Label from "./Label.vue";
import Blogleft from "./Blogleft/Blogleft.vue";
import Blogright from "./Blogright/Blogright.vue"
export default {
  name: "Content",
  components: {
    Label,
    Blogleft,
    Blogright,
  },
};
</script>

<style>
.Blog-content {
  width: 100vw;
  max-width: 1440px;
  height: 500vh;
  padding: 0 6px 0 10px;
  box-sizing: border-box;
}
.Blogleft {
  height: 300vh;
}
</style>