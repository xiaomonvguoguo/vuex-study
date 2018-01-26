import * as types from 'mutations-type'

const mutations = {
  [types.ADD_NUM] (state,num) {
    state.num = num
  }
}


export default mutations
