export default {
  ADD: (state) => {
    state.counter += 1
  },
  MINUS: (state) => {
    state.counter -= 1
  },
  INIT: (state, counter) => {
    state.counter = counter
  }
}
