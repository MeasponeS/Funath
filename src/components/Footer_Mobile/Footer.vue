<template>
    <div class="footerMobile" >
        @ 2019 版权所有孚纳森实业（上海）有限公司 沪ICP备18015332号-3
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

            }
        },
        mounted(){

		},
        methods:{

        },
        components:{

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
    .footerMobile{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #2b2b2b;
        border-bottom: 1px solid #d7d7d7;
        border-top: 1px solid #d7d7d7;
        font-family: SourceHan-regular;
        font-size: 10px;
        margin-top: 30px;
    }
</style>
