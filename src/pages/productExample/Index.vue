<template>
    <div id="app">
        <Head/>
        <img src="./img/banner.jpg" alt="" class="banner">
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                </el-breadcrumb>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el_tabs">
                    <el-tab-pane label="所有项目" name="first">
                        <ul class="all">
                            <li>
                                <img src="./img/1.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                            <li>
                                <img src="./img/2.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                            <li>
                                <img src="./img/3.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                            <li>
                                <img src="./img/4.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                            <li>
                                <img src="./img/1.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                            <li>
                                <img src="./img/1.jpg" alt="">
                                <h4>上海院子车库地平</h4>
                                <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                <el-button size="small">查看更多</el-button>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="车库应用" name="second">
                        <div class="cars">
                            <div class="top">
                                <div class="header">
                                    <h3>上海院子车库地坪</h3>
                                </div>
                                <div class="body">
                                    <img src="./img/3.jpg" alt="">
                                    <div class="right">
                                        <h4>项目介绍</h4>
                                        <span>这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介</span>
                                        <h4>解决方案</h4>
                                        <span>这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介这是介绍介</span>
                                        <h4>使用产品</h4>
                                        <ul>
                                            <li>FU800</li>
                                            <li>FU800</li>
                                            <li>FU800</li>
                                            <li>FU800</li>
                                            <li>FU800</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="header">
                                    <h3>推荐案例</h3>
                                </div>
                                <div class="body">
                                    <ul class="all">
                                        <li>
                                            <img src="./img/1.jpg" alt="">
                                            <h4>上海院子车库地平</h4>
                                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                            <el-button size="small">查看更多</el-button>
                                        </li>
                                        <li>
                                            <img src="./img/2.jpg" alt="">
                                            <h4>上海院子车库地平</h4>
                                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                            <el-button size="small">查看更多</el-button>
                                        </li>
                                        <li>
                                            <img src="./img/3.jpg" alt="">
                                            <h4>上海院子车库地平</h4>
                                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                                            <el-button size="small">查看更多</el-button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="展厅应用" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="车间应用" name="fourth">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="写字楼应用" name="fifth">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="商场应用" name="sixth">22</el-tab-pane>
                    <el-tab-pane label="其他场所" name="seventh">111</el-tab-pane>
                </el-tabs>
                <div class="p">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
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
				activeName:'first'
            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {
			handleClick(){

			}
        },
        components:{
			Backtop
        }
    }
</script>

