export const state = () => ({
  getHelp: false,
})

export const getters = {
  getHelp: (state) => state.getHelp,
}
export const actions = {}
export const mutations = {
  setGetHelp: (state) => (state.getHelp = !state.getHelp),
}
