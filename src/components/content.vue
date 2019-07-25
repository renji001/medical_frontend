<template>
  <div class="container">
    <div class="tabLink">
      <ul>
        <li
          v-for="(item, index) in tabData"
          :key="index"
          :class="tabIndex === index+1 ? 'active' : '' "
          @click="tabAdd(index,item.path)"
        >{{item.name}}</li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
import ContentIndex from "./index/";
import OrgContent from "./orgContent/";
import AboutXiehui from "./aboutXiehui/index";
import VueNews from "./news";
export default {
  name: "content",
  components: {
    ContentIndex,
    OrgContent,
    AboutXiehui,
    VueNews
  },
  data() {
    return {
      tabData: [
        {
          id: 1,
          name: "协会首页",
          path: "/home"
        },
        {
          id: 2,
          name: "关于协会",
          path: 'aboutXiehui'
        },
        {
          id: 3,
          name: "组织机构",
          path: 'orgContent'
        },
        {
          id: 4,
          name: "学术交流",
          path:'xueShu'
        },
        {
          id: 5,
          name: "科普宣传",
          path:'kepu'
        },
        {
          id: 6,
          name: "科技服务",
          path: 'keji'
        },
        {
          id: 7,
          name: "荣誉展示",
          path: 'rongyv'
        },
        {
          id: 8,
          name: "会员服务",
          path: 'huiyuan'
        },
        {
          id: 9,
          name: "联系我们",
          path: 'lianxi'
        },
        {
          id: 10,
          name: "基金会",
          path: ""
        }
      ],
      tabIndex: 1
    };
  },
  created() {
    var _this = this
    _this.tabIndex = localStorage.getItem('tabDataIndex')
    console.log(localStorage.getItem('tabDataIndex'))
  },
  methods: {
    tabAdd(index,path) {
      this.tabIndex = index + 1;
      this.$router.push(path);
      localStorage.setItem('tabDataIndex', index)
      // console.log(localStorage.getItem(tabDataIndex))
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    margin: 0 auto;
    /*background: #eee;*/
  }
}
@media screen and (max-width: 1199px) {
	.container {
    width: 100%;
    margin: 0 auto;
    /*background: #eee;*/
  }
}
.tabLink {
  width: 100%;
}
.tabLink ul {
  width: 100%;
  overflow: hidden;
  background: #bda079;
  height: 45px;
  margin-top: 30px;
  margin-bottom: 15px;
}
.tabLink ul li {
  width: 100px;
  float: left;
  line-height: 45px;
  color: #fff;
  font-size: 16px;
}
.active {
  background: #a48d6b;
}
</style>
