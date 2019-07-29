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
                    <li @click="goIntroduction">公司介绍</li>
                    <li @click="goNews">新闻资讯</li>
                    <li @click="goExample">项目案例</li>
                    <li @click="goContact">联系我们</li>
                </ul>
            </div>
            <div class="center">
                <ul class="pics">
                    <li><img src="img/1.png" alt=""></li>
                    <li class="word">
                        <img src="img/4.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="img/2.png" alt=""></li>
                    <li class="word">
                        <img src="img/6.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li class="word">
                        <img src="img/7.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="img/3.png" alt=""></li>
                    <li class="word">
                        <img src="img/8.png" alt="">
                        <h3>CONCRETE CRYSTAL HARDENER  </h3>
                        <span>混凝土硬化剂</span>
                    </li>
                    <li><img src="img/5.png" alt=""></li>


                </ul>
                <el-button>查看更多</el-button>
            </div>
            <div class="middleBanner">
                <img src="img/middleBanner.png" alt="">
                <ul>
                    <li>孚纳森哲学</li>
                    <li>合作伙伴</li>
                    <li>社会责任</li>
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
                    <el-button>查看更多</el-button>
                    <img src="img/9.png" alt="">
                </div>
            </div>
            <ul class="bottom">
                <li>
                    <span>上海中心</span>
                    <img src="img/FUNATH网站-主页修_案例图300-400-15.png" alt="">
                </li>
                <li>
                    <span>上海院子车库</span>
                    <img src="img/FUNATH网站-主页修_案例图300-400-16.png" alt="">
                </li>
                <li>
                    <span>上海东方明珠</span>
                    <img src="img/FUNATH网站-主页修_案例图300-400-17.png" alt="">
                </li>
                <li>
                    <span>陆家嘴国金中心</span>
                    <img src="img/FUNATH网站-主页修_案例图300-400-18.png" alt="">
                </li>
            </ul>
        </div>
        <Backtop />
        <Footer />
    </div>  
</template>

<script>
    import Backtop from '../../components/BackTop/Backtop'
    import {banners} from '../../api/common'
    export default {
        data() {
            return {
                bannerList:[]

            }
        },
        created(){
            banners({}).then(r=>{
                this.bannerList = r.data
            }).catch(_=>{})
        },
        mounted() {
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
            goIntroduction(){
                window.location.href = './introduction.html'
            },
            goProducts(){
                window.location.href = './products.html'
            },
        },
        components:{
            Backtop
        }
    }
</script>

