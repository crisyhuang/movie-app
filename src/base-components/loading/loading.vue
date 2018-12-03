<template>
    <div class="loading">
        <img src="./img/loading.gif">
        <p class="desc">{{desc}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            desc: {
                type: String,
                default: '玩命加载中...'
            }
        }
    }
</script>

<style scoped lang="less">
.loading{
    margin-top: 50%;
    text-align: center;
    img{
        width: 0.8rem;
        height: 0.8rem
    }
    p{
        line-height: 0.5rem;
    }
}
</style>