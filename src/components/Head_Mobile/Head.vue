<template>
    <div class="head-warp" @click="closeSearch">
        <div class="head">
            <div class="left" @click="goHome">
                <img src="./img/logo.png" alt="">
            </div>
            <div class="rightNav">
                <i class="el-icon-search" @click="showSearch"></i>
                <i class="el-icon-close" v-if="showList" @click="hideNavList"></i>
                <img src="./img/menu.png"  v-else @click="showNavList" alt="" class="icon">
            </div>
        </div>
        <div class="search" v-if="search" @click="stay">
            <el-input
                    prefix-icon="el-icon-search"
                    size="small"
                    class="inputs"
                    placeholder="请输入产品名称"
                    v-model="searchJson"
                    @keydown.native="doSearch"
            ></el-input>
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
        <div class="navList" v-if="showList">
            <ul>
                <li @click="goProducts">产品信息</li>
                <li @click="goIntroduction">公司介绍</li>
                <li @click="goNews">新闻资讯</li>
                <li @click="goExample">项目案例</li>
                <li @click="goContact">联系我们</li>
                <li @click="download">综合样本下载</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {productList} from '../../api/common'
    export default {
        name: 'Head',

        data: function () {
            return {
                search:false,
                showList:false,
                searchJson:'',
                searchResult:[],
                showNoResult:false,  // 是否显示无结果
                showSearchInput:false   // 是否显示无搜索框
            }
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
			doSearch(e){
				if(e.keyCode == 13){
                    if(this.searchResult.length&&this.searchResult.length > 1){
						window.location.href = './productList_mobile.html?id=1'
                    } else if(this.searchResult.length == 1) {
                    	let item = this.searchResult[0];
						window.location.href = './productDetail_mobile.html?id='+item.id
                    }
                }
            },
            stayClose(){
                this.search = false;
                this.showSearchInput = false
            },

            stay(e){
                this.search = true;
                e.stopPropagation();
                this.showSearchInput = true
            },
            showSearch(e){
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
			goContact(){
				window.location.href = './contact_mobile.html'
			},
			goExample(){
				window.location.href = './productExample_mobile.html'
			},
			goNews(){
				window.location.href = './news_mobile.html'
			},
			goIntroduction(type){
				window.location.href = './introduction_mobile.html?type=' + type
			},
			goProducts(){
				window.location.href = './products_mobile.html'
			},
			goHome(){
				window.location.href = './index_mobile.html'
            },
            goProductDetails(id){
                    window.location.href = './productDetail_mobile.html?id='+id
            },
            download(){
                window.open('http://funath.klsfood.cn/catalog/8909317e5763a18a92eb3d49ee37ac1f.pdf')
            }

	    },
        mounted(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var";
    .el-input__inner{
        height: 29px!important;
    }
    .head-warp{
        width: 100%;
        height: 44px;
        background: #0DAA67;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 14px;
        position: relative;
        .head{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            .left{
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                cursor: pointer;
                img{
                    height: 25px;
                    width: auto;
                }
            }
            .rightNav{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: #fff;
                .icon{
                    width: 20px;
                    height: 20px;
                }
                .el-icon-search{
                    font-size: 20px;
                    margin-right: 13px;
                }
                .el-icon-arrow-down{
                    font-size: 20px;
                }
                .el-icon-close{
                    font-size: 20px;
                }
            }
            .right{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tel{
                    img{
                        width: auto;
                        height: 22px;
                    }
                    span{
                        font-size: 26px;
                        font-family: 'DINC';
                        line-height: 0;
                        color: #fff;
                        margin-left: 8px;
                        padding-right: 28px!important;
                    }
                }
                .language{
                    .cn{
                        font-family: "SourceHan-regular";
                        font-size: 16px;
                        padding-right: 4px!important;
                        border-right: 2px solid #fff;
                        color: #fff;
                        cursor: pointer;
                    }
                    .en{
                        font-family: "DINR";
                        font-size: 16px;
                        padding-left: 4px!important;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
        .search{
            width: 100%;
            height: 55px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            top: 44px;
            background: rgba(0,0,0,0.7);
            padding: 0 18px;
            z-index: 99999999;
            .dropDownBox{
                width: 100%;
                max-height: 280px;
                position: absolute;
                left: 0;
                top: 48px;
                overflow: auto;
                .dropDown{
                    width: 100%;
                    height: 30px;
                    padding-left: 15px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background: #fff;
                    border-left: 1px solid #d6d6d6 ;
                    border-right: 1px solid #d6d6d6 ;
                    border-bottom: 1px solid #d6d6d6 ;
                    font-size: 12px;
                    font-family: SourceHan-regular;
                }
                .noResult{
                    padding: 0;
                    height: 50px;
                    justify-content: center;
                }
            }
            .inputs{
                height: 29px;
                .el-input{

                }


            }

        }
        .navList{
            width: 100%;
            height: calc(100vh - 44px);
            position: absolute;
            top: 44px;
            background: #4f4f4f;
            z-index: 999999;
            padding: 0;
            ul{
                width: 100%;
                height: 100%;
                padding: 0;
                li{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 13px;
                    height: 45px;
                    font-family: SourceHan-medium;
                    font-size: 15px;
                    color: #fff;
                    border-bottom: 1px solid #969696;
                }
            }
        }

    }
</style>
