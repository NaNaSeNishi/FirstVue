<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="550px">
      <el-carousel-item ><img src="@/assets/home-slider-1.jpg" alt="">        </el-carousel-item>
      <el-carousel-item ><img src="@/assets/home-slider-2.jpg" alt="">        </el-carousel-item>
      <el-carousel-item ><img src="@/assets/home-slider-1.jpg" alt="">        </el-carousel-item>
      <el-carousel-item ><img src="@/assets/home-slider-2.jpg" alt="">        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  img {
        width: 100%;
    max-height: 720px;
  }
  .el-carousel-item :child(1) {
   background-color: red;
  }
  
  .el-carousel__item:child(2) {
     background-color: #d3dce6;
  }
</style>