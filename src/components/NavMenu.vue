<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="#E7D6CC"
      text-color="#222"
      active-text-color="black"
      style="min-width: 1300px"
    >
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/menu">美食</el-menu-item>
      <el-menu-item index="2">历史订单</el-menu-item>
      <el-menu-item index="3">购物车</el-menu-item>
      <el-submenu index="4">
        <template slot="title">登陆</template>
        <el-menu-item index="/login">用户登陆</el-menu-item>
        <el-menu-item index="/login">管理员登陆</el-menu-item>
          </el-submenu>
      <span>无 女 仆 の 咖 啡 厅</span>
      <el-input
        placeholder="快速搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
        v-model="keywords"
      ></el-input>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",

  computed: {
    hoverBackground() {
      return "#ffd04b";
    },
    currentPath() {
      var x = this.$route.path.indexOf("/", 1);
      if (x !== -1) {
        return this.$route.path.substring(0, x);
      } else {
        return this.$route.path;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
span {
  text-align: left;
  padding-left: 200px;
  background-color:rgb(231, 214, 204);
  position: absolute;
  height: 61px;
  width: 900px;
  right: 0%;
  line-height: 55px;
  font-size: 25px;
  font-weight: bold;
}
</style>