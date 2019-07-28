<template>
    <div id="app">
        <Head />
        <div class="navH">
            <img src="./img/banner.png" alt="" class="banner">


        </div>
        <div class="b_box">
            <div class="item">
                <ul class="nav">
                    <li
                        v-for="(item,index) in p_list"
                        :key="index"
                        :class="{active:type == index }"
                        @click="changeNav(index,item.name)"
                        :name="item.name"
                    >
                        <i class="el-icon-caret-bottom"></i>
                        {{item.name}}
                    </li>
                    <li :class="{active:type == p_list.length }" @click="changeNav(p_list.length,'')">
                        <i class="el-icon-search"></i>
                        <div class="search" v-if="showSearch">
                            <el-input
                                    prefix-icon="el-icon-search"
                                    placeholder="Search"
                            />
                        </div>
                    </li>
                </ul>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>产品信息</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <div class="products"
                 v-for="(item,index) in p_list"
                 :name="item.name"
                 :key="index"
            >
                <div class="p_head" @click="list(item.id)">
                    <div class="left">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="right">
                        <h3>{{item.en_name}}</h3>
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <ul class="p_body">
                    <li v-for="(i,k) in item.products.data"
                        :key="k"
                    >
                        <img :src="i.main_image_url" alt="">
                        <span>{{i.name}}</span>
                    </li>
                </ul>
            </div>




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
    import {products} from '../../api/common'
	export default {
		data() {
			return {
			    p_list:[],
				type:'',
                showSearch:false
			}
		},
        created(){
		    products({}).then(r=>{
                this.p_list = r.data;
                this.type = 0;
            }).catch(_=>{})
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
			changeNav(index,name){
			    this.showSearch = name?false:true;
                let products = document.getElementsByClassName('products');
                let newArr = [];
                for(let i=0; i<products.length; i++){
                    newArr.push(products[i]);
                }
                newArr.forEach(item=>{
                    let i_name = item.getAttribute('name');
                    if(i_name == name){
                        window.scrollTo({top:item.offsetTop,behavior:'smooth'});
                    }
                });
                this.type = index;
			},
            list(id){
                window.location.href = './productList.html?id=' + id
            }
		},
		components:{
			Backtop
		}
	}
</script>

