<template>
  <div class="blog-card">
    <Select v-if="hasHeader"/>
    <div v-if="!hasHeader" class="blog-card-header">
      <span class="blog-card-header-title" :heading="5">{{ headline }}</span>
    </div>
    <slot/>
    <!-- <Blog/>
    <Blog/> -->
  </div>
</template>

<script>
import Select from "./Select.vue"
// import Blog from "./content/Blogleft/Blog.vue"
export default {
  components:{
    Select
  },
  props: {
    bloglist:{
      default:[]
    },
    headline: {
      default: "headline",
    },
    hasHeader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
.blog-card {
  width: 100%;
  background-color: var(--color-bg-2);
  min-height: 300px;
  border-radius: 4px;
  box-shadow: 0px 4px 36px -8px rgba(black, 0.08);
  margin-bottom: 16px;
  &-header {
    height: 56px;
    border-bottom: 1px solid var(--color-border);
    transition: 340ms border-bottom;
    padding-left: 16px;
    &-title {
      color: rgb(var(--primary-6));
      line-height: 56px;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>
