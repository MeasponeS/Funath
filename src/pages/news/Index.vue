<template>
    <div id="app">
        <Head />
        <img src="./img/banner.jpg" alt="" class="banner">
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="news">
                    <ul class="left">
                        <li :class="activeClass?'active':''">
                            2019
                            <i class="el-icon-arrow-right"></i>
                        </li>
                        <li>
                            2018
                            <i class="el-icon-arrow-right"></i></li>
                        <li>
                            2017
                            <i class="el-icon-arrow-right"></i></li>
                        <li class="download">
                            综合样本下载
                            <i class="el-icon-arrow-down"></i>
                        </li>
                        <li class="img">
                            <img src="./img/1.jpg" alt="">
                        </li>
                    </ul>
                    <div class="right">
                        <div class="header">
                            <h3>2019年</h3>
                        </div>
                        <div class="body">
                            <ul>
                                <li>
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>孚纳森成功签约上海院子车库地坪项目</h4>
                                                <span>2019年06月15日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        >>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>孚纳森成功签约上海院子车库地坪项目</h4>
                                                <span>2019年06月15日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        >>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>孚纳森成功签约上海院子车库地坪项目</h4>
                                                <span>2019年06月15日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        >>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>孚纳森成功签约上海院子车库地坪项目</h4>
                                                <span>2019年06月15日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        >>
                                    </div>
                                </li>
                                <li>
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>孚纳森成功签约上海院子车库地坪项目</h4>
                                                <span>2019年06月15日</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        >>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Backtop />
        <Footer/>
    </div>  
</template>

<script>
	import Backtop from '../../components/BackTop/Backtop'
    export default {
        data() {
            return {
                activeClass:false
            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {

        },
        components:{
			Backtop
        }
    }
</script>

