import '../App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { moveRoom, noMove, takeItem } from '../actions';

function Controls() {
  const currentRoom = useSelector(state => state.currentRoom)
  const dispatch = useDispatch()

  /*
    If there are items in the room
    take them. 
  */
  const takeItemHandler = () => {
    if (currentRoom.itemsInRoom.length > 0) {
      dispatch(takeItem())
    }
  }

  /*
    Check if there is a room in that direction.
    If there isn't then set noMove flag in store to true.
  */
  const moveRoomHandler = (direction) => {
    if (currentRoom[direction]) {
      dispatch(moveRoom(currentRoom[direction]))
    } else {
      dispatch(noMove())
    }
  }

  return (
    <div className='container' id='controls'>
    <div className='button-container' id='take-button-container'>
      <button className='button' id='take-button' title='Take item(s) in room'
      onClick={() => takeItemHandler()}
      >{'Take Item(s)'}</button>
    </div>
      <div className='button-container' id='movement-buttons-container'>
        <button onClick={() => moveRoomHandler('n_to')}
          className='button' id='forward-button'>N</button>
        <div id='left-right-container'>
          <button onClick={() => moveRoomHandler('w_to')}
            className='button' id='left-button'>W</button>
          <button onClick={() => moveRoomHandler('e_to')}
            className='button' id='right-button'>E</button>
        </div>
        <button onClick={() => moveRoomHandler('s_to')}
          className='button' id='back-button'>S</button>
      </div>
    </div>
  );
}

export default Controls;
