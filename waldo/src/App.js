import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';

function App() {
  return (
    <div className="App">
        <form onSubmit={submithandler}>
          <input type='text' ref={dataRef}></input>
          <button type='submit'>Save</button>
        </form>
    </div>
  );
}

export default App;
