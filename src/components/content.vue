<template>
    <div class="container">
      <el-tabs>
        <el-tab-pane label="网站首页">
          <content-index></content-index>
        </el-tab-pane>
        <el-tab-pane label="关于协会">
          <about-xiehui></about-xiehui>
        </el-tab-pane>
        <el-tab-pane label="组织机构">
          <org-content></org-content>
        </el-tab-pane>
        <el-tab-pane label="协会动态">定时任务补偿</el-tab-pane>
        <el-tab-pane label="学术交流">定时任务补偿</el-tab-pane>
        <el-tab-pane label="科普宣传">定时任务补偿</el-tab-pane>
        <el-tab-pane label="科技服务">定时任务补偿</el-tab-pane>
        <el-tab-pane label="荣誉展示">定时任务补偿</el-tab-pane>
        <el-tab-pane label="会员服务">定时任务补偿</el-tab-pane>
        <el-tab-pane label="主任介绍">定时任务补偿</el-tab-pane>
        <el-tab-pane label="联系我们">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
   import ContentIndex from './index/'
   import OrgContent from './orgContent/'
   import AboutXiehui from './aboutXiehui/index'
    export default {
      name: "content",
      components: {
        ContentIndex,
        OrgContent,
        AboutXiehui
      },
    }
</script>

<style scoped>
  .container{
    width: 1200px;
    margin: 0 auto;
    /*background: #eee;*/
  }
</style>
