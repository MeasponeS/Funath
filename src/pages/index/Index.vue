<template>
    <div id="app">
        <Head />
        <div class="item">
            <div class="banner">
<!--                <div class="block">-->
<!--                    <span class="demonstration">默认 Hover 指示器触发</span>-->
<!--                    <el-carousel height="150px">-->
<!--                        <el-carousel-item v-for="(item,index) in bannerList" :key="index">-->
<!--                            <img :src="item" alt="">-->
<!--                        </el-carousel-item>-->
<!--                    </el-carousel>-->
<!--                </div>-->
                <img src="./img/banner.png" alt="">
            </div>
            <div class="nav">
                <ul>
                    <li>产品信息</li>
                    <li>公司介绍</li>
                    <li>新闻资讯</li>
                    <li>项目案例</li>
                    <li @click="goContact">联系我们</li>
                </ul>
            </div>

        </div>
        <Footer />
    </div>  
</template>

<script>
  import {Head} from '../../components/Head/Head'
  import {Footer} from '../../components/Footer/Footer'
  export default {
    data() {
        return {
            bannerList:[
                './img/banner.png',
                './img/banner2.png',
                './img/banner3.png',
                './img/banner4.png',
            ]

        }
    },
    mounted() {
        console.log(this.bannerList);

    },
    computed: {

    },
    methods: {
        goContact(){
            window.location.href = './contact.html'
        }
    },
    components:{

    }
  }
</script>

