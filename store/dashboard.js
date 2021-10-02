export const state = () => ({
  userData: {},
})

/* MUTATIONS */
export const mutations = {
  setUserData(state, payload) {
    state.userData = payload
  },
}

/* ACTIONS */
export const actions = {
  getUserData(vuexContext) {
    this.$axios
      .$get('/user/dashboard')
      .then((res) => {
        vuexContext.commit('setUserData', res.data)
      })
      .catch((err) => console.log('GET USER DATA FAILED', err))
  },
}

/* GETTERS */
export const getters = {
  firstName(state) {
    return state.userData.firstname
  },
}
