<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  components: { Header }
}
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none

#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0

.view
  max-width 800px
  margin 0 auto
  position absolute
  left 0
  right 0
  top 55px
  bottom 0

.fade-enter-active, .fade-leave-active
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0

</style>
