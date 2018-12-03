<template>
    <div class="focus">
        <list :list="list" @loadMoreList="loadMoreList" @refreshList="refreshList" ref="listOuter"></list>
        <div v-show="!list.length">
            <Loading></Loading>
        </div>
    </div>
</template>

<script>
    import {getMovieList} from '../../api/movie'
    import List from '../../base-components/list/list'
    import Loading from '../../base-components/loading/loading'

    export default {
        components: {
            List,
            Loading
        },
        data(){
            return {
                list: [],
                start: 10
            }
        },
        created(){
            this.getList()
        },
        mounted(){
            
        },
        methods: {
            getList(cb){
                getMovieList(this.start)
                    .then(res => {
                        if(cb){cb()}
                        this.list.push(...res.body.subjects)
                    }, error => {
                        console.log(error)
                    })
            },
            loadMoreList(moreTips){
                this.start += 10
                this.getList(function () {
                    moreTips.style.display = 'none'
                })
            },
            refreshList(refreshTips){
                this.start = 10
                let _this = this
                this.getList(function () {
                    refreshTips.style.display = 'none'
                    _this.list = []
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>