import '../App.css';
import { useDispatch } from 'react-redux';
import { takeItem } from '../actions';

function Controls() {
  const dispatch = useDispatch()

  return (
    <div className="container" id="controls">
    <div className="button-container" id="take-button-container">
      <button className="button" id="take-button" title="Take item in room"
      onClick={() => dispatch(takeItem("Sword"))}
      >Take Item</button>
    </div>
      <div className="button-container" id="movement-buttons-container">
        <button className="button" id="forward-button">▲</button>
        <div id="left-right-container">
          <button className="button" id="left-button">◄</button>
          <button className="button" id="right-button">►</button>
        </div>
        <button className="button" id="back-button">▼</button>
      </div>
    </div>
  );
}

export default Controls;
