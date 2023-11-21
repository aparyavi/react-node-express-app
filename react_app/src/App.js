import './App.css';
import config from './config';
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [response, setResponse] = useState()

  async function getResponseFromServer() {
    const result = await axios.get(config.server + 'api/response')
    setResponse(result.data)
  }

  console.log(response)

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className='server_click_button'>
            <h3 onClick={getResponseFromServer}>Talk to Express server</h3>
            <img src='/logo192.png' />
          </div>

          {response ?
            <div className='server_click_button'>
              <h2>{response}</h2>
              <img src='/node-js-icon.png' width={180} />
            </div>
            : ''}
        </div>
      </header >
    </div >
  );
}

export default App;
