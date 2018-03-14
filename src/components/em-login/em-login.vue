<template>
    <div class="em-login-page">
        <div class="em-login-panel">
            <div class="em-login-header">
                <h1>LOGIN</h1>
            </div>
            <div class="em-login-content">
                <el-form :model="login">
                    <el-form-item>
                        <el-input placeholder="name" v-model="login.loginName" size="large">
                            <i slot="prefix" class="ion-person"></i>
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input placeholder="password" v-model="login.password" size="large">
                            <i slot="prefix" class="ion-locked"></i>
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="em-login-btn" @click="logon">Log in</el-button>
                    </el-form-item>

                </el-form>
            </div> 
        </div>
    </div>
</template>

<script>
import $server from '@/api/login.js'

export default {
    name: 'emLogin',
    data() {
        return {
            msg: 'login',
            login: {
                loginName: '',
                password: ''
            }
        }
    },
    mounted() {
        console.log($server)
        // $server.logon().then(res => {
        //     console.log(res)
        // })
    },
    methods: {
        logon() {
            console.log('login')
            // 如果成功登录，路由跳转到首页
            this.$router.push({
                path: 'dashboard'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.em-login-panel {
    width: 360px;
    margin: 10% auto;
    z-index: 9999;
}
.em-login-header {
    display: block;
    margin: 0;
    padding: 1.25rem 1.25rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.3em;
    color: #5E60EB;
}

.em-login-content {
    margin: 10px;
}

.em-login-btn {
    width: 100%;
}
</style>
