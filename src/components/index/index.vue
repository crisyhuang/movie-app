<template>
    <div class="index">
        <div>轮播图</div>
        <div class="nav">
            <router-link class="nav-item hot-nav" to="/hot">热门电影</router-link>
            <router-link class="nav-item net-nav" to="/net">网络电影</router-link>
            <router-link class="nav-item focus-nav" to="/focus">网友关注</router-link>
            <router-link class="nav-item beauty-nav" to="/beauty">最美电影</router-link>
        </div>
        <div class="focus-list">
            <div class="hd">
                <h3>网友关注</h3>
            </div>
            <div class="bd">
                <app-focus></app-focus>
            </div>
        </div>
    </div>
</template>

<script>
    import Focus from '../focus/focus';

    export default {
        components: {
            'app-focus': Focus
        }
    }
</script>

<style scoped lang="less">
.index{
    .nav{
        display: flex;
        margin: 0.34rem 0;
        .nav-item{
            flex: 1;
            padding-top: 1.05rem;
            text-align: center;
            color: #666;
            &.hot-nav{
                background: url('img/hot_ico.png') no-repeat top center;
                background-size: 0.9rem 0.9rem;
            }
            &.net-nav{
                background: url('img/net_ico.png') no-repeat top center;
                background-size: 0.9rem 0.9rem;
            }
            &.focus-nav{
                background: url('img/focus_ico.png') no-repeat top center;
                background-size: 0.9rem 0.9rem;
            }
            &.beauty-nav{
                background: url('img/beauty_ico.png') no-repeat top center;
                background-size: 0.9rem 0.9rem;
            }
        }
    }
    .focus-list{
        border-top: 0.2rem solid #f5f5f5;
        .hd{
            display: flex;
            justify-content: center;
            margin: 0.1rem 0.3rem 0.5rem;
            border-bottom: 1px solid #308ee3;
            h3{
                display: flex;
                align-items: center;
                padding: 0 0.16rem;
                transform: translateY(55%);
                background: #fff;
                color: #308ee3;
                &:before, &:after{
                    display: inline-block;
                    content: '';
                    width: 0.1rem;
                    height: 0.1rem;
                    border-radius: 50%;
                    background: #308ee3;
                }
                &:before{
                    margin-right: 0.23rem;
                }
                &:after{
                    margin-left: 0.23rem;
                }
            }
        }
    }
}
</style>