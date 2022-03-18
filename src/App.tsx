import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter/SetCounter";

function App() {
    // const maxValue = 5
    // const startValue = 0
    const countValue = 1
    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [counter, setCounter] = useState<number>(startValue);
    // let [error, setError] = useState<boolean>(true);
    // => {
    //     let counterAsString = localStorage.getItem('set value')
    //     if(counterAsString) {
    //         let newCounter = JSON.parse(counterAsString)
    //         return newCounter || 0}
    // })

    // useEffect(() => {
    // localStorage.setItem('set value', JSON.stringify(counter))}, [counter])

    // useEffect(() => {
    //     let counterAsString = localStorage.getItem('set value')
    //     if(counterAsString) {
    //         let newCounter = JSON.parse(counterAsString)
    //         setCounter(newCounter)
    //     }
    // }, [counter])

    const increment = () => {
        counter < maxValue && setCounter(counter + countValue)
    }
    const reset = () => setCounter(startValue)

    const setMaxValueCallback = (value: number) => {
        setMaxValue(value)
    }
    const setStartValueCallback = (value: number) => {
        setStartValue(value)
    }

    const setValue = (start: number) => {
        setCounter(start)
    }

    return (
        <div className="App">
            <SetCounter
                setMaxValue={setMaxValueCallback}
                setStartValue={setStartValueCallback}
                setValue={setValue}
                maxValue={maxValue}
                startValue={startValue}
                counter={counter}
            />
            <Counter
                counter={counter}
                increment={increment}
                reset={reset}
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    );
}

export default App;
