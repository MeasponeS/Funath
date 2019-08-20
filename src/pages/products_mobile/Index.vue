<template>
    <div id="app" @click="stayClose">
        <HeadMobile />
        <div class="mainScreen">
            <div class="b_box">
                <div class="item">
                    <ul class="nav">
                        <li
                                v-for="(item,index) in p_list"
                                :key="index"
                                :class="{active:type == index }"
                                @click="changeNav(index,item.name)"
                                :name="item.name"
                        >
                            <i class="el-icon-caret-bottom"></i>
                            {{item.name}}
                        </li>
                        <div class="search" v-if="showSearch" @click="stay">

                            <div class="dropDownBox" v-if="showSearchInput">
                                <div
                                        class="dropDown canHover"
                                        v-if="searchResult.length"
                                        v-for="(item,index) in searchResult"
                                        @click="goProductDetails(item.id)"
                                >{{item.name}}</div>
                                <div
                                        class="dropDown noResult"
                                        v-if="showNoResult"
                                >没有找到符合条件的结果</div>
                            </div>
                        </div>
                    </ul>
                </div>

                <div class="products"
                     v-for="(item,index) in p_list"
                     :name="item.name"
                     :key="index"
                >
                    <div class="p_head" @click="list(item.id)">
                        <div class="left" v-if="item.main_icon">
                            <img :style="{width:item.main_icon.width,height:item.main_icon.height}" :src="item.main_icon.url" alt="">
                        </div>
                        <div class="right">
                            <h3>{{item.en_name}}</h3>
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                    <ul class="p_body">
                        <li v-for="(i,k) in item.products.data"
                            :key="k"
                            @click="goProductDetails(i.id)"
                        >
                            <div class="p_imgs"><img :src="i.main_image_url" alt=""></div>
                            <span>{{i.name}}</span>
                        </li>
                    </ul>
                </div>


                <div class="big">
                    <div class="header">
                        <h3>CASE</h3>
                        <span>推荐案例</span>
                    </div>
                    <div class="ul">
                        <ul class="bottom">
                            <li
                                    v-for="(item,index) in recommends"
                                    :key="index" @click="goDetails(item.id)"
                                    v-if="item.thumb2">
                                <span>{{item.title}}</span>
                                <div class="imgs">
                                    <img :src="item.thumb2" alt="">
                                </div>
                                <div class="wrap"></div>
                            </li>

                        </ul>
                    </div>
                    <div class="b">
                        <el-button @click="goNews('')">查看更多</el-button>
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
    import {products,recommends,banners,productList} from '../../api/common'
    import HeadMobile from '../../components/Head_Mobile/Head'
    import FooterMobile from '../../components/Footer_Mobile/Footer'
	export default {
		data() {
			return {
			    p_list:[],
				type:'',
                showSearch:false,
				recommends:[],
                bannerList:[],
                searchJson:'',
                searchResult:[],
                showNoResult:false,  // 是否显示无结果
                showSearchInput:false,   // 是否显示无搜索框
                search:false,
                showList:false
 			}
		},
        created(){
		    products({}).then(r=>{
                this.p_list = r.data;
                this.type = 0;
            }).catch(_=>{});
			recommends({}).then(r=>{
                r.data.forEach((item,index)=>{
                    if(index < 4){
                        this.recommends.push(item);
                    }
                });
			}).catch(_=>{});
			banners({position:'2'}).then(r=>{
				this.bannerList = r.data
			}).catch(_=>{});
        },
		mounted() {
			if(window.URlPARAMS.name){
				window.setTimeout(()=>{
					this.changeNav(window.URlPARAMS.index,decodeURI(window.URlPARAMS.name))
                },300)
			}
			// 426 1912 2549
		},
		computed: {

		},
        watch:{
		    searchJson(val){
				productList({search:val}).then(r=>{
					this.searchResult = r.data;
                    if(!r.data.length){
                    	this.showNoResult = true
                    } else {
                    	this.showNoResult = false
                    }
				}).catch(_=>{});
			}
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
			stayClose(){
				this.showSearch = false;
				this.showSearchInput = false
            },
			getScrollTop(){
				let scrollTop=0;
				if(document.documentElement&&document.documentElement.scrollTop){
					scrollTop=document.documentElement.scrollTop;
				}else if(document.body){
					scrollTop=document.body.scrollTop;
				}
				return scrollTop;
			},
			stay(e){
				this.showSearch = true;
				e.stopPropagation();
				this.showSearchInput = true
            },
			changeNav(index,name){
                this.showList = false;
				let event = window.event || arguments.callee.caller.arguments[0];
				event.stopPropagation();
				// this.showSearch = name?false:true;
                if(!name){
                    this.showSearch = !this.showSearch;
                } else {
					this.showSearch = false;
                    let products = document.getElementsByClassName('products');
                    let newArr = [];
                    for(let i=0; i<products.length; i++){
                        newArr.push(products[i]);
                    }
                    newArr.forEach(item=>{
                        let i_name = item.getAttribute('name');
                        if(i_name == name){
                            window.scrollTo({top:item.offsetTop,behavior:'smooth'});
                        }
                    });
                }
				 this.type = index;
			},
            list(id){
                window.location.href = './productList_mobile.html?id=' + id
            },
            goDetails(id){
                window.location.href = './productExample_mobile.html?id='+id
            },
			goProductDetails(id){
				window.location.href = './productDetail_mobile.html?id='+id
            },
            download(){
                window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
            }
		},
		components:{
            BacktopMobile,HeadMobile,FooterMobile
		}
	}
</script>

