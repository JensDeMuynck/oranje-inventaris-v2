const state = () => ({
    user: 'Anna'
})

const getters = {
    getUser: state => {
      return state.user
    }
}

const actions = {}

const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}