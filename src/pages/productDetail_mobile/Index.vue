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
<!--                            v-for="(item,index) in p_list"-->
<!--                            :key="index"-->
<!--                            @click="changeNav(index,item.name)"-->
<!--                            :name="item.name"-->
<!--                    >{{item.name}}</li>-->
<!--                    <li @click="download">综合样本下载</li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->
        <HeadMobile />
        <div class="item">
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
            </div>

            <div class="l_content">
                <div class="list" v-html="info.mobile_content"></div>
            </div>

        </div>
        <FooterMobile />
        <BacktopMobile />
    </div>  
</template>

<script>
    import BacktopMobile from '../../components/BackTop_Mobile/Backtop'
    import {productDetails,products,banners} from '../../api/common'
    import HeadMobile from '../../components/Head_Mobile/Head'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
    export default {
        data() {
            return {
                all:[],
                activeNames:[],
                info:{},
				bannerList:[],
                activeId:'',
                backUrl:'',
                search:false,
                showList:false,
                p_list:[]
            }
        },
        created(){
            products({}).then(r=>{
                this.p_list = r.data;
            }).catch(_=>{});
        },
        mounted() {
            let id = window.URlPARAMS.id;
            let uId;
            this.getDetails(id);
			products({}).then(r=>{
                this.all = r.data;
                r.data.forEach(item=>{
                	if(item.name == this.info.category){
						uId = item.id;
					}
					this.backUrl = './productList.html?id=' + (window.URlPARAMS.backId || uId);
                	item.products.data.forEach(i=>{
                		if(i.id == id){
							this.activeNames.push(parseInt(item.id));
                        }
                    })
                })
            }).catch(_=>{});

			banners({position:'9'}).then(r=>{
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
            changeNav(name,index){
                window.location.href = './products_mobile.html?name='+name + '&index=' + index;
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
            goProducts(){
                 window.location.href = './products_mobile.html?name=&index=';
            },
            getDetails(id){
				this.activeId = id;
                productDetails({},id).then(r=>{
                    this.info = r;
                
                }).catch(_=>{})
            },
            goDetail(id){
                this.getDetails(id);
            },
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
            },
			download(){
				window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
			}
        },
        components:{
            HeadMobile,FooterMobile,BacktopMobile
        }
    }
</script>

