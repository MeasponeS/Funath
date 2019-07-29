<template>
    <div id="app">
        <Head />
        <div class="item">
            <div class="bannerList">
                <el-carousel
                        :interval="3000"
                        trigger="click"
                        arrow="never"
                        	>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <a href="">
                            <img :src="item.image_url" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="nav">
                <ul>
                    <li @click="goProducts">产品信息</li>
                    <li @click="goIntroduction('')">公司介绍</li>
                    <li @click="goNews">新闻资讯</li>
                    <li @click="goExample">项目案例</li>
                    <li @click="goContact">联系我们</li>
                </ul>
            </div>
            <div class="center">
                <ul class="pics">
                    <li><img src="./img/1.png" alt=""></li>
                    <li class="word">
                        <img src="./img/4.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="./img/2.png" alt=""></li>
                    <li class="word">
                        <img src="./img/6.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li class="word">
                        <img src="./img/7.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="./img/3.png" alt=""></li>
                    <li class="word">
                        <img src="./img/8.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="./img/5.png" alt=""></li>
                </ul>
                <el-button @click="goProducts">查看更多</el-button>
            </div>
            <div class="middleBanner">
                <img src="./img/middleBanner.png" alt="">
                <ul>
                    <li @click="goIntroduction('one')">孚纳森哲学</li>
                    <li @click="goIntroduction('two')">合作伙伴</li>
                    <li @click="goIntroduction('three')">社会责任</li>
                </ul>
            </div>
            <div class="news">
                <div class="header">
                    <h3>NEWS</h3>
                    <span>新闻资讯</span>
                </div>
                <div class="body">
                    <ul>
                        <li>
                            <span>2019-06-15</span>
                            <p>成功签约上海院子车库地坪施工项目</p>
                        </li>
                        <li>
                            <span>2019-06-15</span>
                            <p>成功签约上海院子车库地坪施工项目</p>
                        </li>
                        <li>
                            <span>2019-06-15</span>
                            <p>成功签约上海院子车库地坪施工项目成功地坪施工项目成功签约上海院子车库地坪施工项目成功签约上海院子车库地坪施工项目成功签约上海院子车库地坪施工项目</p>
                        </li>
                    </ul>
                    <el-button @click="goNews">查看更多</el-button>
                    <img src="./img/9.png" alt="">
                </div>
            </div>
            <div class="big">
                <div class="left" @click="slideLeft">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="right" @click="slideRight">
                    <i class="el-icon-arrow-right"></i>
                </div>
                <ul class="bottom">

                    <li v-for="(item,index) in list" :key="index" @click="goDetails(item.id)">
                        <span>{{item.title}}</span>
                        <img :src="item.main_image_url" alt="">
                    </li>

                </ul>

            </div>

        </div>
        <Backtop />
        <Footer />
    </div>  
</template>

<script>
    import Backtop from '../../components/BackTop/Backtop'
    import {banners,exampleList} from '../../api/common'
    export default {
        data() {
            return {
                bannerList:[],
                list:[],
				activeName:''
            }
        },
        created(){
            banners({}).then(r=>{
                this.bannerList = r.data
            }).catch(_=>{});
			exampleList({category_id:''}).then(res=>{
				res.data.forEach((item,index)=>{
					if(index < 14){
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
						this.list.push(item)
                    }
                });
			}).catch(_=>{})
        },
        mounted() {
			document.getElementsByClassName("bottom")[0].style.overflowY="hidden";
			document.getElementsByClassName("bottom")[0].style.overflowX="hidden";
            banners({}).then(r=>{
                this.bannerList = r.data
            }).catch(_=>{})
        },
        computed: {

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
			goDetails(id){
            	// 项目案例详情
				window.location.href = './productExample.html?id='+id
			},
			slideLeft(){
				let bottom = document.getElementsByClassName('bottom');
				bottom[0].scrollTo({right:300,behavior:'smooth'});
            },
			slideRight(){
            	let bottom = document.getElementsByClassName('bottom');
				console.log(bottom[0]);
				bottom[0].scrollTo({left:300,behavior:'smooth'});
            }
        },
        components:{
            Backtop
        }
    }
</script>

