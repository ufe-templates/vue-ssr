<template>
  <header class="header">
    <nav class="inner">
      <router-link to='/list'>home</router-link>
      <router-link to='/item'>item</router-link>
    </nav>
  </header>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .5)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-exact-active
      color #fff
      font-weight 400

</style>
