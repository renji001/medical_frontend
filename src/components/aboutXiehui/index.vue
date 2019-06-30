<template>
    <div class="con">
      <div class="jieshao">
        <div class="left">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="center">
          <h3>学会成立背景</h3>
          <p class="indent">消化医学是以食管、胃、小肠、大肠、肝、胆及胰腺等器官疾病为主要研究内容的临床学科。消化系统疾病（以下简称消化病）是一大类严重威胁人类健康的急、慢性疾病。消化病种类繁多， 医疗操作复杂而精细，诊疗方法和研究成果日新月异，然而尚存在诊 疗水平参差不齐，管理不规范，人才培养不到位等问题。由于消化病 造成的直接和间接医疗费用，对家庭乃至整个社会都可能造成沉重的。</p>
          <p class="indent">要更好地解除病人疾患，促进健康河南，需要从事消化医学事业的专家同行相互协作，共同提高消化病的诊疗水平。 因此郑州大学第一附属医院、河南省人民医院、河南科技大学第一附属医院、新乡医学院第一附属医院、河南中医药大学第一附属医院等医疗机构共同发起并成立“河南省消化医学学会”。</p>
          <h3>学会性质</h3>
          <p class="indent">河南省内从事消化系统疾病防治工作领域的单位和个人自愿组成的地方性、学术性、非营利性社会团体。</p>
          <h3>学会宗旨</h3>
          <p class="indent">组织、团结河南省从事消化系统疾病防治工作领域的卫生科技工作者（包括单位和个人），严格遵守国家关于卫生科技工作的相关规定，贯彻落实国家关于卫生科技工作的方针政策，深入开展消化病领域内相关的诊疗、科研、流调、防控、教学、交流等工作。崇尚医学道德，坚持民主原则，发扬学术精神，提高专业水平，推动消化病领域卫生科技工作的繁荣发展，为人民健康和社会主义现代化建设服务。</p>
        </div>
      </div>
      <div class="zhuren">
        <div class="bannerText">
          <span class="title">现任领导</span>
          <span class="more">更多</span>
        </div>
        <div class="detail">
          <div class="block" v-for="item in zhurenList" :key="item.id">
            <img :src="item.img" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
              zhurenList:[{
                id: 1,
                img:'/static/images/zhangshuijun.jpeg',
                name: '会长张水军'
              },
                {
                  id: 2,
                  img:'/static/images/guowenzhi.jpeg',
                  name: '副会长郭文治'
                },
                {
                  id: 3,
                  img:'/static/images/zhangyanrui.jpeg',
                  name: '副会长张延瑞'
                },
                {
                  id: 4,
                  img:'/static/images/jinjianjun.jpeg',
                  name: '副会长金建军'
                }
              ]
            }
        }
    }
</script>

<style scoped>
.jieshao {
  overflow: hidden;
  margin-top: 20px;
  border: 1px solid #2A8D7E50;
  /*height: 220px;*/
}
.jieshao .left{
  float: left;
  width: 180px;
  height: 180px;
  margin: 20px 0px 20px 20px;
}
.jieshao .left img{
  width: 100%;
}
.jieshao .center{
  float: left;
  width: 680px;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}
.jieshao .center h3, .jieshao .right h3{
  font-size: 18px;
  margin: 10px 0px;
}
.jieshao .center p{
  text-indent:2em;
  font-size: 15px;
  color: #333;
}
.jieshao .right{
  float: left;
  width: 260px;
  text-align: left;
  margin-left: 20px;
}
.zhuren{
  margin-top: 20px;
}
.zhuren .detail{
  margin-top: 20px;
  overflow: hidden;
}
.zhuren .detail .block{
  width: 90px;
  float: left;
  margin-right: 270px;
  background: #D3DCE6;
}
.zhuren .detail .block:last-child{
  margin-right: 10px;
}

.zhuren .detail .block:nth-of-type(1){
  margin-left: 15px;
}
.zhuren .detail .block img{
  width: 100%;
  height: 110px;
}
.message{
  overflow: hidden;
}
.news, .dongtai {
  float: left;
  width: 550px;
  background: #f1f1f1;
}
.news {
  margin-right: 80px;
}

.news .title, .dongtai .title {
  overflow: hidden;
  height: 80px;
  /*line-height: 50px;*/
}

.news .title .left, .dongtai .title .left {
  float: left;
  margin-left: 20px;
}

.news .title .left span:nth-child(1), .dongtai .title .left span:nth-child(1) {
  font-size: 15px;
  display: block;
  margin-top: 25px;
  text-align: left;
}

.news .title .left span:nth-child(2), .dongtai .title .left span:nth-child(2) {
  font-size: 12px;
  display: block;
  color: #2a8d7e;
  text-align: left;
}

.news .title .right, .dongtai .title .right {
  float: right;
  width: 50px;
  line-height: 26px;
  background: #bda179;
  margin-top: 32px;
  font-size: 14px;
  color: white;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.newsContent {
  text-align: left;
  margin-left: 20px;
}

.newsContent li {
  height: 36px;
  line-height: 36px;
}

.newsContent li .time {
  color: #bda179;
  padding-right: 10px;
}

.newsContent {
  text-align: left;
  margin-left: 20px;
}

.newsContent li {
  height: 36px;
  line-height: 36px;
}

.newsContent li .time {
  color: #bda179;
  padding-right: 10px;
}
</style>
