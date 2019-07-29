<template>
    <div class="footer">
        <div class="container">
            <div class="top">
                <div class="left">
                    <div class="left_header">
                        公司链接
                    </div>
                    <div class="left_bottom">
                        <ul>
                            <li @click="goProducts">产品介绍</li>
                            <li @click="goExample">项目案例</li>
                            <li @click="goIntroduction('')">公司介绍</li>
                            <li @click="goNews">新闻资讯</li>
                        </ul>
                        <img src="../Head/img/tel.png" alt="">
                    </div>
                </div>
                <div class="middle">
                    <div class="left_header">
                        联系我们
                    </div>
                    <h4>孚纳森实业（上海）有限公司</h4>
                    <h4>总部地址：中国（上海）自由贸易试验区外高桥保税区富特北路288号2号楼4层</h4>
                    <h4>华北服务中心：河北石家庄桥西区胜利南街416号塔坛国际9号楼2915室</h4>
                    <h4>Tel: 021-58811558      Fax: 021-58590386     Email: sales@funath.com </h4>
                    <el-button type="primary" @click="showMap" v-if="pathname != '/contact.html'">查看地图</el-button>
                </div>
                <div class="right">
                    <div class="right_header">
                        项目咨询
                    </div>
                    <el-input size="small" placeholder="姓名" class="f_inputs" v-model="name" />
                    <el-input size="small" placeholder="电话"  class="f_inputs" v-model="mobile"/>
                    <el-input size="small" placeholder="公司" class="f_inputs" v-model="company"/>
                    <el-button type="primary" @click="consultsUs">发送消息</el-button>
                </div>
            </div>
            <div class="bottomF">
               @ 2019 版权所有孚纳森实业（上海）有限公司沪ICP备18015332号
            </div>

            <el-dialog
                    title="地图"
                    :visible.sync="dialogVisible"
                    width="725px"
            >
                <Map />
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import Map from "../Map/Map";
    import {consults} from '../../api/common'
    import {checkPhone} from '../../utils/dataStorage'
    export default {
        name: 'Footer',
        props: {

        },
        data(){
        	return{
				dialogVisible:false,
                name:'',
                mobile:'',
                company:'',
                pathname:''
            }
        },
        mounted(){
			this.pathname = window.location.pathname
		},
        methods:{
			showMap(){
				this.dialogVisible = true
            },
			consultsUs(){
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
				if(!this.company){
					this.$message.error('请填写您的公司');
					return;
				}
				consults({
                    name:this.name,
                    phone:this.mobile,
                    company:this.company
                }).then(r=>{
                	this.name = '';
                	this.mobile = '';
                	this.company = '';
					this.$message({
						message: r.message,
						type: 'success'
					});
				}).catch(_=>{})
            },
			goExample(){
				window.location.href = './productExample.html'
			},
			goNews(){
				window.location.href = './news.html'
			},
			goIntroduction(type){
				window.location.href = './introduction.html?type=' + type
			},
			goProducts(){
				window.location.href = './products.html'
			},
        },
        components:{
        	Map
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
    ul{
        list-style: none;
    }
    .footer{
        width: 100%;
        height: 500px;
        background-color: #2B2B2B;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 178px 0 50px 0;
        color: #D6D6D6;
        .container{
            width: 1200px;
            height: 100%;
            position: relative;
            .top{
                z-index: 9999;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                .left_header{
                    width: 100%;
                    font-family: "SourceHan-regular";
                    font-size: 16px;
                    padding-bottom: 16px;
                    border-bottom: 2px solid #D6D6D6;
                }
                .left{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                    width: 200px;
                    .left_bottom{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        ul{
                            padding: 0;
                            li{
                                font-family: "SourceHan-regular";
                                font-size: 12px;
                                margin-top: 20px;
                                margin-right: 28px;
                                cursor: pointer;
                                &:hover{
                                    color: #0DAA67;
                                }
                            }
                        }
                        img{
                            width: 122px;
                            height: 122px;
                            margin-top: 18px;
                        }
                    }
                }
                .middle{
                    width: 420px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                    margin-left: 66px;
                    h4{
                        font-family: "SourceHan-regular";
                        font-size: 12px;
                        font-weight: normal;
                        margin: 0;
                        margin-top: 11px;
                    }
                    .el-button{
                        width: 120px;
                        height: 30px;
                        margin-top: 14px;
                        font-family: "SourceHan-regular";
                        font-size: 16px;
                        color: #fff;
                        background: #0DAA67;
                        border: 1px solid #0DAA67;
                        padding: 0;
                    }
                }
                .right{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                    width: 280px;
                    margin-left: 240px;
                    .right_header{
                        font-family: "SourceHan-regular";
                        font-size: 16px;
                        margin-bottom: 15px;
                    }
                    .el-input--small{
                        display: block!important;
                        width: 100%;
                        height: 30px;
                        font-size: 12px;
                        font-family: "SourceHan-regular";
                        color: #2B2B2B;
                        margin-bottom: 8px;
                    }
                    .el-input--small .el-input__inner{
                        border: none;
                        background: #EEEFF0;
                        color: #2b2b2b;
                    }
                    .el-button{
                        width: 120px;
                        height: 30px;
                        font-family: "SourceHan-regular";
                        font-size: 16px;
                        color: #fff;
                        background: #0DAA67;
                        border: 1px solid #0DAA67;
                        padding: 0;
                    }
                }
            }
            .bottomF{
                font-size: 12px;
                font-family: "SourceHan-regular";
                position: absolute;
                left: 0;
                bottom:0;
            }
        }
    }
</style>
