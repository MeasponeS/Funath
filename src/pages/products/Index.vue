<template>
    <div id="app" @click="stayClose">
        <Head />
        <div class="navH">
            <div class="banner">
                <el-carousel
                        :interval="3000"
                        trigger="click"
                        arrow="never"
                        :indicator-position="bannerList.length > 1? '':'none'"
                >
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <a :href="item.link">
                            <img :src="item.image_url" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
                <div class="header">
                    <h3>PRODUCTS</h3>
                    <span>产品信息</span>
                </div>
            </div>
        </div>
        <div class="b_box">
            <div class="item">
                <ul class="nav">
                    <li
                        v-for="(item,index) in p_list"
                        :key="index"
                        :style="{width:100/(p_list.length+1)+'%'}"
                        :class="{active:type == index }"
                        @click="changeNav(index,item.name)"
                        :name="item.name"
                    >
                        <i class="el-icon-caret-bottom"></i>
                        {{item.name}}
                    </li>
                    <li
                         :class="{active:type == p_list.length }" 
                         @click="changeNav(p_list.length,'')"
                         class="searchFather"
                         :style="{width:100/(p_list.length+1)+'%'}"
                         >
                        <i class="el-icon-search"></i>
                    </li>
                    <div class="search" v-if="showSearch" @click="stay">
                        <el-input
                            prefix-icon="el-icon-search"
                            placeholder="请输入产品名称"
                            v-model="searchJson"
                            @keyup.native="doSearch"
                        />
                        <div class="dropDownBox" v-if="showSearchInput">
                            <div
                                class="dropDown canHover"
                                v-if="searchResult.length"
                                v-for="(item,index) in searchResult"
                                @click="goProductDetails(item.id)"
                            >{{item.name}}</div>
                            <div
                                class="dropDown noResult"
                                v-if="showNoResult"
                            >没有找到符合条件的结果</div>
                        </div>
                    </div>
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
                    <div class="left" v-if="item.main_icon">
                        <img :style="{width:item.main_icon.width,height:item.main_icon.height}" :src="item.main_icon.url" alt="">
                    </div>
                    <div class="right">
                        <h3>{{item.en_name}}</h3>
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <ul class="p_body">
                    <li v-for="(i,k) in item.products.data"
                        :key="k"
                        @click="goProductDetails(i.id)"
                    >
                        <div class="p_imgs"><img :src="i.main_image_url" alt=""></div>
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
                        <li
                            v-for="item in recommends"
                            :key="item.id"
                            @click="goDetails(item.id)"
                        >
                            <div class="paImgs"><img :src="item.thumb2" alt=""></div>
                            
                            <h4>{{item.title}}</h4>
                            <p>{{item.introduce}}</p>
                            <el-button size="small" @click="goDetails(item.id)">查看更多</el-button>
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
    import {products,recommends,banners,productList} from '../../api/common'
    import {isMobile} from "../../utils/isTerminal";

    export default {
		data() {
			return {
			    p_list:[],
				type:'',
                showSearch:false,
				recommends:[],
                bannerList:[],
                searchJson:'',
                searchResult:[],
                showNoResult:false,  // 是否显示无结果
                showSearchInput:false   // 是否显示无搜索框
 			}
		},
        created(){
		    products({}).then(r=>{
                this.p_list = r.data;
                this.type = 0;
            }).catch(_=>{});
			recommends({}).then(r=>{
				this.recommends = r.data
			}).catch(_=>{});
			banners({position:'2'}).then(r=>{
				r.data.forEach(item=>{
					if(!item.is_mobile){
						this.bannerList.push(item)
					}
				});
			}).catch(_=>{});
        },
		mounted() {
			if(window.URlPARAMS.name){
				window.setTimeout(()=>{
					this.changeNav(window.URlPARAMS.index,decodeURI(window.URlPARAMS.name))
                },300)
			}
			// 426 1912 2549
		},
		computed: {

		},
        watch:{
		    searchJson(val){
				productList({search:val}).then(r=>{
					this.searchResult = r.data;
                    if(!r.data.length){
                    	this.showNoResult = true
                    } else {
                    	this.showNoResult = false
                    }
				}).catch(_=>{});
			}
        },
		methods: {
			doSearch(e){
				if(e.keyCode == 13){
					if(this.searchResult.length&&this.searchResult.length > 1){
						window.location.href = './productList.html?id=' + this.p_list[0].id
					} else if(this.searchResult.length == 1) {
						let item = this.searchResult[0];
						window.location.href = './productDetail.html?id='+item.id
					}
				}
			},
			stayClose(){
				this.showSearch = false;
				this.showSearchInput = false
            },
			getScrollTop(){
				let scrollTop=0;
				if(document.documentElement&&document.documentElement.scrollTop){
					scrollTop=document.documentElement.scrollTop;
				}else if(document.body){
					scrollTop=document.body.scrollTop;
				}
				return scrollTop;
			},
			stay(e){
				this.showSearch = true;
				e.stopPropagation();
				this.showSearchInput = true
            },
			changeNav(index,name){
				let event = window.event || arguments.callee.caller.arguments[0];
				event.stopPropagation();
				// this.showSearch = name?false:true;
                if(!name){
                    this.showSearch = !this.showSearch;
                } else {
					this.showSearch = false;
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
                }
				 this.type = index;
			},
            list(id){
                if(isMobile){
                    window.location.href = './productList_mobile.html?id='+id
                } else {
                    window.location.href = './productList.html?id=' + id
                }

            },
            goDetails(id){
                if(isMobile){
                    window.location.href = './productExample_mobile.html?id='+id
                } else {
                    window.location.href = './productExample.html?id='+id
                }

            },
			goProductDetails(id){
                if(isMobile){
                    window.location.href = './productDetail_mobile.html?id='+id
                } else {
                    window.location.href = './productDetail.html?id='+id
                }

            }
		},
		components:{
			Backtop
		}
	}
</script>

