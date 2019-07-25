/**
* @Author: yinger
* @Date: 2019-06-13
* @Project: medical_web
*/
<template>
  <div class="footer">
    <div class="friend">
      <div class="jieshao">
        <span>友情链接</span>
      </div>
      <div class="detail">
        <ul>
          <li>
            <a href="http://fcc.zzu.edu.cn">郑州大学第一附属医院</a>
          </li>
          <li>
            <a href="http://www.henancishan.org/index.html">河南省慈善总会</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <!-- <span>综合服务平台:96195</span> -->
      <!-- <span>传真:0371-65964376</span> -->
      <span>地 址:河南省郑州市纬五路7号</span>
      <span>版权所有:河南省消化医学学会</span>
    </div>
      <!-- <span>技术支持：郑州舒伯特那科技有限公司</span> -->
      <span>地址：郑州市金水区经一路北35号5-1024</span>
  </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .footer{
    background: #eee;
  }
  
  @media screen and (min-width: 1200px) {
    .friend{
      width: 1200px;
      margin: 0px auto;
      padding-top: 20px;
      text-align: center;
    }
  }
  @media screen and (max-width: 1199px) {
    .friend{
      width: 100%;
      margin: 0px auto;
      padding-top: 20px;
      text-align: center;
    }
  }
  .friend .jieshao{
    /*text-align: left;*/
    font-size: 14px;
    color: #333333;
  }
  .friend ul{
    overflow: hidden;
    margin-top: 5px;
    color: #333333;
  }
  .friend ul li{
    /*float: left;*/
    font-size: 12px;
    margin-right: 10px;
  }
</style>
