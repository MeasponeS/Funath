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
				console.log(val);
			}
        },
		mounted: function () {
			window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
		},
        methods:{
			handleScroll: function () {
				let scrollTop = document.documentElement.scrollTop;
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
        width: 40px;
        height: 40px;
        background: #EEEFF0;
        color: #000;
        display: flex;
        justify-content: center;
        align-content: center;
        position: fixed;
        right: 100px;
        bottom: 100px;
        cursor: pointer;
        i{
            line-height: 40px;
            font-size: 34px;
        }
    }
</style>
