<template>
	<header>
		<nav class="fixclear">
			<div class="nav-left">
				后台管理
			</div>
			<div class="nav-right">
				<ul>
					<li class="hide-menu-li">
						<el-tooltip :content="value" placement="bottom">
							<el-switch on-text="" off-text="" @change="hideMenuAction" v-model="value" on-color="#1F2D3D" off-color="#8492A6" on-value="收起菜单" off-value="展开菜单">
							</el-switch>
						</el-tooltip>
					</li>
					<li>
						<img :src="user.icon" />
						<el-dropdown trigger="click">
							<span class="el-dropdown-link">
      				 			{{user.name}}
      				  			<i class="el-icon-caret-bottom el-icon--right"></i>
      						</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>
									<span @click="logout">退出登录</span>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
	var iconImg = require("../../../static/img/user-icon.jpg");
	export default {
		name: 'Header',
		data() {
			return {
				user: {
					name: "Admin",
					icon: iconImg
				},
				value: '收起菜单'
			}
		},
		methods: {
			hideMenuAction() {
				this.$emit('hideMenu');
			},
			logout() {
				this.$router.push('/Login');
			}
		}
	}
</script>

<style>
	header {
		background-color: #324157;
		width: 100%;
		height: 60px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, .2);
	}

	.nav-left {
		float: left;
		width: 90px;
		height: 60px;
		color: white;
		line-height: 60px;
		font-size: 22px;
		padding: 0 0 0 10px;
	}

	.nav-right {
		float: right;
		font-size: 0;
		padding-right: 10px;
	}

	.nav-right li {
		float: left;
	}

	.hide-menu-li {
		margin: 19px 10px;
	}

	.nav-right img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		padding: 10px 5px;
	}

	.nav-right div {
		cursor: pointer;
		float: right;
		color: white;
		font-size: 16px;
		line-height: 60px;
	}

	.el-icon-caret-bottom {
		color: #D3DCE6;
		font-size: 12px;
	}
</style>