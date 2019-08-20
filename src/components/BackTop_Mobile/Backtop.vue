<template>
    <div class="Backtop" @click="backTop" v-if="show">
        <i class="el-icon-arrow-up"></i>
    </div>
</template>

<script>
    export default {
        name: 'EmptyTemplate',
        props: {

        },
        data: function () {
            return {
                show:false
            }
        },
        watch:{
        	'scrollTop':function (val) {

			}
        },
		mounted: function () {
			window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
		},
        methods:{
			handleScroll: function () {
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				let offsetTop = document.documentElement.offsetTop;
				let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				if(scrollTop > clientHeight){
					this.show = true
                } else {
					this.show = false
                }
			},
			backTop(){
				window.scrollTo({top:0,behavior:'smooth'});
            }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Backtop {
        width: 100%;
        height: 40px;
        background: #d7d7d7;
        color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        i{
            font-size: 21px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
