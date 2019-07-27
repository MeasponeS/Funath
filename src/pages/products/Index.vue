<template>
    <div id="app">
        <Head />
        <div class="navH">
            <img src="./img/banner.png" alt="" class="banner">
            <ul class="nav">
                <li :class="type == 'one'?'active':''" @click="changeNav('one',426)">
                    <i class="el-icon-caret-bottom"></i>
                    混凝土硬化剂</li>
                <li :class="type == 'two'?'active':''"  @click="changeNav('two',1912)">
                    <i class="el-icon-caret-bottom"></i>
                    面层防护剂</li>
                <li :class="type == 'three'?'active':''"  @click="changeNav('three',2549)">
                    <i class="el-icon-caret-bottom"></i>
                    水泥基材料</li>
                <li :class="type == 'four'?'active':''"  @click="changeNav('four',2549)">
                    <i class="el-icon-caret-bottom"></i>
                    防腐涂料</li>
                <li :class="type == 'five'?'active':''"  @click="changeNav('five',2549)">
                    <i class="el-icon-caret-bottom"></i>
                    收光增效剂</li>
                <li :class="type == 'six'?'active':''" @click="changeNav('six',0)">
                    <i class="el-icon-search"></i>
                    <div class="search" v-if="showSearch">
                        <el-input
                            prefix-icon="el-icon-search"
                            placeholder="Search"
                        />
                    </div>
                </li>
            </ul>

        </div>
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>产品信息</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <ul class="products">
                <li class="p_head">

                </li>
            </ul>




            <div class="bottom">
                <div class="header">
                    <h3>推荐案例</h3>
                </div>
                <div class="body">
                    <ul class="all">
                        <li>
                            <img src="./img/1.png" alt="">
                            <h4>上海院子车库地平</h4>
                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                            <el-button size="small">查看更多</el-button>
                        </li>
                        <li>
                            <img src="./img/2.png" alt="">
                            <h4>上海院子车库地平</h4>
                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                            <el-button size="small">查看更多</el-button>
                        </li>
                        <li>
                            <img src="./img/3.png" alt="">
                            <h4>上海院子车库地平</h4>
                            <p>介绍上海院子介绍上海院子介绍上海院子介绍上海院子</p>
                            <el-button size="small">查看更多</el-button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Backtop/>
        <Footer/>
    </div>
</template>

<script>
	import Backtop from '../../components/BackTop/Backtop'
	export default {
		data() {
			return {
				type:'one',
                showSearch:false
			}
		},
		mounted() {
			// 426 1912 2549
		},
		computed: {

		},
		methods: {
			getScrollTop(){
				let scrollTop=0;
				if(document.documentElement&&document.documentElement.scrollTop){
					scrollTop=document.documentElement.scrollTop;
				}else if(document.body){
					scrollTop=document.body.scrollTop;
				}
				return scrollTop;
			},
			changeNav(type,top){
				this.type = type;
				this.showSearch = false;
				if(type === 'six'){
					this.showSearch = true
                }
				let scrollTop = this.getScrollTop();
				window.scrollTo({top:top,behavior:'smooth'});
			},
		},
		components:{
			Backtop
		}
	}
</script>

