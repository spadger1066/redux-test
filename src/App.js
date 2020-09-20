import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";
import LoginButton from "./components/LoginButton";
import CountDisplay from "./components/CountDisplay";

function App() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
  return (
    <div className="App">
        <CountDisplay  />
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <button onClick={() => dispatch(decrement(5))}>-5</button>
        <br/>
        <LoginButton />
        {isLogged ? <h3>Valuable info</h3> : ''}
    </div>
  );
}

export default App;
