<template>
    <div id="app">
        <Head />
        <div class="banner">
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
            <div class="header">
                <h3>CONTACT US</h3>
                <span>联系我们</span>
            </div>
        </div>
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="info_box">
                    <div class="header">
                        <h3>联系方式</h3>
                    </div>
                    <div class="body">
                        <div class="left">
                            <h4>孚纳森实业（上海）有限公司</h4>
                            <span> 总部地址：中国（上海）自由贸易试验区外高桥保税区富特北路288号2号楼4层</span>
                            <span>华北服务中心：河北石家庄桥西区胜利南街416号塔坛国际9号楼2915室</span>
                            <span>电话: 400-001-2977 &#12288;&#12288; 传真: 021-58590386 &#12288;&#12288;邮箱: sales@funath.com</span>
                            <h4 class="high_h4">服务热线： 400-001-2977</h4>
                            <h4>咨询邮件注意事项</h4>
                            <span> 欢迎垂询孚纳森产品，为及时准确回复，请尽量使用中文书写咨询邮件</span>
                        </div>
                        <div class="right">
                            <Map />
                            <div class="infor" v-if="showMapInfo">
                                <p>孚纳森实业(上海)有限公司</p>
                                <span>中国上海市浦东新区富特路288号</span>
                                <span> 400-001-2977 </span>
                                <i class="el-icon-close" @click="closeMapInfo" ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info_box">
                    <div class="header">
                        <h3>加入我们</h3>
                    </div>
                    <div class="info_body">
                        <div class="inputs">
                            <el-input size="small" placeholder="姓名" v-model="name"/>
                            <el-input size="small" placeholder="电话" v-model="mobile"/>
                            <el-input size="small" placeholder="职位" v-model="position" />
                            <el-input size="small" placeholder="描述" type="textarea" v-model="personal_desc"></el-input>
                            <el-button type="primary" @click="apply">立即申请</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Backtop/>
        <Footer />
    </div>  
</template>

<script>
	import Backtop from '../../components/BackTop/Backtop'
    import Map from "../../components/Map/Map";
	import {applies,banners} from "../../api/common";
    import {checkPhone} from '../../utils/dataStorage'
	export default {
        name:'contact',
        data() {
            return {
                name:'',
                mobile:'',
                position:'',
				personal_desc:'',
                bannerList:[],
                showMapInfo:true
            }
        },
        mounted() {
			banners({position:'5'}).then(r=>{
				r.data.forEach(item=>{
					if(!item.is_mobile){
						this.bannerList.push(item)
					}
				});
			}).catch(_=>{});
        },
        computed: {

        },
        methods: {
            apply(){
				if(!this.name){
					this.$message.error('请填写您的姓名');
					return;
				}
				if(!this.mobile){
					this.$message.error('请填写您的手机号码');
					return;
				}
				if(!checkPhone(this.mobile)){
					this.$message.error('请填写正确格式的手机号码');
					return;
				}
				if(!this.position){
					this.$message.error('请填写您的职务');
					return;
				}
				if(!this.personal_desc){
					this.$message.error('请填写描述');
					return;
				}
				applies({
					name:this.name,
					phone:this.mobile,
                    position:this.position,
					personal_desc:this.personal_desc
				}).then(r=>{
					this.name = '';
					this.mobile = '';
					this.position = '';
					this.personal_desc = '';
					this.$message({
						message: r.message,
						type: 'success'
					});
				}).catch(_=>{})
            },
            closeMapInfo(){
                this.showMapInfo = false;
            }
        },
        components:{
			Backtop,Map
        }
    }
</script>

