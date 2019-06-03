<template>
  <div class="container">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="message">
      <div class="news">
        <div class="title">
          <div class="left">
            <span>最新公告</span>
            <span>Latest Announcement</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="dongtai">
        <div class="title">
          <div class="left">
            <span>协会动态</span>
            <span>Hospital News</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    <div class="vipMessage">
      <div class="vipMember">
        <div class="title">
          <div class="left">
            <span>会员单位</span>
            <span>Latest Announcement</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="vipServer">
        <div class="title">
          <div class="left">
            <span>会员服务</span>
            <span>Latest Announcement</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="vipCommittee">
        <div class="title">
          <div class="left">
            <span>专业委员会</span>
            <span>Hospital News</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="zhuren">
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="vipMessage">
      <div class="vipMember">
        <div class="title">
          <div class="left">
            <span>会员单位</span>
            <span>Latest Announcement</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
            <li>
              <span class="mesgTitle">河南省食管癌重点实验室</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="vipServer">
        <div class="title">
          <div class="left">
            <span>会员服务</span>
            <span>Latest Announcement</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="vipCommittee">
        <div class="title">
          <div class="left">
            <span>专业委员会</span>
            <span>Hospital News</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省人民医院2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="zhuren">
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="cooperation">

    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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
    background: url("/static/images/ico_025.jpg") 20px 20px no-repeat;
    height: 80px;
    /*line-height: 50px;*/
  }

  .news .title .left, .dongtai .title .left {
    float: left;
    margin-left: 90px;
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
    color: #409EFF;
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

  .vipMessage{
    margin-top: 30px;
    overflow: hidden;
  }

  .vipMember{
    width: 300px;
    float: left;
    background: #f1f1f1;
  }
  .vipServer{
    width: 400px;
    float: left;
    background: #f1f1f1;
    margin-left: 30px;
  }
  .vipCommittee{
    width: 400px;
    float: left;
    background: #f1f1f1;
    margin-left: 30px;
  }
  .vipMessage .title {
    overflow: hidden;
    background: url("/static/images/ico_025.jpg") 20px 20px no-repeat;
    height: 80px;
    /*line-height: 50px;*/
  }
  .vipMessage  .left {
    float: left;
    margin-left: 90px;
  }

  .vipMessage .left span:nth-child(1) {
    font-size: 15px;
    display: block;
    margin-top: 25px;
    text-align: left;
  }

  .vipMessage .title .left span:nth-child(2) {
    font-size: 12px;
    display: block;
    color: #409EFF;
  }

  .vipMessage  .title .right {
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
  .zhuren{
    margin-top: 20px;
  }
</style>
