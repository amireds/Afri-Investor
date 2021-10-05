export const state = () => ({
  dashboardData: {},
  userProfile: null,
  nokRecord: null,
})

/* MUTATIONS */
export const mutations = {
  setUserData(state, payload) {
    state.dashboardData = payload
  },
  setUserRecord(state, payload) {
    state.userProfile = payload
  },
  setNokRecord(state, payload) {
    state.nokRecord = payload
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
  getUserRecord(vuexContext) {
    return this.$axios
      .$get('user/address')
      .then((res) => {
        this.$axios
          .$get('/user/kin')
          .then((nokRes) => {
            vuexContext.commit('setNokRecord', nokRes.data)
            vuexContext.commit('setUserRecord', res.data)
          })
          .catch((err) => console.log('Error getting Next of Kin', err))
      })
      .catch((err) => console.log('Error getting Address', err))
  },
}

/* GETTERS */
export const getters = {
  firstName(state) {
    return state.dashboardData.firstname
  },
  userRecord(state) {
    return state.userProfile
  },
  nokRecord(state) {
    return state.nokRecord
  },
}
