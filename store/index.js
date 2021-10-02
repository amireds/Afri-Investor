export const state = () => ({
  getHelp: false,
})

export const mutations = {
  setGetHelp: (state) => (state.getHelp = !state.getHelp),
}
export const actions = {}
export const getters = {
  getHelp: (state) => state.getHelp,
}
