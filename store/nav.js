export const state = () => ({
  open: false
})

export const mutations = {
  setClosed(state) {
    state.open = false
  },
  setOpen(state) {
    state.open = true
  },
  toggle(state) {
    state.open = !state.open
  }
}
