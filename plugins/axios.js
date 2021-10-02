export default function ({ $axios, store }) {
  $axios.interceptors.request.use(
    async (config) => {
      const loginToken = localStorage.getItem('token')
      if (loginToken) {
        config.headers = {
          Authorization: `Bearer ${loginToken}`,
        }
        return config
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
      if (error.response.status === 401) {
        await store.dispatch('auth/logout')
        console.log('Interceptor Error: ', error.response)
      } else {
        return Promise.reject(error.response)
      }
    }
  )
}
