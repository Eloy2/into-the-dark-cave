import '../App.css';
import { useSelector } from 'react-redux';

function TextArea() {
  const state = useSelector(state => state)

  return (
    <div className='container' id='text-area-container'>
      <p key={state.currentRoom.name} className='type-writer-text'>
        {`You are in the ${state.currentRoom.name}. ${state.currentRoom.description}`}
      </p>
      <p key={state.currentRoom.itemsInRoom} className='type-writer-text'>
        {state.currentRoom.itemsInRoom.length > 0 ? 
          `Items in this room: ${state.currentRoom.itemsInRoom.join(", ")}` 
          : 
          'There are no items in this room.'
        }
      </p>
      <p key={state.inventory.length} className='type-writer-text'>
        {state.inventory.length > 0 ?
          `Items in your inventory: ${state.inventory.join(', ')}`
          :
          'There are no items in your inventory'
        }
      </p>
      <p key={Math.random()} className='type-writer-text'>
        {state.noMove ? 'There is nothing that way' : null}
      </p>
    </div>
  );
}

export default TextArea;
