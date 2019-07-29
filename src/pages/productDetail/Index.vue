<template>
    <div id="app">
        <Head />
        <div class="item">
            <div class="banner">
                <img src="img/banner.png" alt="">
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="./products.html">产品信息</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="">{{info.category}}</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{info.name}}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="l_content">
                <div class="list">
                    <div class="intro">
                        <div class="header">
                            <h3>{{info.name}}</h3>
                        </div>
                        <div class="body">
                            <img :src="info.main_image.url" alt="">
                            <div v-html="info.content">

                            </div>
                        </div>
                    </div>
                    <div class="advance">
                        <div class="header">
                            <h3>产品优势</h3>
                        </div>
                        <div v-html="info.content">

                        </div>
                    </div>
                </div>
                <ul class="box">
                    <li class="header">
                        产品信息
                        <i class="el-icon-back"></i>
                    </li>
                    <el-collapse v-model="activeNames">
                        <el-collapse-item
                                v-for="item in all"
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

                    </el-collapse>
                    <li class="header">
                        综合样本下载
                        <i class="el-icon-d-arrow-left"></i>
                    </li>
                    <li class="imgs">
                        <img src="img/1.png" alt="">
                    </li>
                </ul>
            </div>

        </div>
        <Footer />
    </div>  
</template>

<script>
    import {productDetails,products} from '../../api/common'
    export default {
        data() {
            return {
                all:[],
                activeNames:[],
                info:{}
            }
        },
        mounted() {
            let id = window.URlPARAMS.id;
            this.getDetails(id);
            products({}).then(r=>{
                this.all = r.data;
            }).catch(_=>{})

        },
        computed: {

        },
        methods: {
            getDetails(id){
                productDetails({},id).then(r=>{
                    this.info = r;
                }).catch(_=>{})
            },
            goDetail(id){
                this.getDetails(id);
            }
        },
        components:{

        }
    }
</script>

