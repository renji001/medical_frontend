<template>
  <div class="container">
    <el-container>
      <el-header style="height: 140px;">
        <vue-header></vue-header>
      </el-header>
      <el-main class="main">
        <vue-content></vue-content>
      </el-main>
      <el-footer>
        <vue-footer style="height: 120px;"></vue-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import vueHeader from './header.vue'
  import vueContent from './content.vue'
  import vueFooter from './footer.vue'

  export default {
    name: "index",
    components: {
      vueHeader,
      vueContent,
      vueFooter
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
.el-header {
		height: 100px;
		padding: 0px;
}
.el-footer{
  height: 100px;
  padding: 0px;
}
</style>
