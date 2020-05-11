export default {
  state: {
      alert: 'hello world'
  },
  mutations: {
      alertMsg(state, payload){
          state.alert = payload
        }
      
  },
  actions: {
  },
  modules: {
  }
}