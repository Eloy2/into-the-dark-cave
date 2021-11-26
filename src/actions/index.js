

export const takeItem = () => {
  return { type: 'TAKE_ITEM' }
}

export const moveRoom = (room) => {
  return { type: 'MOVE_ROOM', payload: room }
}

export const noMove = () => {
  return { type: 'NO_MOVE' }
}
