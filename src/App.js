import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/actions'

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        Hi Steve! {counter}

        <button onClick={() => dispatch(increment())}> 
          Do a big thing.
        </button>


        <button onClick={() => dispatch(decrement(document.getElementById('little').value))}> 
          Do a little thing.
        </button> <input type="text" id="little" defaultValue="10"></input>
      </header>

      
    </div>
  );
}

export default App;
