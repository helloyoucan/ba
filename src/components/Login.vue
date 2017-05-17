<template>
	<div class="login-bg" :style="{'background-image':'url('+bg+')'}">
		<div class="login-panle">
			<div class="title">
				<h1>后台登陆</h1>
			</div>
			<el-popover ref="popover" offset="-200" trigger="manual" placement="top-end" v-model="visible">
				<p class="login-tip">
					{{login_tip}}
				</p>
			</el-popover>
			<div class="login-form" v-popover:popover>
				<el-form :model="formData" :rules="loginRules" ref="formData" label-width="0px">
					<el-form-item prop="useName">
						<el-input type="text" placeholder="用户名" v-model="formData.useName" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="formData.password" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item prop="captcha">
						<el-input class="captcha-input" type="text" placeholder="验证码" v-model="formData.captcha" auto-complete="off"></el-input>
						<el-tooltip class="item" effect="dark" content="点击更换验证码" placement="top">
							<img @click="changeCaptchaImg()" class="captcha-img" alt="验证码" :src="formData.captchaImgUrl" />
						</el-tooltip>

					</el-form-item>
					<el-form-item>
						<el-button class="login-btn" type="primary" @click="submitForm('formData')" :loading="isLoading">登录</el-button>
					</el-form-item>
					<el-form-item>
						<a href="javascript:;">登录遇到问题?</a>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
	var bg = require('@/assets/img/login-bg.jpg')
	export default {
		name: 'Login',
		data() {
			var validateUseName = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入账号'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {

					callback();
				}
			};
			var validateCaptcha = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入验证码'));
				} else {
					callback();
				}
			};
			return {
				bg,
				isLoading: false,
				visible: false,
				login_tip: '',
				formData: {
					password: '',
					useName: '',
					captcha: '',
					captchaImgUrl: '../../static/img/testCaptcha.png', //验证码
				},
				loginRules: {
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					useName: [{
						validator: validateUseName,
						trigger: 'blur'
					}],
					captcha: [{
						validator: validateCaptcha,
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.isLoading = true;
						//this.visible = true;
						//this.login_tip = "账号或密码错误";
						//this.login_tip = "验证码错误";
						this.$router.push('/Index');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			changeCaptchaImg() { //切换验证码

			}
		},
	}
</script>
<style>
	.login-bg {
		height: 100%;
		position: relative;
	}

	.title {
		text-align: center;
	}

	.title h1 {
		font-weight: 500;
		font-size: 36px;
		line-height: 2em;
	}

	.login-tip {
		text-align: center;
		font-size: 14px;
	}

	.login-panle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 300px;
		transform: translate(-50%, -70%);
	}

	.login-form {
		background-color: #fff;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
		padding: 22px;
	}

	.login-form input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
	}

	.login-form .el-button.login-btn {
		width: 100%;
	}

	.login-form .el-form-item:last-child {
		margin-bottom: 0;
	}

	.login-form .el-form-item:nth-last-child(2) {
		margin-bottom: 11px;
	}

	.login-form .captcha-input {
		width: -moz-calc(100% - 104px);
		width: -webkit-calc(100% - 104px);
		width: calc(100% - 104px);
	}

	.captcha-img {
		cursor: pointer;
		float: right;
		height: 36px;
		width: 100px;
	}

	.login-form .el-form-item:last-child .el-form-item__content {
		line-height: 1em;
	}
</style>