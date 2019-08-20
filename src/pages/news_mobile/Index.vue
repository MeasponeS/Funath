<template>
    <div id="app">
<!--        <div class="head-warp" @click="closeSearch">-->
<!--            <div class="head">-->
<!--                <div class="left" @click="goHome">-->
<!--                    <img src="../../assets/img/logo.png" alt="">-->
<!--                </div>-->
<!--                <div class="rightNav">-->
<!--                    <i class="el-icon-search" @click="showSearch"></i>-->
<!--                    <i class="el-icon-close" v-if="showList" @click="hideNavList"></i>-->
<!--                    <img src="../../components/Head_Mobile/img/menu.png"  v-else @click="showNavList" alt="" class="icon">-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="search" v-if="search" @click="showSearch">-->
<!--                <el-input-->
<!--                        class="input"-->
<!--                        prefix-icon="el-icon-search"-->
<!--                        size="small"-->
<!--                        placeholder="Search"></el-input>-->
<!--            </div>-->
<!--            <div class="navList" v-if="showList">-->
<!--                <ul>-->
<!--                    <li-->
<!--                            v-for="(item,index) in years"-->
<!--                            :key="index"-->
<!--                            @click="changeYear(item)"-->
<!--                    >{{item}}</li>-->
<!--                    <li @click="download">综合样本下载</li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
        <HeadMobile />
        <div class="bannerListNav">
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
                <h3>NEWS</h3>
                <span>新闻资讯</span>
            </div>
        </div>
        <div class="b_box">
            <div class="item">
                <ul class="left" v-if="showDetail">
                    <li
                            v-for="(item,index) in years"
                            :class="{active:activeClass == item}"
                            @click="detail(item)"
                            :key="index">
                        <i class="el-icon-caret-bottom"></i>
                        {{item}}
                    </li>
                </ul>
                <div class="news">
                    <div class="right" v-if="showDetail">
                        <div class="header">
                            <h3>{{this.activeClass}}年</h3>
                        </div>
                        <div class="body">
                            <ul>
                                <li v-for="(item,index) in postList">
                                    <div class="left">
                                        <div class="l_left">
                                            <div class="new" v-if="index < 3">
                                                NEW
                                            </div>
                                             <div class="newEmpty" v-else>
                                                
                                            </div>
                                            <div class="title">
                                                <h4 @click="showPostDetail(item.id)">{{item.title}}</h4>
                                                <span>{{item.created_at}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right" @click="showPostDetail(item.id)">
                                        <img src="./img/527505623.jpg" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="right" v-else>
                        <div class="header  ">
                            <h3 class="h3Limit"> 
                                <span class="headerLimit">
                                    {{postDetails.title}}
                                </span>
                            </h3>
                            <span class="createAt">{{postDetails.created_at}}</span>
                        </div>
                        <div v-html="postDetails.content" class="v_content"></div>
                    </div>
                </div>

            </div>
        </div>
        <FooterMobile/>
        <BacktopMobile />
    </div>  
</template>

<script>
	import BacktopMobile from '../../components/BackTop_Mobile/Backtop'
    import {newYears,yearPosts,postDetails,banners} from '../../api/common'
    import HeadMobile from '../../components/Head_Mobile/Head'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
    export default {
        data() {
            return {
                activeClass:'',
                years:[],
                postList:[],
                showDetail:true,
                postDetails:'',
				bannerList:[],
                search:false,
                showList:false,
            }
        },
        created(){
            newYears({}).then(r=>{
                this.years = r;
                if(r.length>0){
                    this.activeClass = r[0];
                    yearPosts({year:r[0]}).then(res=>{
                        this.sort(res.data);
                        this.postList = res.data;
                    }).catch(_=>{})
                }
            }).catch(_=>{})
        },
        mounted() {
        	let id = window.URlPARAMS.id || '';
        	if(id){
				this.showPostDetail(id)
            }
			banners({position:'3'}).then(r=>{
				r.data.forEach(item=>{
					if(item.is_mobile){
						this.bannerList.push(item)
					}
				})
			}).catch(_=>{});
        },
        computed: {

        },
        methods: {
            changeYear(item){
                this.hideNavList()
                this.detail(item);
            },
            showSearch(e){
                e.preventDefault();
                e.stopPropagation();
                if(this.search){
                    this.search = false
                }else{
                    this.search = true
                }
            },
            closeSearch(){
                this.search = false
            },
            showNavList(){
                this.showList = true
            },
            hideNavList(){
                this.showList = false
            },
            goHome(){
                window.location.href = './index_mobile.html'
            },
            detail(item){
                this.activeClass = item;
                this.showDetail = true;
                yearPosts({year:item}).then(r=>{
					this.sort(r.data);
                    this.postList = r.data
                }).catch(_=>{})
            },
            showPostDetail(id){
                this.showDetail = false;
                postDetails({},id).then(r=>{
                    this.postDetails = r.data;
					this.postDetails.created_at = this.postDetails.created_at.trim().split(/\s+/)[0]
                }).catch(_=>{})
            },
			download(){
				window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
            },
            sort(ary){
                
                ary.forEach(item=>{
					item.created_at = item.created_at.trim().split(/\s+/)[0];
                    item.created_at = (item.created_at.replace('-','')).replace('-','')
                });
               ary.sort(function(a,b) {
                   return b.created_at - a.created_at
               });
               let initStr = (a,b,c) =>{
                   return a.slice(0,b) + c + a.slice(b)
               };
                ary.forEach(item=>{
                    item.created_at = initStr(item.created_at,4,'-');
                    item.created_at = initStr(item.created_at,7,'-');
                })
            }
        },
        components:{
            BacktopMobile,HeadMobile,FooterMobile
        }
    }
</script>

