const axios = require('axios')

export const state = () => ({
  session: null
})

export const mutations = {
  SET_SESSION(state, session) {
    state.session = session
  }
}

export const actions = {
  GET_SESSION({ commit, state }, sessionid) {
    axios
      .get('https://api.malekai.org/login/' + sessionid)
      .then(function(response) {
        if (response != null) {
          commit('SET_SESSION', response.data)
        }
      })
  }
}
