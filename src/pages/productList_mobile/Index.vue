<template>
    <div id="app">
        <HeadMobile />
        <div class="mainScreen">
            <div class="item">
                <div class="bannerListNav">
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
                                <h3>
                                    {{item.name}}
                                </h3>
                                <div class="imgs">
                                    <img :src="item.main_image_url" alt="" class="left">
                                    <div class="right">
                                        <img :src="item.mobile_spec_image_url" alt="">
                                    </div>
                                </div>
                                <div class="tags">
                                    <span v-for="i in item.tags">
                                        {{i}}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <FooterMobile />
        <BacktopMobile />
    </div>  
</template>

<script>
    import {productList,products,banners} from '../../api/common'
    import HeadMobile from '../../components/Head_Mobile/Head'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
    import BacktopMobile from '../../components/BackTop_Mobile/Backtop'
    export default {
        data() {
            return {
                list:[],
                all:[],
                activeNames:[],
				bannerList:[],
                search:false,
                showList:false
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
					if(item.is_mobile){
						this.bannerList.push(item)
					}
				})
			}).catch(_=>{});
        },
        computed: {

        },
        methods: {
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
            getList(id){
                productList({category_id:id}).then(r=>{
                    this.list = r.data;
                }).catch(_=>{});
            },
            goDetail(id){
                window.location.href = './productDetail_mobile.html?id='+id + '&backId='+window.URlPARAMS.id
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
				window.location.href = './products_mobile.html?name=&index=';
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

