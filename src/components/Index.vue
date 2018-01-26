<template>
    <div id="index-one">
      <p>这里我们设置一个加减数，而第二栏同样也可以对这个值 加减</p>
      <button @click="Add">+</button>
      <span>{{num}}</span>
      <button @click="ReduceNum">-</button>
    </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
    export default {
      computed: {
        ...mapGetters({
          num: 'Num'
        })
      },
      methods: {
        ...mapActions({
          AddNum:'AddNum',
          ReduceNum: 'ReduceNum'
        }),
        Add () {
          this.AddNum()
        },
        Reduce () {
          this.ReduceNum()
        }
      }
    }
</script>
<style scoped>
</style>
