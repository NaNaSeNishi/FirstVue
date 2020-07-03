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
          <span>主食</span>
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
          <span>饮料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">咖啡</el-menu-item>
          <el-menu-item index="2-2">奶茶</el-menu-item>
          <el-menu-item index="2-3">果汁</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>小吃</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">蛋糕</el-menu-item>
          <el-menu-item index="3-2">泡芙</el-menu-item>
          <el-menu-item index="3-3">曲奇</el-menu-item>       
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
      <p><br></p>
  <el-col :span="5" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/coffee1.png" class="image">
      <div style="padding: 14px;">
        <span>卡布奇诺(热)</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">加入购物车</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    <el-col :span="5" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/coffee2.png" class="image">
      <div style="padding: 14px;">
        <span>拿铁(热)</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">加入购物车</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
    <el-col :span="5" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/coffee3.png" class="image">
      <div style="padding: 14px;">
        <span>摩卡</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">加入购物车</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  

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
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
    
  .clearfix:after {
      clear: both
  }
</style>