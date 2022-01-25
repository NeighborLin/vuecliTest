import Vue from 'vue';
import Vuex, {mapState} from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}

//通过mutations同步修改状态;actions异步修改状态
//const actions={}
const mutations={
  add(state) {
      state.count++;
  },
  reduce(state) {
      state.count--;
  }
}

const getters={
  count: function (state) {
    return state.count+=100;
  }
}
export default new Vuex.Store({
    state, mutations, getters
})
