<template>
    <div class="em-login-page">
        <div class="em-login-panel">
            <div class="em-login-header">
                <h1><i class="ion-ios-infinite"></i> Ele-Admin</h1>
            </div>
            <div class="em-login-content">
                <el-form :model="login">
                    <el-form-item>
                        <el-input placeholder="name" v-model="login.loginName"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input placeholder="password" v-model="login.password" v-on:keyup.enter.native="logon"></el-input>
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
        $server.logon().then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped>
.em-login-panel {
    width: 760px;
    margin: 1rem auto;
}
.em-login-header {
    display: block;
    margin: 0;
    padding: 1.25rem 1.25rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.3em;
}

.em-login-content {
    margin: 10px;
}
</style>
