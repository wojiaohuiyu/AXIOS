const state = {
  lists: [{
    id: 1,
    nam: '还么',
    name: 13772863821,
    emil: '13772863821@qq.com',
    sex: 18,
    age: '男'
  }]
}

const mutations = {
  addLists: function (state, list) {
    state.lists.push(list)
  }
}
const getters = {
  total: function (state) {
    let number = 0, price = 0, List = state.shopc
    for (let i = 0; i < List.length; i++) {
      number += List[i].shAmount
      price += List[i].goodsinfo.ginfoPrice * List[i].shAmount
    }
    return {
      number,
      price
    }
  }
}
export default {
  state,
  mutations,
  getters
}
