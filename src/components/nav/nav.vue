<template>
    <div class="nav" v-show="showNav">
        <router-link class="nav-item" to="/index">首页</router-link>
        <router-link class="nav-item" to="/hot">热门电影</router-link>
        <router-link class="nav-item" to="/net">网络电影</router-link>
        <router-link class="nav-item" to="/focus">网友关注</router-link>
        <router-link class="nav-item" to="/beauty">最美电影</router-link>
    </div>
</template>

<script>
    export default {
        props: {
            showNav: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped lang="less">
.nav{
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0.88rem;
    display: flex;
    line-height: 1rem;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    .nav-item{
        flex: 1;
        text-align: center;
        color: #666;
    }
    .active{
        font-size: 16px;
        color: #308ee3;
        border-bottom: 0.04rem solid #308ee3;
    }
}
</style>