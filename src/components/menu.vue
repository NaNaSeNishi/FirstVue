<template>
<div>
<el-row :gutter="20">
  <NavMenu></NavMenu>
</el-row>
<el-row :gutter="20">
    <el-col :span="8">
    <h5>美食分类</h5>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#E7D6CC"
      text-color="gray"
      active-text-color="black"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  name: "menu",
  components: { NavMenu }
};
</script>

<style>
 
</style>