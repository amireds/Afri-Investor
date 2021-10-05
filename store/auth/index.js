import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  isFirstTime: null,
})

/* MUTATIONS */
export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  setUserInfo(state, userData) {
    state.email = userData.email
    state.id = userData.id
    state.firstName = userData.firstname
    state.lastName = userData.lastname
  },

  setFirstTime(state, payload) {
    state.isFirstTime = payload
  },
}

/* ACTIONS */
export const actions = {
  userLogin(vuexContext, loginData) {
    return this.$axios
      .$post('/user/login', loginData)
      .then((res) => {
        //console.log('Login Successful', res.data)
        vuexContext.commit('setToken', res.data.access_token)
        localStorage.setItem('token', res.data.access_token)
        Cookie.set('accessToken', res.data.access_token)
      })
      .catch((e) => {
        console.log('LOGIN ERROR', e)
        return Promise.reject(e.data)
      })
  },

  userSignUp(vuexContext, signupData) {
    return this.$axios
      .$post('/user/register', signupData)
      .then((res) => {
        vuexContext.commit('setUserInfo', res.data)
        console.log('Signup Successful', res.data)
      })
      .catch((err) => {
        console.log('SIGNUP ERROR', err.response || err)
        return Promise.reject(e.data)
      })
  },

  // Check if token exists, if set token
  initAuth(vuexContext, req) {
    let token
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const loginToken = req.headers.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith('accessToken='))

      if (!loginToken) {
        return
      }
      token = loginToken.split('=')[1]
    } else {
      if (process.client) {
        token = localStorage.getItem('token')
      }
    }

    vuexContext.commit('setToken', token)
  },

  // Logout
  logout(vuexContext) {
    vuexContext.commit('clearToken')
    Cookie.remove('accessToken')
    if (process.client) {
      localStorage.removeItem('token')
    }
    this.$router.replace('/')
  },

  setFirstLaunch(vuexContext) {
    const firstLaunched = localStorage.getItem('alreadyLaunched')
    //console.log('Already Launched', firstLaunched)

    if (!firstLaunched) {
      localStorage.setItem('alreadyLaunched', 'true')
      vuexContext.commit('setFirstTime', true)
    } else {
      vuexContext.commit('setFirstTime', false)
    }
  },
}

/* GETTERS */
export const getters = {
  isAuthenticated(state) {
    return state.token != null
  },
  isFirstTime: (state) => state.isFirstTime,
}
