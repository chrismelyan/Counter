import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetCounter from "./SetCounter/SetCounter";

function App() {

    return (
        <div className="App">
            <SetCounter />
            <Counter />
        </div>
    );
}

export default App;
