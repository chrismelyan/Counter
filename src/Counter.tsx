import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";

type CounterType = {
    counter: number
    increment: () => void
    reset: () => void
    maxValue: number
    startValue: number
}

const Counter: React.FC<CounterType> = ({counter, increment, reset, maxValue, startValue}) => {
    return (
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
    );
};

export default Counter;