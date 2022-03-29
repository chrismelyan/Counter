import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";
import {CounterValuesObjType} from "../App";

type CounterType = {
    error: string
    counterValues: CounterValuesObjType
    counter: number
    setCounter: (value: number) => void
    editMode: boolean
}

const Counter: React.FC<CounterType> = (
    {counter, error, counterValues, setCounter, editMode}) => {

    const {startValue, maxValue} = counterValues;

    const increment = () => {
        counter < maxValue && setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(startValue)
    }

    return (
        <div className='counter-wrapper'>
            <CounterDisplay
                maxValue={maxValue}
                counter={counter}
                error={error}
                editMode={editMode}
            />
            <Buttons
                increment={increment}
                reset={reset}
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
            />
        </div>
    );
};

export default Counter;