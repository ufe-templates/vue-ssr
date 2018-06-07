<template>
  <div class="container">
    <div class="operation">
      <button class="btn" @click="add">增加</button>
      <button class="btn" @click="minus">减少</button>
    </div>
    <div class="content">
      {{msg}}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  asyncData({store, route}) {
    return store.dispatch('asyncTest')
  },
  computed: {
    ...mapGetters(['msg'])
  },
  methods: {
    ...mapActions(['asyncTest']),
    ...mapMutations({
      add: 'ADD',
      minus: 'MINUS'
    })
  }
}
</script>
<style lang="stylus" scoped>
.container
  color #5a4a39
  padding 20px
  .operation
    margin-top 20px
    .btn
      appearance none
      outline none
      padding 5px 10px
      margin 0 10px
      border-radius 4px
      cursor pointer
      &:hover
        background-color deepskyblue
        color #fff
  .content
    margin-top 20px
</style>
