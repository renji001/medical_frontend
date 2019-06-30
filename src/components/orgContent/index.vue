  <template>
      <div>
        <el-tabs tab-position="left">
          <el-tab-pane label="协会介绍"><vue-reduce></vue-reduce></el-tab-pane>
          <el-tab-pane label="联系我们"><lian-xi></lian-xi></el-tab-pane>
          <el-tab-pane label="协会章程"><zhang-cheng class="con"></zhang-cheng></el-tab-pane>
          <el-tab-pane label="组织架构">定时任务补偿</el-tab-pane>
          <el-tab-pane label="协会宗旨">定时任务补偿</el-tab-pane>
          <el-tab-pane label="现任领导">定时任务补偿</el-tab-pane>
          <el-tab-pane label="大事记">定时任务补偿</el-tab-pane>
          <el-tab-pane label="协会文章">定时任务补偿</el-tab-pane>
          <el-tab-pane label="协会任务">定时任务补偿</el-tab-pane>
          <el-tab-pane label="关联规定">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
  </template>

  <script>
      import ZhangCheng from './components/zhangcheng'
      import VueReduce from './components/reduce'
      import LianXi from './components/lianxi'
      export default {
          name: "index",
          components: {
            ZhangCheng,
            VueReduce,
            LianXi
          },
      }
  </script>

  <style scoped>
  .con{
    height: 500px;
    overflow-y: auto;
  }
  </style>
