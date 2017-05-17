<template>
	<el-menu class="diyscrollbar" :default-active="onRoutes" @select="handleSelect" router>
		<el-submenu index="content">
			<template slot="title">
				<i class="el-icon-menu"></i>一级菜单1
			</template>
			<el-menu-item index="content1">二级菜单1</el-menu-item>
			<el-menu-item index="content2">二级菜单2</el-menu-item>
		</el-submenu>
		<el-menu-item index="content3">
			<i class="el-icon-setting"></i>一级菜单2
		</el-menu-item>
		<el-menu-item index="content4">
			<i class="el-icon-document"></i>一级菜单3
		</el-menu-item>
		<el-menu-item index="content5">
			<i class="el-icon-star-on"></i>一级菜单4
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: "Sidebar",
		computed: {
			onRoutes() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				var key_arr = {
					content: "一级菜单",
					content1: "二级菜单1",
					content2: "二级菜单2",
					content3: "一级菜单2",
					content4: "一级菜单3",
					content5: "一级菜单4",
				};
				var text_arr = [];
				for(var i = 0, l = keyPath.length; i < l; i++) {
					text_arr.push(key_arr[keyPath[i]]);
				}
				this.$emit('SetBreadcrumb', text_arr)
			},
		}
	}
</script>

<style>
	.el-menu {
		background-color: white!important;
		overflow: auto;
	}
</style>