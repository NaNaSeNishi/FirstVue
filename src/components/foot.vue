<template>
  <div>
   <el-row :gutter="12">
       <el-col :span="8">    
    <el-card shadow="always">
      <div id="d3">
        <p>About us:</p>
        <p>No-maids-cafe project</p>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always">
          <a href="https://github.com/no-maids-cafe" target="_blank">
        <img src="@/assets/github.png" alt="" class="git-link">
        <p>https://github.com/no-maids-cafe</p>
        </a>  
    </el-card>
  </el-col>
    <el-col :span="4">
    <div id="d1">
        <p>Address     福建省厦门市厦门大学</p>
        <p>Tel (00)11-2222  FAX (00)22-3333</p>
        <p>E-mail : deepbluecafe06@gmail.com</p>
    </div>
  </el-col>
    <el-col :span="4">
    <div id="d2"></div>
  </el-col>
</el-row>
  </div>
</template>

<script>
  export default {
    name: 'foot' 
    }
</script>

<style scoped>

  #d1 {
    padding-top: 40px;
    text-align: left;
    height: 110px;
    font-size: 0.8em;   
    font-style: italic; 
  }
  #d2 {
    margin-top: 40px;
    margin-left: 60px;
    width: 100%;
    height: 150px;
    max-width: 80px;
    max-height: 80px;
    background-position: right,top;
    background-repeat: no-repeat;
    background-image: url(../assets/xmu.png);
  }
  #d3 {
    font-size: 1.58em;
  }
  .git-link {
    width: 80px;
    position: right;
  }
  .xmu-link {
    width: 120px;
    position: right;
  }
</style>
