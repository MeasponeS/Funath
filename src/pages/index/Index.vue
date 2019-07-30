<template>
    <div id="app">
        <Head />
        <div class="item">
            <div class="bannerList">
                <el-carousel
                        :interval="3000"
                        trigger="click"
                        arrow="never"
                        	>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <a :href="item.link">
                            <img :src="item.image_url" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="nav">
                <ul>
                    <li @click="goProducts('')">产品信息</li>
                    <li @click="goIntroduction('','')">公司介绍</li>
                    <li @click="goNews">新闻资讯</li>
                    <li @click="goExample">项目案例</li>
                    <li @click="goContact">联系我们</li>
                </ul>
            </div>
            <div class="center">
                <ul class="pics">
                    <li
                            v-for="(item,index) in p_list"
                            :key="item.id"
                            @mouseenter="showExtra(index,item)"
                            @mouseleave="hideExtra"
                            @click="goProducts(index,item.name)"
                    >
                        <div class="left" v-if="!parseInt(index/2)">
                            <img :src="item.products.data[0].main_image_url" alt="">
                        </div>
                        <div class="right" v-if="activePic != index">
                            <img :src="item.icon" alt="">
                            <h3>{{item.en_name}}</h3>
                            <span>{{item.name}}</span>
                        </div>
                        <div class="right extra" v-else>
                            <span v-for="item in extraList" :key="item.id">
                                {{item}}
                            </span>

                        </div>
                        <div class="left" v-if="parseInt(index/2)">
                            <img :src="item.products.data[0].main_image_url" alt="">
                        </div>
                    </li>
                </ul>
                <el-button @click="goProducts">查看更多</el-button>
            </div>
            <div class="middleBanner">
                <div class="header">
                    <h3>COMPANY PROFILE</h3>
                    <span>公司介绍</span>
                </div>
                <div class="body">
                    <ul>
                        <li @click="goIntroduction('one')">孚纳森哲学</li>
                        <li @click="goIntroduction('two')">合作伙伴</li>
                        <li @click="goIntroduction('three')">社会责任</li>
                    </ul>
                </div>

            </div>
            <div class="news">
                <img :src="middleBanner" alt="">
                <div class="header">
                    <h3>NEWS</h3>
                    <span>新闻资讯</span>
                </div>
                <div class="body">
                    <ul>
                        <li v-for="item in newList" @click="goNews(item.id)">
                            <span>{{item.created_at.trim().split(/\s+/)[0]}}</span>
                            <p>{{item.title}}</p>
                        </li>

                    </ul>
                    <el-button @click="goNews">查看更多</el-button>
                    <div @click="goNews(newList[0].id)">
                        <div class="imgs">
                            <img :src="newList[0].image" alt="">
                        </div>
                        <div class="imgIntro">- {{newList[0].title}}</div>
                    </div>

                </div>
            </div>
            <div class="big">
                <div class="left" @click="slideLeft" v-if="list.length > 4">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="right" @click="slideRight" v-if="list.length > 4">
                    <i class="el-icon-arrow-right"></i>
                </div>
                <ul class="bottom">

                    <li v-for="(item,index) in list" :key="index" @click="goDetails(item.id)">
                        <span>{{item.title}}</span>
                        <img :src="item.main_image_url" alt="">
                    </li>

                </ul>

            </div>

        </div>
        <Backtop />
        <Footer />
    </div>  
</template>

<script>
    import Backtop from '../../components/BackTop/Backtop'
    import {banners,exampleList,products,yearPosts} from '../../api/common'
    export default {
        data() {
            return {
                bannerList:[],
				middleBanner:'',
                list:[],
				activeName:'',
				p_list:[],
                activePic:10,
				extraList:[],
                newList:[]
            }
        },
        created(){
			let myDate = new Date();
			let tYear = myDate.getFullYear();
			banners({}).then(r=>{
                this.bannerList = r.data
            }).catch(_=>{});
			exampleList({category_id:''}).then(res=>{
				res.data.forEach((item,index)=>{
					if(index < 14){
						this.list.push(item);
                    }
                });
			}).catch(_=>{});
			products({limit:4,page:1}).then(r=>{
				this.p_list = r.data;
				this.p_list = this.p_list.slice(0,4);
			}).catch(_=>{});
			yearPosts({year:tYear}).then(r=>{
				this.newList = r.data
			})
        },
        mounted() {
			document.getElementsByClassName("bottom")[0].style.overflowY="hidden";
			document.getElementsByClassName("bottom")[0].style.overflowX="hidden";
			banners({position:'0,1'}).then(r=>{
				r.data.forEach(item=>{
					if(item.position == 6){
						this.bannerList.push(item)
					} else {
						this.middleBanner = item;
					}
				})
			}).catch(_=>{});
        },
        computed: {

        },
        methods: {
            goContact(){
                window.location.href = './contact.html'
            },
            goExample(){
                window.location.href = './productExample.html'
            },
            goNews(id){
                window.location.href = './news.html?id=' + id
            },
            goIntroduction(type){
                window.location.href = './introduction.html?type=' + type
            },
            goProducts(index,name){
                window.location.href = './products.html?name='+name + '&index=' + index;
            },
			goDetails(id){
            	// 项目案例详情
				window.location.href = './productExample.html?id='+id
			},
			slideLeft(){
				let bottom = document.getElementsByClassName('bottom');
				bottom[0].scrollTo({right:300,behavior:'smooth'});
            },
			slideRight(){
            	let bottom = document.getElementsByClassName('bottom');
				console.log(bottom[0]);
				bottom[0].scrollTo({left:300,behavior:'smooth'});
            },
			showExtra(index,item){
            	let ary = [];
				this.activePic = index;
				item.products.data.forEach((i,k)=>{
					if(k < 3){
						ary.push(i.name)
                    }
				});
				this.extraList = ary;
            },
            hideExtra(){
            	this.activePic = 10
            }
        },
        components:{
            Backtop
        }
    }
</script>

