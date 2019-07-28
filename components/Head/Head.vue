<template>
    <div class="head-warp">
        <div class="head" >
            <div class="left">
                <img src="./img/logo.png" alt="">
            </div>
            <div class="right">
                <div class="tel">
                    <img src="./img/tel.png" alt="">
                    <span>400-0012-977</span>
                </div>
                <div class="language">
                    <span class="cn">中文</span>
                    <span class="en">English</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Head',

        data: function () {
            return {}
        },
        methods: {


        },
        mounted(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../assets/css/var.scss";
    .head-warp{
        width: 100%;
        background: #0DAA67;
        display: flex;
        justify-content: center;
        align-items: center;
        .head{
            display: flex;
            width: 1200px;
            height: 50px;
            justify-content: space-between;
            align-content: center;

            .left{
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                img{
                    height: 35px;
                    width: 240px;
                }
            }
            .right{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tel{
                    img{
                        width: 22px;
                        height: 22px;
                    }
                    span{
                        font-size: 26px;
                        font-family: 'DINC';
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
                    }
                    .en{
                        font-family: "DINR";
                        font-size: 16px;
                        padding-left: 4px!important;
                        color: #fff;
                    }
                }
            }
        }

    }
</style>
