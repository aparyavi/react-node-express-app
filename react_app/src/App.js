import './App.css';
import config from './config';
import axios from 'axios'

function App() {

  function getResponseFromServer() {
    axios.get(config.server)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={getResponseFromServer}>
            Talk to Express server
          </button>
        </div>
      </header >
    </div >
  );
}

export default App;
