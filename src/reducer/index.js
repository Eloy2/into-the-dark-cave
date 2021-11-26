import rooms from '../rooms';

const initialState = {
  currentRoom: rooms.outside,
  inventory: [],
  noMove: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'TAKE_ITEM':
          const items = [...state.currentRoom.itemsInRoom]
          state.currentRoom.itemsInRoom = []
          return { ...state,
            inventory: [...state.inventory, ...items]
          }
      case 'MOVE_ROOM':
          return { ...state, currentRoom: action.payload, noMove: false }
      case 'NO_MOVE':
          return { ...state, noMove: true }
      default:
          return state
  }
}
