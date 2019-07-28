<template>
    <div id="app">
        <Head />
        <img src="./img/1.jpg" alt="" class="banner">
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
                            <span>电话: 021-58811558      传真: 021-58590386     邮箱: sales@funath.com</span>
                            <h4 class="high_h4">服务热线： 400-0012-977</h4>
                            <h4>咨询邮件注意事项</h4>
                            <span> 欢迎垂询孚纳森产品，为及时准确回复，请尽量使用中文书写咨询邮件</span>
                        </div>
                        <div class="right">

                        </div>
                    </div>
                </div>
                <div class="info_box">
                    <div class="header">
                        <h3>加入我们</h3>
                    </div>
                    <div class="info_body">
                        <div class="inputs">
                            <el-input size="small" placeholder="姓名" />
                            <el-input size="small" placeholder="电话" />
                            <el-input size="small" placeholder="职位" />
                            <el-input size="small" placeholder="描述" type="textarea"></el-input>
                            <el-button type="primary">立即申请</el-button>
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
    export default {
        name:'contact',
        data() {
            return {

            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {

        },
        components:{
			Backtop
        }
    }
</script>

