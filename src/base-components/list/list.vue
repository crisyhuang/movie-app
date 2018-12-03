<template>
    <div class="list" ref="listAll">
        <p class="refresh-tips" id="refreshTips" ref="refreshTips"></p>
        <ul id="listWrapper">
            <li v-for="(item, index) in list" :key="index" :class="{'img-li': item.images}">
                <template v-if="item.images">
                    <a href="#">
                        <div class="text-wrap">
                            <h3>{{item.title}}</h3>
                            <p>
                                <span>{{item.genres.join('/')}}</span>
                                <span>{{item.suportAmount}}</span>
                            </p>
                        </div>
                        <img :data-src="item.images.medium">
                    </a>
                </template>
                <template v-else>
                    <a :href="item.alt">
                        <div class="text-wrap">
                            <h3>{{item.title}}</h3>
                            <p>
                                <span>{{item.genres.join('/')}}</span>
                                <span>{{item.suportAmount}}</span>
                            </p>
                        </div>
                    </a>
                </template>
            </li>
        </ul>
        <p class="more-tips" id="moreTips" ref="moreTips">玩命加载中...</p>
    </div>
</template>

<script>
    import {lazyLoad, loadMore, loadRefresh} from "../../common/js/util"

    export default {
        props: {
            list: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                loadRefreshObj: {}
            }
        },
        activated(){
            let _this = this

            // 上拉加载更多：绑定事件监听器
            this.loadMoreObj = loadMore(function(){
                _this.$emit('loadMoreList', _this.$refs.moreTips)
            })
            document.addEventListener('touchstart', this.loadMoreObj.startFn, false)
            document.addEventListener('touchmove', this.loadMoreObj.moveFn, false)
            document.addEventListener('touchend', this.loadMoreObj.endFn, false)

            // 下拉刷新：绑定事件监听器
            this.loadRefreshObj = loadRefresh(function () {
                _this.$emit('refreshList', _this.$refs.refreshTips)
            })
            document.addEventListener('touchstart', this.loadRefreshObj.startFn, false)
            document.addEventListener('touchmove', this.loadRefreshObj.moveFn, false)
            document.addEventListener('touchend', this.loadRefreshObj.endFn, false)

            // 图片懒加载：绑定事件监听器
            window.addEventListener('load', this.loadImg, false)
            window.addEventListener('scroll', this.loadImg, false)
        },
        deactivated(){
            // 上拉加载更多：移除事件监听器
            document.removeEventListener('touchstart', this.loadMoreObj.startFn, false)
            document.removeEventListener('touchmove', this.loadMoreObj.moveFn, false)
            document.removeEventListener('touchend', this.loadMoreObj.endFn, false)

            // 下拉刷新：移除事件监听器
            document.removeEventListener('touchstart', this.loadRefreshObj.startFn, false)
            document.removeEventListener('touchmove', this.loadRefreshObj.moveFn, false)
            document.removeEventListener('touchend', this.loadRefreshObj.endFn, false)

            // 图片懒加载：移除事件监听器
            window.removeEventListener('load', this.loadImg, false)
            window.removeEventListener('scroll', this.loadImg, false)
        },
        methods: {
            loadImg(){
                this.$nextTick(function(){
                    lazyLoad(this.$refs.listAll.querySelectorAll('img'))
                }) 
            }
        },
        watch: {
            list(){
                this.loadImg()
            }
        }
    }
</script>

<style scoped lang="less">
.list{
    .refresh-tips{
        display: none;
        justify-content: center;
        align-items: center;
        height: 0.8rem;
        background: #eee;
    }
    .more-tips{
        display: none;
        line-height: 0.8rem;
        text-align: center;
    }
    li{
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #e0e0e0;
        a{
            display: flex;
            justify-content: space-between;
            color: #333;
            .text-wrap{
                position: relative;
                width: 5.05rem;
                h3{
                    line-height: 0.4rem;
                }
                p{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    color: #999;
                    span{
                        margin-right: 0.3rem;
                    }
                }
            }
            img{
                width: 1.46rem;
                height: 1.5rem;
            }
        }
    }
    .img-li{
        .text-wrap{
            width: 100%;
        }
    }
}
</style>