
const initialState = {
  rooms: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "CONSOLE_LOG_ROOMS":
          console.log("CONSOLE_LOG_ROOMS", action.payload, state)
          return { ...state }
      default:
          return state
  }
}
