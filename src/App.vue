<template>
  <div id="app">
    <app-header :showBack="showBack"></app-header>
    <app-nav :showNav="showNav"></app-nav>
    <div class="router-wrapper">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>
  import Header from './components/header/header'
  import Nav from './components/nav/nav'

  export default {
      components: {
          'app-header': Header,
          'app-nav': Nav
      },
      data(){
          return {

          }
      },
      computed: {
          showBack(){
              if(this.$route.path === '/index'){
                  return false;
              }else{
                  return true;
              }
          },
          showNav(){
              if(this.$route.path === '/index'){
                  return false;
              }else{
                  return true;
              }
          }
      }
  }

</script>

<style scoped lang="less">
.router-wrapper{
  padding-top: 1.9rem;
}
</style>
