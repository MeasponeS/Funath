<template>
    <div id="app">
        <Head />
        <div class="item">
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
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="./products.html">产品信息</a></el-breadcrumb-item>
<<<<<<< HEAD
                <el-breadcrumb-item><a href="javascript:;">{{info.category}}</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="#">{{info.name}}</a></el-breadcrumb-item>
=======
                <el-breadcrumb-item><a :href="backUrl" >{{info.category}}</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{info.name}}</el-breadcrumb-item>
>>>>>>> 16cde0c8d3a31164d3c907d15941e8fc61339eca
            </el-breadcrumb>

            <div class="l_content">
                <div class="list" v-html="info.content">
                </div>
                <ul class="box">
                    <li class="header">
                        产品信息
                        <i class="el-icon-back"></i>
                    </li>
                    <el-collapse v-model="activeNames">
<<<<<<< HEAD
                        <div v-for="item in all" @mouseenter="openCollapse(item.id)">
=======
                        <div v-for="item in all"
                            @mouseleave="closeCollapse"
                         @mouseenter="openCollapse(item)">
>>>>>>> 16cde0c8d3a31164d3c907d15941e8fc61339eca
                            <el-collapse-item
                                    :title="item.name"
                                    :key="item.id"
                                    :name="item.id" >
                                <ul class="rightList">
                                    <li
                                            v-for="i in item.products.data"
                                            :class="{'active':activeId == i.id}"
                                            :key="i.id"
                                            @click="goDetail(i.id)"
                                    >
                                        - {{i.name}}
                                    </li>
                                </ul>
                            </el-collapse-item>
                        </div>


                    </el-collapse>
                    <li class="header">
                        综合样本下载
                        <i class="el-icon-d-arrow-left"></i>
                    </li>
                    <li class="imgs">
                        <img src="./img/1.png" alt="">
                    </li>
                </ul>
            </div>

        </div>
        <Footer />
    </div>
</template>

<script>
    import {productDetails,products,banners} from '../../api/common'
    export default {
        data() {
            return {
                all:[],
                activeNames:[],
                info:{},
				bannerList:[],
                activeId:'',
<<<<<<< HEAD
                opening: false
=======
                backUrl:''
>>>>>>> 16cde0c8d3a31164d3c907d15941e8fc61339eca
            }
        },
        mounted() {
            let id = window.URlPARAMS.id;
            this.backUrl = './productList.html?id=' + window.URlPARAMS.backId
            this.getDetails(id);
			products({}).then(r=>{
                this.all = r.data;
                r.data.forEach(item=>{
                	item.products.data.forEach(i=>{
                		if(i.id == id){
							this.activeNames.push(parseInt(item.id));
                        }
                    })
                })
            }).catch(_=>{});
			banners({position:'9'}).then(r=>{
				this.bannerList = r.data
			}).catch(_=>{});
		},
        computed: {

        },
        methods: {
            getDetails(id){
				this.activeId = id;
                productDetails({},id).then(r=>{
                    this.info = r;
                
                }).catch(_=>{})
            },
            goDetail(id){
                this.getDetails(id);
            },
<<<<<<< HEAD
			openCollapse(id){
                // if(!this.opening) {
                //     this.opening = true;
                //     setTimeout(()=>{
                //         this.activeNames = id;
                //         this.opening = false;
                //     },300);
                // }
=======
            setCollapse(){
                this.all.forEach(item=>{
                    item.products.data.forEach(i=>{
                        if(this.activeId == i.id){
                            this.activeNames.push(item.id)
                        }
                    })
                })
            },
            closeCollapse(){
                this.activeNames = [];
                this.setCollapse()
            },
			openCollapse(item){
				window.setTimeout(()=>{
                    this.activeNames = [];
                    this.setCollapse();
					this.activeNames.push(item.id);
				},300)
>>>>>>> 16cde0c8d3a31164d3c907d15941e8fc61339eca
            }
        },
        components:{

        }
    }
</script>

