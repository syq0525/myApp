<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-25 14:57:19
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-20 14:21:00
 -->
<template>
  <div class="app-container" :style="{'background':bgcolor}">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="main" @scroll="handleScroll">
      <slot></slot>
    </div>

    <div class="footer">
      <div class="footer-box">
        <slot name="footer"></slot>
      </div>
      <div class="ipx-height" v-if="bottom>0" :style="{'background':ipxcolor}"></div>
    </div>
    <slot name="aside"></slot>
  </div>
</template>

<script>
export default {
  name: "app-layout",
  props: {
    bgcolor: { type: String, default: "#fff" },
    ipxcolor: { type: String, default: "#fff" },

  },
  data() {
    return {
      bottom: 0
    };
  },
  mounted() {
    // this.setPageSize();
  },
  methods: {
    pageScroll(name){
      const top = document.getElementById(name).offsetTop
      $('.main').animate({scrollTop: top},1000);
    },
    handleScroll(event) {
      this.$emit("update:scrolltop", event.target.scrollTop);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/base.scss";
.app-container {
  @include flexBox(nowrap);
  @include flexDir(column);
  width: 100%;
  height: 100%;
  .header {
    z-index: 10;
  }
  .main {
    @include flex;
    width: 100%;

    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .footer {
    z-index: 10;
  }
}
</style>
