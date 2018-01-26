import * as types from './mutations-types'

const mutations = {
  [types.ADD_NUM] (state) {
    state.num ++
  },
  [types.REDUCE_NUM] (state) {
    state.num--
  }
}


export default mutations
