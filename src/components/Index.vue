<template>
	<div class="main" :class="{hideMenu:isHideKMenu}">
		<v-header @hideMenu="hideMenu"></v-header>
		<v-sidebar class="layout-left diyscrollbar" @SetBreadcrumb="SetBreadcrumb">
		</v-sidebar>
		<div class="layout-right">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="title in breadcrumb" v-bind:key="title">{{title}}</el-breadcrumb-item>
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
				this.isHideKMenu = !this.isHideKMenu;
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
		transition: margin-left ease .5s;
	}

	.layout-right {
		overflow: auto;
		/*background-color: #fff;*/
		padding: 15px;
		margin-left: 200px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, .2) inset;
		height: -moz-calc(100% - 90px);
		height: -webkit-calc(100% - 90px);
		height: calc(100% - 90px);
		transition: margin-left ease .5s;
	}

	.hideMenu .layout-left {
		margin-left: -200px;
	}

	.hideMenu .layout-right {
		margin-left: 0px;
	}

	.content {
		margin-top: 5px;
		background-color: #fff;
		height: -moz-calc(100% - 18px);
		height: -webkit-calc(100% - 18px);
		height: calc(100% - 18px);
		overflow: auto;
		box-shadow: 0 5px 6px rgba(0, 0, 0, .2);
	}

	.diyscrollbar::-webkit-scrollbar-track {
		/*border-radius: 0;*/
	}

	.diyscrollbar::-webkit-scrollbar-thumb {
		/*border-radius: 0;*/
		background-color: #C3C3C3;
	}
</style>