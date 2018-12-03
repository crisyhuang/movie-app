<template>
    <div class="header">
        <div class="hd-left">
            <router-link class="back" to="/index" v-show="showBack"></router-link>
        </div>
        <div class="hd-center">
            <h1>阳光影院</h1>
        </div>
        <div class="hd-right">
            <img src="./img//user_default.png">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            showBack: {
                type: Boolean,
                default: true
            }
        }

    }
</script>

<style scoped lang="less">
.header{
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    height: 0.88rem;
    background: #308ee3;
    .hd-left{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 100%;
        line-height: 0.88rem;
        a{

            width: 0.23rem;
            height: 0.38rem;
            background: url("img/back.png") no-repeat center center;
            background-size: 0.23rem 0.38rem;
        }
    }
    .hd-center{
        flex: 1;
        text-align: center;
        color: #fff;
    }
    .hd-right{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.2rem;
        height: 100%;
        img{
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>