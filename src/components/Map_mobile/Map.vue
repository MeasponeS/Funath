<template>
    <div id="app">
        <div class="amap-wrapper">
            <el-amap
                    class="amap-box"
                    :center="center"
                    :zoom="zoom"
                    :plugin="plugin"
                    :events="events"
                    vid="amap-vue"
            >
                <el-amap-marker
                        v-for="(marker, index) in markers"
                        :vid="index"
                        :position="marker.position"
                        :events="marker.events"
                        :visible="marker.visible"
                        :draggable="marker.draggable"
                        :label="marker.label"
                >
                </el-amap-marker>

            </el-amap>
        </div>
    </div>
</template>

<script>
    import './Mixin';
	export default {
        name: "Map",
        data(){
        	return{
        		center:[121.606796,31.323111],
				zoom: 15,
				events: {
					init: (o) => {
						console.log(o,'====');
						o.getCity(result => {
							console.log(result,'------')
						})
					},
					'moveend': () => {
					},
					'zoomchange': () => {
					},
					'click': (e) => {

					}
				},
				plugin: ['', {
					pName: 'MapType',
					defaultType: 0,
					events: {
						init(o) {
							console.log(o);
						}
					}
				}],
				markers: [
					{
						position: [121.606796,31.323111],
						events: {

							click: () => {

							},
						},
                        label:{
							content:'',
							offset:[0,-50],
                        },
						visible: true,
						draggable: false,
						template: '<span>1</span>',
					}
				],
            }
        }
	}
</script>

<style>
    .amap-wrapper {
        width: 100%;
        height: 240px;
    }
</style>