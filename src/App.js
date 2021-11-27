import './App.css';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Controls, TextArea } from './components';

function App() {
  const currentRoom = useSelector(state => state.currentRoom)
  const [image, setImage] = useState();

  /*
    Updates image when current room changes 
  */
  useEffect(() => {
    setImage(currentRoom.image)
  }, [currentRoom.image])

  return (
    <div className="app">
      <div className="app-container">
        <div className="container" id="image-container">
          <img key={image} src={image} alt="Current location" id="image"/>
        </div>
        <TextArea/>
        <Controls/>
      </div>
    </div>
  );
}

export default App;
