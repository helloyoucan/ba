<template>
	<div class="main" :class="{hideMenu:isHideKMenu}">
		<v-header></v-header>
		<v-sidebar @hideMenu="hideMenu" class="layout-left diyscrollbar" @SetBreadcrumb="SetBreadcrumb">
		</v-sidebar>
		<div class="layout-right">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="title in breadcrumb">{{title}}</el-breadcrumb-item>
			</el-breadcrumb>
			<router-view class="content diyscrollbar"></router-view>
		</div>
	</div>
</template>

<script>
	import vHeader from './common/Header'
	import vSidebar from './common/Sidebar'
	export default {
		name: 'Index',
		components: {
			vHeader,
			vSidebar,
		},
		data() {
			return {
				breadcrumb: ['一级菜单', '二级菜单2'],
				isHideKMenu: false,
			}
		},
		methods: {
			SetBreadcrumb(text_arr) {
				this.breadcrumb = text_arr;
			},
			hideMenu() {
				this.isHideKMenu = true;
			}
		}
	}
</script>

<style>
	.main {
		height: 100%;
		background-color: #eef1f6;
	}

	.layout-left {
		width: 200px;
		float: left;
		height: -moz-calc(100% - 60px);
		height: -webkit-calc(100% - 60px);
		height: calc(100% - 60px);
		transition: width ease .5s;
	}

	.layout-right {
		overflow: auto;
		/*background-color: #fff;*/
		margin: 15px;
		margin-left: 215px;
		height: -moz-calc(100% - 90px);
		height: -webkit-calc(100% - 90px);
		height: calc(100% - 90px);
		transition: margin-left ease .5s;
	}

	.hideMenu .layout-left {
		width: 0;
		opacity: 0;
	}

	.hideMenu .layout-right {
		margin-left: 15px;
	}

	.content {
		margin-top: 5px;
		background-color: #fff;
		height: -moz-calc(100% - 18px);
		height: -webkit-calc(100% - 18px);
		height: calc(100% - 18px);
		overflow: auto;
	}

	.diyscrollbar::-webkit-scrollbar-track {
		/*border-radius: 0;*/
	}

	.diyscrollbar::-webkit-scrollbar-thumb {
		/*border-radius: 0;*/
		background-color: #C3C3C3;
	}
</style>