<template>
    <div id="app">
        <Head />
        <div class="navH">
            <div class="banner">
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
                    <h3>COMPANY PROFILE</h3>
                    <span>公司介绍</span>
                </div>
            </div>
            <ul class="nav">
                <li :class="type == 'one'?'active':''" @click="changeNav('one',426)">
                    <i class="el-icon-caret-bottom"></i>
                    孚纳森哲学</li>
                <li :class="type == 'two'?'active':''"  @click="changeNav('two',1912)">
                    <i class="el-icon-caret-bottom"></i>
                    合作伙伴</li>
                <li :class="type == 'three'?'active':''"  @click="changeNav('three',2549)">
                    <i class="el-icon-caret-bottom"></i>
                    社会责任</li>
            </ul>
        </div>
        <div class="b_box">
            <div class="item">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><a href="./index.html">HOME</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="#">公司介绍</a></el-breadcrumb-item>
                </el-breadcrumb>
                <div class="zhexue">
                    <div class="header">
                        <h3>孚纳森哲学</h3>
                    </div>
                    <ul class="body">
                        <li class="first">
                            <img src="./img/1.png" alt="">
                        </li>
                        <li>
                            <img src="./img/2.png" alt="">
                        </li>
                        <li>
                            <h3>以心为本</h3>
                            <span>孚纳森在成立初始，只是一个缺乏资金、信用、业绩的小街道工厂。可以依靠的只是仅有的技术和相互信任的伙伴。为了公司的发展，大家都竭尽全力，经营者也用毕生的努力回报大家的信赖，坚信工作伙伴决不是为了私利私欲，所有员工都真心地庆幸自己能够在这个公司工作，人人都希望公司不断发展，这就是孚纳森的经营。虽然常言人心易变，但同时也再没有比它更坚不可摧的。以这样牢固的心与心的连接为基础的经营，就是孚纳森的原点。</span>
                        </li>
                        <li>
                            <h3>创造新价值</h3>
                            <span>我们提供让客户满意的产品和服务，把“客户第一”放在首位。为满足客户的需求，我们必须迅速及时地顺应时代的变化，把孚纳森拥有的技术实力和经营资源有机地结合起来，不断创造新价值。因此，以心为本的经营孕育出的“孚纳森哲学”和“阿米巴经营”的实践就变得尤为重要。全体员工只要齐心协力共同参与经营，寻求各自的工作乐趣与人生价值，并充分发挥个人能力，就能够提升自我，走向成熟。
</span>
                            <span>
企业的发展取决于人。任何技术、产品以及服务都取决于人。只要每位员工都带着自己的梦想，朝气蓬勃地投入工作，逐步实现自己确立的目标，就能够不断地为客户创造崭新的价值。我们希望孚纳森能成为这样的企业。</span>
                        </li>
                    </ul>
                </div>
            </div>
            <img :src="middleBanner" alt="" class="middleBanner" @click="goOne">
            <ul class="icons">
                <li>
                    <div class="imgs">
                        <img src="./img/amiba.png" alt="">
                    </div>
                    <h3>阿米巴经营</h3>
                    <span>阿米巴经营是指将组织分成小集体，通过与市场直接挂钩的独立核算制进行运营，培养具有经营者意识的人才，让全体员工参与经营管理，从而实现“全员参与”的经营模式。</span>
                </li>
                <li>
                    <div class="imgs">
                        <img src="./img/funasen.png" alt="">
                    </div>
                    <h3>孚纳森哲学</h3>
                    <span>孚纳森哲学是把“作为人何谓正确”作为判断事物的基准，强调在任何时候都要做到光明正大、认真努力，它既是人生哲学，也是经营哲学。</span>
                </li>
                <li>
                    <div class="imgs">
                        <img src="./img/amiba.png" alt="">
                    </div>
                    <h3>经营理念</h3>
                    <span>追求全体员工物质与精神两方面幸福的同时，为人类和社会的进步与发展做出贡献。</span>
                </li>
            </ul>
            <div class="corporation">
                <div class="header">
                    <h3>合作伙伴</h3>
                </div>
                <div class="body">
                    <div class="imgs">
                        <img src="./img/person.png" alt="" class="corporation">
                    </div>
                </div>
            </div>
            <div class="social">
                <div class="header">
                    <h3>社会责任</h3>
                </div>
                <div class="body">
                    <div class="left">
                        <span>
                            孚纳森的CSR活动基于以“作为人何谓正确”为判断基准的“孚纳森哲学”。希望通过实践孚纳森哲学，解决CSR课题，并构建与利益相关者相互信赖的关系，实现企业的可持续发展，同时为社会的健全发展做出贡献。
                        </span>
                        <img src="./img/top.png" alt="" class="top">
                        <img src="./img/down.png" alt="" class="down">
                    </div>
                    <img src="./img/right.png" alt="" class="right">
                </div>
            </div>
        </div>
        <Backtop />
        <Footer/>
    </div>
</template>

<script>
	import Backtop from '../../components/BackTop/Backtop'
    import {banners} from "../../api/common";

	export default {
        data() {
            return {
                type:'one',
                bannerList:[],
                middleBanner:''
            }
        },
        mounted() {
			banners({position:'6,7'}).then(r=>{
				r.data.forEach(item=>{
					if(item.position == 6){
						this.bannerList.push(item)
                    } else {
						this.middleBanner = item;
                    }
                })
			}).catch(_=>{});
			// 426 1912 2549
            if(window.URlPARAMS.type){
            	switch (window.URlPARAMS.type) {
                    case 'one':
                    	this.changeNav('one',426);
                        return;
                    case 'two':
                    	this.changeNav('two',1912);
                    	return;
                    case 'three':
                    	this.changeNav('three',2549);
                        return;
                    default:
                    	this.changeNav('',0)
				}
            }
        },
        computed: {

        },
        methods: {
			getScrollTop(){
                let scrollTop=0;
                if(document.documentElement&&document.documentElement.scrollTop){
                    scrollTop=document.documentElement.scrollTop;
                }else if(document.body){
                    scrollTop=document.body.scrollTop;
                }
                return scrollTop;
            },
			changeNav(type,top){
				this.type = type;
				let scrollTop = this.getScrollTop();
				window.scrollTo({top:top,behavior:'smooth'});
			},
            goOne(){
				window.location.href = 'https://www.kyocera.com.cn/inamori/index.html'
            }
        },
        components:{
			Backtop
        }
    }
</script>

