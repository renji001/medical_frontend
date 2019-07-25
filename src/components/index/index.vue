<template>
  <div class="container">
		<div class="showPic">
			<div class="left" style="width:200px">
				<ul>
					<li>通知公告</li>
					<li>会员单位</li>
					<li>专业委员会</li>
					<li>名医讲堂</li>
					<li>科普宣传</li>
				</ul>
			</div>
			<div class="left" style="width: 800px;margin-right: 0px;">
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="item in picList" :key="item.id">
						<img :src="item.img" alt="" style="width: 100%;height: 100%;">
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="left" style="width: 159px;height:300px;background: #eee;margin-right: 0px;">
			</div>
		</div>

    <div class="message">
      <div class="news">
        <div class="title">
          <div class="left">
            <span>学术聚焦</span>
            <span>Academic Focus</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="dongtai">
        <div class="title">
          <div class="left">
            <span>最新动态</span>
            <span>News</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
          </div>
        </div>
        <div class="newsContent">
          <ul>
            <li class="ell">
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
            <li>
              <span class="time">2019-04-12</span>
              <span class="mesgTitle">河南省消化医学学会2019年护士规范化培训招收简章</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="zhuren">
			<div class="jieshao">
				<span>主任委员介绍</span>
				<span>更多</span>
			</div>
      <div class="detail">
				<div class="block" v-for="item in zhurenList" :key="item.id">
					<img :src="item.img" alt="">
					<span>{{item.name}}</span>
				</div>
			</div>
    </div>
    <div class="yingyin">
			<div class="jieshao">
				<span>影音协会</span>
				<span>更多</span>
			</div>
      <div class="detail">
				<ul>
					<li>
						<img src="/static/images/yingyin1.jpg" alt="">
					</li>
					<li>
						<img src="/static/images/yingyin2.jpg" alt="">
					</li>
					<li>
						<img src="/static/images/yingyin3.jpg" alt="">
					</li>
					<li>
						<img src="/static/images/yingyin4.jpeg" alt="">
					</li>
				</ul>
			</div>
    </div>
	</div>

</template>

<script>
  export default {
    name: "index",
		data() {
      return {
        picList:[{
					id: 1,
					img:'/static/images/banner.jpg',
				}],
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
      };
    },
		methods:{
			getDate(){
				var maDate = new Date()
			}
		}
  }
</script>

<style scoped>

	.showPic{
		overflow: hidden;
    width: 1200px;
	}
	.showPic .left{
		float: left;
		margin-right: 40px;
	}
	.showPic .left li{
		border: 1px solid #2a8d7e50;
		line-height: 30px;
		width: 150px;
		font-size: 15px;
		border-radius: 1px;
		margin-bottom: 13px;
	}

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
    width: 1200px;
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
  .zhuren,.yingyin,.friend{
    margin-top: 20px;
    width: 1200px;
  }
	.zhuren .jieshao, .yingyin .jieshao,.friend .jieshao{
		width: 100%;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #2a8d7e50;
		overflow: hidden;
	}
	.zhuren .jieshao span:nth-child(1), .yingyin .jieshao span:nth-child(1), .friend .jieshao span:nth-child(1){
		float: left;
		font-size: 16px;
	}
	.zhuren .jieshao span:nth-child(2),.yingyin .jieshao span:nth-child(2){
		float: right;
		font-size: 16px;
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
	.yingyin .detail{
		width: 100%;
	}
	.yingyin .detail ul{
		overflow: hidden;
		margin-left: 200px;
		margin-top: 20px;
	}
	.yingyin .detail li{
		float: left;
		width: 200px;
		height: 140px;
		border: 1px dashed #2a8d7e50;
	}
	.yingyin .detail li img{
	  width: 100%;
		height: 100%;
	}
	.friend ul{
		overflow: hidden;
		margin-top: 20px;
	}
	.friend ul li{
		float: left;
		font-size: 16px;
		margin-left: 10px;
	}
</style>
