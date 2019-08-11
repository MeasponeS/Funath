<template>
    <div class="head-warp">
        <div class="head" >
            <div class="left" @click="goHome">
                <img src="./img/logo.png" alt="">
            </div>
            <div class="rightNav">
                <ul class="middle" v-if="pathname">
                    <li @click="goProducts">产品信息</li>
                    <li @click="goIntroduction('')">公司介绍</li>
                    <li @click="goNews">新闻资讯</li>
                    <li @click="goExample">项目案例</li>
                    <li @click="goContact">联系我们</li>
                </ul>
                <div class="right">
                    <div class="tel">
                        <img src="./img/tel.png" alt="">
                        <span>400-0012-977</span>
                    </div>
                    <div class="language">
                        <span class="cn">中文</span>
                        <span class="en">English</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Head',

        data: function () {
            return {
            	pathname:''
            }
        },
        methods: {
			goContact(){
				window.location.href = './contact.html'
			},
			goExample(){
				window.location.href = './productExample.html'
			},
			goNews(){
				window.location.href = './news.html'
			},
			goIntroduction(type){
				window.location.href = './introduction.html?type=' + type
			},
			goProducts(){
				window.location.href = './products.html'
			},
			goHome(){
				window.location.href = './index.html'
            }

	    },
        mounted(){
			let pathname = window.location.pathname;
			if(pathname == '/' || pathname == '/index.html'){
				this.pathname = false
            } else {
				this.pathname = true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var";
    .head-warp{
        width: 100%;
        background: #0DAA67;
        display: flex;
        justify-content: center;
        align-items: center;
        .head{
            display: flex;
            width: 1200px;
            height: 50px;
            justify-content: space-between;
            align-content: center;
            .left{
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                cursor: pointer;
                img{
                    height: 32px;
                    width: auto;
                }
            }
            .rightNav{
                display: flex;
                justify-content: flex-start;
                align-content: center;
                .middle{
                    display: flex;
                    justify-items: center;
                    align-content: center;
                    list-style: none;
                    padding: 0;
                    li{
                        font-family: "SourceHan-regular";
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        color: #fff;
                        font-size: 16px;
                        margin-right: 28px;
                    }
                }
            }
            .right{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tel{
                    img{
                        width: auto;
                        height: 22px;
                    }
                    span{
                        font-size: 26px;
                        font-family: 'DINC';
                        color: #fff;
                        margin-left: 8px;
                        padding-right: 28px!important;
                    }
                }
                .language{
                    .cn{
                        font-family: "SourceHan-regular";
                        font-size: 16px;
                        padding-right: 4px!important;
                        border-right: 2px solid #fff;
                        color: #fff;
                        cursor: pointer;
                    }
                    .en{
                        font-family: "DINR";
                        font-size: 16px;
                        padding-left: 4px!important;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }

    }
</style>
