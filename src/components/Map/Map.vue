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
                        vid="amap-vue"
                        :position="componentMarker.position"
                        :content-render="componentMarker.contentRender"
                ></el-amap-marker>

            </el-amap>
        </div>
    </div>
</template>

<script>
    import './Mixin';
	const exampleComponents = {
		props: ['text'],
		template: `<div>text from  parent: {{text}}</div>`
	}
	export default {
        name: "Map",
        data(){
        	return{
        		center:[121.606796,31.323111],
				zoom: 15,
				events: {
					init: (o) => {
						console.log(o.getCenter());
						console.log(this.$refs.map.$$getInstance());
						o.getCity(result => {
							console.log(result)
						})
					},
					'moveend': () => {
					},
					'zoomchange': () => {
					},
					'click': (e) => {

					}
				},
				plugin: ['ToolBar', {
					pName: 'MapType',
					defaultType: 0,
					events: {
						init(o) {
							console.log(o);
						}
					}
				}],
				componentMarker: {
					position: [121.606796,31.323111],
					contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: '111'}}, ['xxxxxxx'])
				},
            }
        }
	}
</script>

<style>
    .amap-wrapper {
        width: 686px;
        height: 258px;
    }
</style>