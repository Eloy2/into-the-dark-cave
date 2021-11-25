import './App.css';
import { Controls, TextArea } from './components';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <img alt="Current location" className="container" id="image"/>
        <TextArea/>
        <Controls/>
      </div>
    </div>
  );
}

export default App;
