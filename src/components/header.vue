<template>
	<div class="con">
		<div class="tabDetail">
			<div class="tabDetailInner" style="position: relative;">
				<div class="left">
					<span class="time">{{time}}</span>
					<span class="week">{{week}}</span>
					<span>欢迎来到河南省消化医学学会官网</span>
				</div>
				<div class="right">
					<ul>
						<li>设为首页</li>
						<li>加入收藏</li>
						<li>意见建议</li>
						<li style="margin-right: 20px;">基金会</li>
						<li @mouseover='erweimaShow=true' @mouseout='erweimaShow=false'><img style="width: 20px;margin-top: 5px;" src="/static/images/erweima.png" alt=""></li>
					</ul>
					 <transition name="el-zoom-in-center">
							<img v-show="erweimaShow" class="transition-box" style="position: absolute;right: 0px;top: 30px;z-index: 100; width: 100px;margin-top: 5px;" src="/static/images/ceshi.jpg" alt="">
					</transition>
				</div>
			</div>
			
		</div>
		<div class="header">
		  <div class="left">
		    <img src="/static/images/logo.png" alt="">
		    <span class="title">河南省消化医学学会</span>
		  </div>
		
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
	</div>
</template>

<script>

  export default {
    name: "header",

    data() {
      return {
        input5: '',
        select: '请选择',
				time: null,
				week: null,
				erweimaShow: false
      }
    },
		created() {
			var moment = require('moment');
			this.time = moment().format("YYYY年MM月DD")
			this.week = moment().locale('zh-cn').format('dddd')
		}
  }
</script>

<style scoped>
	.tabDetail{
		background: #2A8D7E50;
		height: 30px;
		line-height: 30px;
	}
	.tabDetailInner{
		width: 1200px;
		margin: 0px auto;
    overflow: hidden;
	}
	.tabDetail .left{
		float: left;
	}
	.tabDetail .right{
		float: right;
	}
	.tabDetail .right li{
		float: left;
		margin-left: 5px;
	}
  .header {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
  }

  .header .left{
    float: left;
    height: 80px;
    line-height: 80px;
		margin-top: 5px;
  }
  .header .left img{
    width: 80px;
    display: inline-block;
  }
  .title{
    display: inline-block;
    font-size: 26px;
    color: #2a8d7e;
    vertical-align: text-bottom;
    margin-left: 10px;
    font-weight: bold;
  }
  .header .search {
    float: right;
		margin-top: 25px;
  }
  .searchSelect {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
