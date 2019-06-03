<template>
  <div class="header">
    <img src="/static/images/logo.jpg" alt="">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="全站内容" class="searchSelect">
          <el-option label="全站内容" value="1"></el-option>
          <el-option label="医生查找" value="2"></el-option>
          <el-option label="新闻查找" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>

  export default {
    name: "header",

    data() {
      return {
        input5: '',
        select: '请选择'
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
  }

  .header img {
    float: left;
  }

  .header .search {
    float: right;
  }
  .searchSelect {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
