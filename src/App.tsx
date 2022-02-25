import React, {useState} from 'react';
import './App.css';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";

function App() {
    const maxValue = 5
    const startValue = 0
    const countValue = 1
    const [counter, setCounter] = useState<number>(startValue)

    const increment = () => {
        counter < maxValue && setCounter(counter + countValue)
    }
    const reset = () => setCounter(startValue)

    return (
        <div className="App">
            <div className='counter-wrapper'>
                <CounterDisplay counter={counter} maxValue={maxValue}/>
                <Buttons
                    increment={increment}
                    reset={reset}
                    counter={counter}
                    maxValue={maxValue}
                    startValue={startValue}
                />
            </div>
        </div>
    );
}

export default App;
