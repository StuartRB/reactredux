import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const style = { width: "18rem" };

  return (
    <div className="App">
      <header className="App-header">
        <div className="card" style={style}>
          <img className="card-img-top" src="logo192.png" />
          <div className="card-body">
            <h5 className="card-title dark">Hi Steve! {counter}</h5>
            <p className="card-text dark">
             I'm the driver, I'm the winner.
            </p>
            <a
              href="#"
              onClick={() => dispatch(increment())}
              className="btn btn-primary"
            >
              {" "}
              Do a big thing
            </a>

            <a
              href="#"
              onClick={() =>
                dispatch(decrement(document.getElementById("little").value))
              }
              className="btn btn-primary"
            >
              {" "}
              Do a wee thing
            </a>
            <input type="text" id="little" defaultValue="10" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
