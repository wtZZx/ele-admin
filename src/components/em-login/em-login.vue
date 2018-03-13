<template>
    <div class="em-login-page">
        <canvas></canvas>
        <div class="em-login-panel">
            <div class="em-login-header">
                <h1>LOGIN</h1>
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
import ctbg from './makebg'

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
        ctbg('canvas')
    }
}
</script>

<style lang="scss" scoped>
.em-login-panel {
    width: 760px;
    margin: 1rem auto;
    z-index: 9999;
    width: 10rem;
    height: 10rem;
    position: absolute;
    left: 50%;
}
.em-login-header {
    display: block;
    margin: 0;
    padding: 1.25rem 1.25rem;
    text-align: center;
    font-weight: 700;
    font-size: 1.3em;
    color: #ccc;
}

.em-login-content {
    margin: 10px;
}
</style>
