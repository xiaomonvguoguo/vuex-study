import * as types from './mutations-type'
const AddNum = function ({commit},num) {
  commit(types.ADD_NUM,num)
}

const ReduceNum = function ({commit},num) {
  commit(types.REDUCE_NUM,num)
}
