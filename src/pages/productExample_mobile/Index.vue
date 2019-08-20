<template>
    <div id="app">
        <HeadMobile />
        <div class="mainScreen">
            <ul class="example" v-if="showExampleList">
                <li
                        v-for="item in types"
                        @click="changeList(item.id)"
                >
                    <div class="wrap"></div>
                    <img :src="item.case?item.case.main_image_url:''" alt="">
                    <span class="names">{{item.name}}</span>
                </li>
            </ul>
            <div v-else>
                <div class="bannerListNav">
                    <el-carousel
                            :interval="3000"
                            trigger="click"
                            arrow="never"
                            :indicator-position="bannerList.length&&bannerList.length > 1? '':'none'"
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
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick"  class="el_tabs">
                            <el-tab-pane  name="" >
                                <span slot="label" ><i class="el-icon-caret-bottom" ></i> 所有项目</span>
                                <div class="tabHeader" v-if="showDetail">
                                    <h3>所有项目</h3>
                                </div>
                                <ul class="all" v-if="showDetail">
                                    <li v-for="item in lists" @click="details(item.id)">
                                        <div class="psImgs"> <img :src="item.main_image_url" alt=""></div>
                                        <h4>{{item.title}}</h4>
                                    </li>
                                </ul>
                                <div class="details" v-else>
                                    <div class="header">
                                        <h3> {{E_details.title}}</h3>
                                    </div>
                                    <div class="body">
                                        <div class="left">
                                            <el-carousel
                                                    :interval="3000"
                                                    :arrow="E_details.gallery.length&&E_details.gallery.length>1?'always':'never'"
                                                    indicator-position="none"	>
                                                <el-carousel-item v-for="(item,index) in E_details.gallery" :key="index">
                                                    <img :src="item.url" alt="">
                                                </el-carousel-item>
                                            </el-carousel>
                                        </div>
                                        <div class="right">
                                            <h3>项目介绍</h3>
                                            <span style="white-space: pre-wrap;">{{E_details.introduce}}</span>
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
                                </div>
                            </el-tab-pane>
                            <el-tab-pane
                                    v-for="item in types"
                                    :name="item.id+''"
                            >
                                <span slot="label"><i class="el-icon-caret-bottom"></i> {{item.name}}</span>
                                <div class="tabHeader" v-if="showDetail">
                                    <h3>{{item.name}}</h3>
                                </div>
                                <ul class="all" v-if="showDetail && (lists.length&&lists.length)" >
                                    <li v-for="item in lists" @click="details(item.id)">
                                        <div class="psImgs"><img :src="item.main_image_url" alt=""></div>
                                        <h4>{{item.title}}</h4>
                                    </li>
                                </ul>
                                <div class="details" v-else-if="!showDetail">
                                    <div class="header">
                                        <h3> {{E_details.title}}</h3>
                                    </div>
                                    <div class="body">
                                        <div class="left">
                                            <el-carousel
                                                    :interval="3000"
                                                    arrow="never"
                                                    indicator-position="none"	>
                                                <el-carousel-item v-for="(item,index) in E_details.gallery" :key="index">
                                                    <img :src="item.url" alt="">
                                                </el-carousel-item>
                                            </el-carousel>
                                        </div>
                                        <div class="right">
                                            <h3>项目介绍</h3>
                                            <span v-html="E_details.introduce" style="white-space: pre-wrap;"></span>
                                            <h3>解决方案</h3>
                                            <span v-html="E_details.solution"></span>
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
                                </div>
                                <div v-else class="empty">该分组下暂无项目案例</div>
                            </el-tab-pane>
                        </el-tabs>
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
    import {exampleTypes,exampleList,exampleDetails,recommends,banners} from '../../api/common'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
    import HeadMobile from '../../components/Head_Mobile/Head'
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
				bannerList:[],
                search:false,
                showList:false,
                showExampleList:true
            }
        },
        created(){
            exampleTypes({}).then(r=>{
                this.types = r.data;
                if(r.data.length){
                    exampleList({category_id:'',limit:6000,page:1}).then(res=>{
                        this.lists = res.data;
					}).catch(_=>{});
                }
            });
			banners({position:'4'}).then(r=>{
				r.data.forEach(item=>{
					if(item.is_mobile){
						this.bannerList.push(item)
					}
				})
			}).catch(_=>{});
        },
        mounted() {
            let id = window.URlPARAMS.id;
            if(id){
            	this.details(id)
            }
			recommends({}).then(r=>{
				this.recommends = r.data
			}).catch(_=>{});
		},
        computed: {

        },
        methods: {
            changeList(id){
                this.showExampleList = false;
                this.activeName = id+'';
                this.handleClick();
                window.scrollTo({top:0,behavior:'smooth'});
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
			handleClick(){
			    this.showDetail = true;
                exampleList({category_id:this.activeName,limit:6000,page:1}).then(r=>{
                    this.lists = r.data;
					this.total = r.meta.pagination.total;
				}).catch(_=>{})
            },
            pChange(e){
                exampleList({category_id:this.activeName,limit:6000,page:e}).then(r=>{
                    this.lists = r.data;
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
                window.location.href = './productDetail_mobile.html?id=' + id
            },
			turn(data) {
				return data.replace(/(\r\n|\n|\r)/g, "<br />");
			},
            closeDetail(){
                this.showDetail = false
            },
            download(){
                window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
            }
        },
        components:{
            BacktopMobile,FooterMobile,HeadMobile
        }
    }
</script>

