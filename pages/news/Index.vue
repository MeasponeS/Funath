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
                        <li
                                v-for="(item,index) in years"
                                :class="{active:activeClass == item}"
                                @click="detail(item)"
                                :key="index">
                            {{item}}
                            <i class="el-icon-arrow-right"></i>
                        </li>
                        <li class="download">
                            综合样本下载
                            <i class="el-icon-arrow-down"></i>
                        </li>
                        <li class="img">
                            <img src="./img/1.jpg" alt="">
                        </li>
                    </ul>
                    <div class="right" v-if="showDetail">
                        <div class="header">
                            <h3>2019年</h3>
                        </div>
                        <div class="body">
                            <ul>
                                <li v-for="(item,index) in postList">
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new" v-if="index < 3">
                                                NEW
                                            </div>
                                            <div class="title">
                                                <h4>{{item.title}}</h4>
                                                <span>{{item.created_at}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right" @click="showPostDetail(item.id)">
                                        >>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="right" v-else>
                        <div class="header">
                            <h3> {{postDetails.title}}</h3>
                            <span class="createAt">{{postDetails.created_at}}</span>
                        </div>
                        <div v-html="postDetails.content" class="v_content"></div>
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
    import {newYears,yearPosts,postDetails} from '../../api/common'
    export default {
        data() {
            return {
                activeClass:'',
                years:[],
                postList:[],
                showDetail:true,
                postDetails:''
            }
        },
        created(){
            newYears({}).then(r=>{
                this.years = r;
                if(r.length>0){
                    this.activeClass = r[0];
                    yearPosts({year:r[0]}).then(res=>{
                        this.postList = res.data;
                    }).catch(_=>{})
                }
            }).catch(_=>{})
        },
        mounted() {
        },
        computed: {

        },
        methods: {
            detail(item){
                this.activeClass = item;
                this.showDetail = true;
                yearPosts({year:item}).then(r=>{
                    this.postList = r.data
                }).catch(_=>{})
            },
            showPostDetail(id){
                this.showDetail = false;
                postDetails({},id).then(r=>{
                   this.postDetails = r.data
                }).catch(_=>{})
            }
        },
        components:{
			Backtop
        }
    }
</script>

