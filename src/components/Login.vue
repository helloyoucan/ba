<template>
    <div class="login-bg" :style="{'background-image':'url('+bg+')'}">
        <div class="login-panle">
            <div class="title">
                <h1>后台登陆</h1>
            </div>
            <div class="login-form">
                <el-form :model="formData" :rules="loginRules" ref="formData" label-width="0px">
                 <el-form-item prop="useName">
                        <el-input type="text" v-model="formData.useName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="formData.password" auto-complete="off"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('formData')">提交</el-button>
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
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
          
                callback();
            }
        };
        var validateUseName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        };
        return {
            bg,
            formData: {
                password: '',
                useName: '',
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
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
}
</script>
<style>
.login-bg {
    height: 100%;
    position: relative;
}

.title {
    font-size: 18px;
    text-align: center;
    height: 60px
}

.login-panle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-top: -210px;
    margin-left: -150px;
}

.login-form {
    height: 280px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
}
</style>
