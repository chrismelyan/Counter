import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter/SetCounter";

function App() {
    const maxValue = 5
    const startValue = 0
    const countValue = 1
    // let [maxValue, setMaxValue] = useState<number>(0)
    // let [startValue, setStartValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(() => {
        let counterAsString = localStorage.getItem('set value')
        if(counterAsString) {
            let newCounter = JSON.parse(counterAsString)
            return newCounter || 0}
    })

    useEffect(() => {
    localStorage.setItem('set value', JSON.stringify(counter))}, [counter])

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


    return (
        <div className="App">
            {/*<SetCounter*/}
            {/*    setMaxValue={setMaxValue}*/}
            {/*    setStartValue={setStartValue}/>*/}
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
