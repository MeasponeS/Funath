<template>
    <div id="app" >
        <HeadMobile />
        <div class="item">
            <div 
                class="bannerListNav"
                @mousedown="getScreenOne"
                @mouseup="getScreenTwo"
                >
                <el-carousel
                        :interval="3000"
                        trigger="click"
                        arrow="never"
                        ref="carousel"
                        :indicator-position="bannerList.length > 1? '':'none'"
                        	>
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
<!--                        //:href="item.link"-->
                        <a href="#" @click="goLink(item.link)" >
                            <img :src="item.image_url"  alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="nav">
                <ul>
                    <li @click="goProducts('')">产品信息</li>
                    <li @click="goIntroduction('','')">公司介绍</li>
                    <li @click="goNews('')">新闻资讯</li>
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
                            @click="goProductsList(index,item)"
                    >
                        <div class="left" v-if="parseInt(index%2)">
                            <img :src="item.products.data[0].main_image_url" alt="">
                        </div>
                        <div class="right" v-if="activePic != index">
                            <img :style="{width:item.icon.width,height:item.icon.height}" :src="item.icon.url" alt="">
                            <h3>{{item.en_name}}</h3>
                            <span>{{item.name}}</span>
                        </div>
                        <div class="right extra" v-else>
                            <span v-for="item in extraList" :key="item.id">
                                {{item}}
                            </span>

                        </div>
                        <div class="left" v-if="!parseInt(index%2)">
                            <img :src="item.products.data[0].main_image_url" alt="">
                        </div>
                    </li>
                </ul>
                <el-button @click="goProducts('')">查看更多</el-button>
            </div>
            <div class="middleBanner">
                <img :src="middleBanner.image_url" alt="">
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
                <div class="header">
                    <h3>NEWS</h3>
                    <span>新闻资讯</span>
                </div>
                <div class="body">
                    <div @click="goNews(newList[0].id)" v-if="newList[0]" class="mainNew">
                        <div class="imgs">
                            <img :src="newList[0].image" alt="">
                        </div>

                    </div>

                </div>
                <div class="imgIntro" >- {{newList[0].title}}</div>
                <ul>
                    <li v-for="item in newList" @click="goNews(item.id)">
                        <span>{{item.created_at.trim().split(/\s+/)[0]}}</span>
                        <p>{{item.title}}</p>
                    </li>

                </ul>
                <div class="b">
                    <el-button @click="goNews('')">查看更多</el-button>
                </div>

            </div>
            <div class="big">
                <div class="header">
                    <h3>CASE</h3>
                    <span>推荐案例</span>
                </div>
                <div class="ul">
                    <ul class="bottom" :style="containerStyle">
                        <li
                                v-for="(item,index) in list"
                                :key="index" @click="goDetails(item.id)"
                                v-if="item.thumb1">
                            <span>{{item.title}}</span>
                            <div class="imgs">
                                <img :src="item.thumb1" alt="">
                            </div>
                            <div class="wrap"></div>
                        </li>

                    </ul>
                </div>
                <div class="b">
                    <el-button @click="goExample()">查看更多</el-button>
                </div>
            </div>
        </div>
        <FooterMobile />
        <BacktopMobile/>
    </div>  
</template>

<script>
    import BacktopMobile from '../../components/BackTop_Mobile/Backtop'
    import {banners,exampleList,products,yearPosts} from '../../api/common'
    import {isMobile} from "../../utils/isTerminal";
    import HeadMobile from '../../components/Head_Mobile/Head'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
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
                newList:[],
				distance:0,
                currentIndex:0,
                screenX1:'',
                screenX2:'',
                bannerIsDrag:false
            }
        },
        created(){

            if(!isMobile){
                window.location.href = './index.html'
            }


			let myDate = new Date();
			let tYear = myDate.getFullYear();
			banners({position:'0,1'}).then(r=>{
				r.data.forEach(item=>{
					if(item.position == 0){
						if(item.is_mobile){
							this.bannerList.push(item)
						}
					} else {
						this.middleBanner = item;
					}
				})
			}).catch(_=>{});
			exampleList({category_id:''}).then(res=>{
				res.data.forEach((item,index)=>{
					if(index < 4){
						this.list.push(item);
                    }
                });
			}).catch(_=>{});
			products({limit:4,page:1}).then(r=>{
				this.p_list = r.data;
				this.p_list = this.p_list.slice(0,4);
			}).catch(_=>{});
			yearPosts({year:tYear}).then(r=>{
                this.sort(r.data);
				r.data.forEach((item,index)=>{
                    if(index < 3){
                        this.newList.push(item)
                    }
                })
			})
        },
        mounted() {

        },
        methods: {
			goLink(link){
				if(this.bannerIsDrag) {
					this.bannerIsDrag = false;
                } else {
					window.location.href = link;
                }

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
                    item.created_at = initStr(item.created_at,7,'-')
                })
            },
            goContact(){
                window.location.href = './contact_mobile.html'
            },
            goExample(){
                window.location.href = './productExample_mobile.html'
            },
            goNews(id){
                window.location.href = './news_mobile.html?id=' + id

            },
            goIntroduction(type){
                window.location.href = './introduction_mobile.html?type=' + type
            },
            goProducts(index,name){
               window.location.href = './products_mobile.html?name='+name + '&index=' + index;
            },
            goProductsList(index,name){
                 window.location.href = './productList_mobile.html?id=' + name.id
            },
			goDetails(id){
            	// 项目案例详情
				window.location.href = './productExample_mobile.html?id='+id
			},

			moveLeft(offset,direction){
				if (this.distance < 0 && this.distance > - (this.list.length - 4 + 1) * 300) {
					this.distance += offset * direction;
                } else {
                    this.distance += 0
                }

			},
			moveRight(offset,direction){
				if (this.list.length * 300 - Math.abs(this.distance) > 1200) {
					this.distance += offset * direction;
				} else {
					 this.list = this.list.concat(this.list);
                    this.distance += offset * direction;
                }
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
            },
            getScreenOne(e){
                e.stopPropagation();
                 e.preventDefault();
                this.screenX1 = e.screenX;
                
            },
            getScreenTwo(e){
                e.stopPropagation();
                e.preventDefault();
                this.screenX2 = e.screenX;
                this.checkScreen()
            },
            checkScreen(){
               if(this.screenX1 < this.screenX2){
                    this.$refs.carousel.prev()
               } else if(this.screenX1 > this.screenX2){
                    this.$refs.carousel.next()
               }
            }
        },
		computed:{
			containerStyle() {  //这里用了计算属性，用transform来移动整个图片列表
				return {
					transform:`translate3d(${this.distance}px, 0, 0)`
				}
			}
		},
        components:{
            BacktopMobile,HeadMobile,FooterMobile
        }
    }
</script>

