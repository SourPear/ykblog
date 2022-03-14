<template>
  <div class="blog">
    <div class="blog-title">
      {{ blogitem.title }}
    </div>
    <div class="blog-article">
      {{ blogitem.content }}
    </div>
    <div class="blog-btns">
      <a-button type="text" class="blog-btns-user">
        <svg
          width="15"
          height="14"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="14.5"
            height="13.5"
            rx="2.25"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M1.77 11V3.95H4.85C5.59 3.95 6.16333 4.11333 6.57 4.44C6.97667 4.76 7.18 5.20667 7.18 5.78C7.18 6.16 7.08333 6.48667 6.89 6.76C6.69667 7.03333 6.43 7.23333 6.09 7.36C6.49 7.47333 6.8 7.67333 7.02 7.96C7.24667 8.24 7.36 8.59667 7.36 9.03C7.36 9.65667 7.14667 10.1433 6.72 10.49C6.3 10.83 5.71333 11 4.96 11H1.77ZM3 6.94H4.63C5.50333 6.94 5.94 6.60333 5.94 5.93C5.94 5.25667 5.50333 4.92 4.63 4.92H3V6.94ZM3 10.03H4.8C5.68 10.03 6.12 9.67667 6.12 8.97C6.12 8.26333 5.68 7.91 4.8 7.91H3V10.03ZM8.65477 11V3.95H11.7148C12.4881 3.95 13.0848 4.13667 13.5048 4.51C13.9248 4.87667 14.1348 5.39333 14.1348 6.06C14.1348 6.58667 13.9981 7.02333 13.7248 7.37C13.4514 7.71 13.0581 7.94 12.5448 8.06C12.8848 8.16667 13.1648 8.42333 13.3848 8.83L14.5648 11H13.1548L11.9348 8.75C11.8148 8.53 11.6714 8.38 11.5048 8.3C11.3448 8.22 11.1381 8.18 10.8848 8.18H9.93477V11H8.65477ZM9.93477 7.23H11.4948C12.4281 7.23 12.8948 6.85 12.8948 6.09C12.8948 5.33667 12.4281 4.96 11.4948 4.96H9.93477V7.23Z"
            fill="currentColor"
          />
        </svg>
        <span class="blog-btns-space">{{ blogitem.author }}</span>
      </a-button>
      <a-button class="blog-btns-like" type="text">
        <icon-thumb-up size="16" fill="rgb(var(--primary-5)" />
        <span class="blog-btns-space">{{ blogitem.like + "赞" }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other mda">
        <icon-thumb-down size="16" />
        <span class="blog-btns-space">{{ "踩" }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other">
        <icon-message size="16" />
        <span class="blog-btns-space">{{ blogitem.comment + "条评论" }}</span>
      </a-button>
      <a-button type="text" class="blog-btns-other mda">
        <icon-star size="16" />
        <span class="blog-btns-space">收藏</span>
      </a-button>
      <span class="blog-btns-vies">浏览量 {{ blogitem.vies }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogitem"],
  name: "Blogitem",
};
</script>

<style lang="less" scoped>
@import "../../utils/media.less";
.blog {
  width: 100%;
  height: 160px;
  box-shadow: 0px 1px 0px var(--color-border);
  transition: 340ms box-shadow;
  position: relative;
  &-title {
    padding: 20px 16px 16px;
    margin-bottom: 16px;
    box-sizing: content-box;
    font-size: 16px;
    color: var(--color-text-1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    max-height: 1px;
  }
  &-article {
    line-height: 24px;
    padding: 0 16px 16px;
    box-sizing: content-box;
    max-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  &-btns {
    padding: 0 0 0 12px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 116px;
    box-sizing: border-box;
    &-vies {
      text-align: right;
      width: 100%;
      margin: 0 24px 0 0;
      font-size: 12px;
      user-select: none;
    }
    &-space {
      margin-left: 4px;
    }
    // &-like {
    //   margin-left: 28px;
    //   color: rgb(var(--primary-5)) !important;
    // }
  }
}
.arco-btn-text {
  color: var(--color-text-2) !important;
  :focus {
    color: rgb(var(--primary-5)) !important;
  }
}
.arco-btn {
  margin: 0;
  padding: 0;
}
.arco-btn:focus {
  color: rgb(var(--primary-5));
}
.blog-btns-like {
  margin-left: 9px;
  color: rgb(var(--primary-5)) !important;
}
.blog-btns-other {
  margin-left: 9px;
}
@media @mda {
  .blog-btns {
    padding: 0 0 0 12px;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 116px;
    box-sizing: border-box;
    &-user {
      margin-left: 16px;
    }
    &-space {
      margin-left: 4px;
    }
    &-other {
      margin-left: 28px;
    }
  }
  .blog-btns-like {
    margin-left: 28px;
    color: rgb(var(--primary-5)) !important;
  }
}
</style>>