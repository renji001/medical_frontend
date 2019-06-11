<template>
  <div class="container">
    <el-container>
      <el-header style="height: 100px;">
        <vue-header></vue-header>
      </el-header>
      <el-main class="main">
        <vue-content></vue-content>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  import vueHeader from './header.vue'
  import vueContent from './content.vue'

  export default {
    name: "index",
    components: {
      vueHeader,
      vueContent
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
</style>
