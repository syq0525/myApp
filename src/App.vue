<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-25 14:57:19
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 11:28:30
 -->
<template>
  <div id="app" style="height:100%">
    <keep-alive :exclude="/^ex-/">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="scss">
// @import "@/assets/css/base.scss";
</style>
