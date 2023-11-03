import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(12);
  const Increment=()=>{
     setCount(count+1);
  }
  const Decrement=()=>{
    setCount(count-1);
  }
  return (
    <div className="app">
      <div className="text">
        <h1 className="text-5xl font-bold">Hello world!</h1>
        <br />
        <p className="text-3xl place-content-center ml-28">{count}</p>
          <button className='add'  onClick={Increment}>Increment</button>
          <button className='sub'  onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}
export default App;
