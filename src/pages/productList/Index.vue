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
                        <a :href="item.link" >
                            <img :src="item.image_url" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="./products.html">产品信息</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{list[0].category}}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="l_content">
                <div class="list">
                    <div class="header">
                        <h3>{{list[0].category}}</h3>
                    </div>
                    <ul>
                        <li
                                v-for="(item,index) in list"
                                :key="index"
                                @click="goDetail(item.id)"
                        >
                            <img :src="item.main_image_url" alt="" class="left">
                            <div class="right">
                                <h3>
                                    {{item.name}}
                                </h3>
                                <div class="tags">
                                    <span v-for="i in item.tags">
                                        {{i}}
                                    </span>
                                </div>
                                <img :src="item.spec_image_url" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <ul class="box">
                    <li class="header">
                        产品信息
                        <i class="el-icon-back" @click="goProducts"></i>
                    </li>
                    <el-collapse v-model="activeNames">
                        <div v-for="item in all" @mouseenter="openCollapse(item.id)"
                            @mouseleave="closeCollapse"
                        >
                            <el-collapse-item
                                    :title="item.name"
                                    :key="item.id"
                                    :name="item.id" >
                                <ul class="rightList">
                                    <li
                                            v-for="i in item.products.data"
                                            :key="i.id"
                                            @click="goDetail(i.id)"
                                    >
                                        - {{i.name}}
                                    </li>
                                </ul>
                            </el-collapse-item>
                        </div>


                    </el-collapse>
                    <li class="header" >
                        综合样本下载
                        <i class="el-icon-d-arrow-left" @click="download"></i>
                    </li>
                    <li class="imgs" @click="download">
                        <img src="./img/1.png" alt="">
                    </li>
                </ul>
            </div>

        </div>
        <Footer />
    </div>  
</template>

<script>
    import {productList,products,banners} from '../../api/common'
    export default {
        data() {
            return {
                list:[],
                all:[],
                activeNames:[],
				bannerList:[]
            }
        },
        mounted() {
            let id = window.URlPARAMS.id;
            this.getList(id);
            products({}).then(r=>{
                this.all = r.data;
            }).catch(_=>{});
			banners({position:'8'}).then(r=>{
				r.data.forEach(item=>{
					if(!item.is_mobile){
						this.bannerList.push(item)
					}
				});
			}).catch(_=>{});
        },
        computed: {

        },
        methods: {
            getList(id){
                productList({category_id:id}).then(r=>{
                    this.list = r.data;
                }).catch(_=>{});
            },
            goDetail(id){
                window.location.href = './productDetail.html?id='+id + '&backId='+window.URlPARAMS.id
            },
            closeCollapse(){
                this.activeNames = '';
            },
			openCollapse(id){
            	window.setTimeout(()=>{
					this.activeNames = id;
                },300)

			},
			goProducts(){
				window.location.href = './products.html?name=&index=';
			},
            download(){
            	window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
            }
        },
        components:{

        }
    }
</script>

