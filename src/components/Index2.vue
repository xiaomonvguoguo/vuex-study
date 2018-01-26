<template>
    <div id="index-two">
      <h1>这是第二页</h1>
      <span>{{num}}</span>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        computed: {
          ...mapGetters({
            num: 'Num'
          })
        }

    }
</script>
<style scoped>
</style>
