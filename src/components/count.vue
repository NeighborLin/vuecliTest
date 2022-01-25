<template>
    <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{$store.state.count}}</h3>
      <div>
      <!--<button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>-->
        <button @click="add">+</button>
        <button @click="reduce">-</button>
      </div>
    </div>
</template>

<script>
import store from '@/vuex/store';
import {mapState, mapMutations, mapGetters} from 'vuex';

export default {
  name: "count",
  data(){
    return {
      msg:'Hello Vuex'
    }
  },
  store,
  methods:mapMutations(['add','reduce']),
  /*1. 通过计算属性赋值
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
  2. 通过mapState对象赋值
  computed:mapState({
    count:state=>state.count
  })
  */
  //3. 通过mapState数组赋值
  computed: {
    ...mapState(["count"]), //ES6中的展开运算符”…”
    // count() {
    //   return this.$store.getters.count;
    // }
    ...mapGetters(["count"])
  }
}
</script>

<style scoped>

</style>
