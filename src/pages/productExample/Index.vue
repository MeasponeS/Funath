<template>
    <div id="app">
        <Head/>
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
                <h3>PROJECT CASES</h3>
                <span>项目案例</span>
            </div>
        </div>
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>项目案例</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="!showDetail">{{E_details.title||''}}</el-breadcrumb-item>
                </el-breadcrumb>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el_tabs">
                    <el-tab-pane label="所有项目" name=""  >
                        <ul class="all" v-if="showDetail">
                            <li v-for="item in lists" @click="details(item.id)">
                                <img :src="item.main_image_url" alt="">
                                <h4>{{item.title}}</h4>
                                <p>{{item.introduce}}</p>
                                <el-button size="small" @click="details(item.id)">查看更多</el-button>
                            </li>
                        </ul>
                        <div class="details" v-else>
                            <div class="header">
                                <h3> {{E_details.title}}</h3>
                            </div>
                            <div class="body">
                                <div class="left">
                                    <el-carousel
                                            :interval="5000"
                                            arrow="always"
                                            indicator-position="none"	>
                                        <el-carousel-item v-for="(item,index) in E_details.gallery" :key="index">
                                            <img :src="item.url" alt="">
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                                <div class="right">
                                    <h3>项目介绍</h3>
                                    <span>{{E_details.introduce}}</span>
                                    <h3>解决方案</h3>
                                    <span>{{E_details.solution}}</span>
                                    <h3>使用产品</h3>
                                    <ul>
                                        <li
                                                v-for="item in E_details.products"
                                                @click="productDetail(item.id)"
                                        >
                                            {{item.code}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="header">
                                <h3> 推荐案例</h3>
                            </div>
                            <ul class="allList">
                                <li
                                        v-for="item in recommends"
                                        :key="item.id"
                                        @click="details(item.id)"
                                >
                                    <img :src="item.thumb2" alt="">
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.introduce}}</p>
                                    <el-button size="small" @click="details(item.id)">查看更多</el-button>
                                </li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane v-for="item in types" :label="item.name" :name="item.id+''"  >
                        <ul class="all" v-if="showDetail && lists.length">
                            <li v-for="item in lists">
                                <img :src="item.main_image_url" alt="">
                                <h4>{{item.title}}</h4>
                                <p>{{item.introduce}}</p>
                                <el-button size="small" @click="details(item.id)">查看更多</el-button>
                            </li>
                        </ul>
                        <div class="details" v-else-if="!showDetail">
                            <div class="header">
                                <h3> {{E_details.title}}</h3>
                            </div>
                            <div class="body">
                                <div class="left">
                                    <el-carousel
                                            :interval="5000"
                                            arrow="always"
                                            indicator-position="none"	>
                                        <el-carousel-item v-for="(item,index) in E_details.gallery" :key="index">
                                            <img :src="item.url" alt="">
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                                <div class="right">
                                    <h3>项目介绍</h3>
                                    <span>{{E_details.introduce}}</span>
                                    <h3>解决方案</h3>
                                    <span>{{E_details.solution}}</span>
                                    <h3>使用产品</h3>
                                    <ul>
                                        <li
                                            v-for="item in E_details.products"
                                            @click="productDetail(item.id)"
                                        >
                                            {{item.code}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="header">
                                <h3> 推荐案例</h3>
                            </div>
                            <ul class="allList">
                                <li
                                        v-for="item in recommends"
                                        :key="item.id"
                                        @click="details(item.id)"
                                >
                                    <img :src="item.thumb2" alt="">
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.introduce}}</p>
                                    <el-button size="small" @click="details(item.id)">查看更多</el-button>
                                </li>
                            </ul>
                        </div>
                        <div v-else class="empty">该分组下暂无项目案例</div>
                    </el-tab-pane>
                </el-tabs>
                <div class="p" v-if="lists.length">
                    <el-pagination
                            v-if="showDetail"
                            background
                            layout="prev, pager, next"
                            @current-change="pChange"
                            :total="total">
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
    import {exampleTypes,exampleList,exampleDetails,recommends,banners} from '../../api/common'
    export default {
        data() {
            return {
				activeName:'',
                types:[],
                lists:[],
                showDetail:true,
                E_details:'',
				recommends:[],
                total:0,
				bannerList:[]
            }
        },
        created(){
            exampleTypes({}).then(r=>{
                this.types = r.data;
                if(r.data.length){
                    exampleList({category_id:''}).then(res=>{
                        this.lists = res.data;
						this.total = res.meta.pagination.total;
					}).catch(_=>{})
                }
            });
			banners({position:'4'}).then(r=>{
				this.bannerList = r.data
			}).catch(_=>{});
        },
        mounted() {
            let id = window.URlPARAMS.id;
            if(id){
            	this.details(id)
            }
			recommends({}).then(r=>{
				this.recommends = r.data
			}).catch(_=>{})
        },
        computed: {

        },
        methods: {
			handleClick(){
			    this.showDetail = true;
                exampleList({category_id:this.activeName}).then(r=>{
                    this.lists = r.data;
					this.total = r.meta.pagination.total;
				}).catch(_=>{})
            },
            pChange(e){
                exampleList({category_id:this.activeName,limit:10,page:e}).then(r=>{
                    this.lists = r.data
                }).catch(_=>{})
            },
            details(id){
			    this.showDetail = false;
                exampleDetails({},id).then(r=>{
                    this.E_details = r;
					recommends({}).then(r=>{
						this.recommends = r.data
					}).catch(_=>{})
                }).catch(_=>{})
            },
			productDetail(id){
                window.location.href = './productDetail.html?id=' + id
            }
        },
        components:{
			Backtop
        }
    }
</script>

