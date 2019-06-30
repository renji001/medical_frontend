<template>
    <div>
        <div class="inner">
            <div class="XSBlock" v-for="(item, index) in newsList" :key="index">
                <div class="left">
                    <img :src="item.path" alt="">
                </div>
                <div class="center">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="con ell">
                        {{item.content}}
                    </div>
                </div>
                <div class="right">
                    {{item.time}}
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                newsList: [{
                    id: 1,
                    title: '标题1',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 2,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 3,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 4,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 5,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 6,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 7,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 8,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 9,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                },{
                    id: 10,
                    title: '标题2',
                    content: '内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2内筒2',
                    time: '2018-08-09',
                    path: '/static/images/keji.jpeg'
                }]
            }
        }
    }
</script>
<style scoped>
    .inner{
        width: 1000px;
        margin: 0px auto;
    }
    .XSBlock {
        width: 100%;
        height: 80px;
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
        margin-top: 15px;
        border-radius: 2px;
        overflow: hidden;
    }
    .XSBlock .left{
        float: left;
        width: 60px;
        height: 60px;
        margin-left: 10px;
        margin-top: 10px
    }
    .XSBlock .left img{
        width: 60px;
        height: 60px;
    }
     .XSBlock .center{
        float: left;
        width: 400px;
        height: 60px;
        margin-left: 20px;
        margin-top: 10px;
        text-align: left
    }
    .XSBlock .center .title{
        font-size: 18px;
        color: #333;
        font-size: bold
    }
    .XSBlock .center .con{
        font-size: 12px;
        color: #999
    }
    .XSBlock .right{
        float: right;
        width: 100px;
        height: 60px;
        line-height: 80px;
        text-align: center;
        color: #333
    }
</style>
