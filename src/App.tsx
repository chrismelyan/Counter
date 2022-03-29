import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import SetCounter from "./SetCounter/SetCounter";

export type CounterValuesObjType = {
    startValue: number
    maxValue: number
}

function App() {
    let counterValuesObj = {startValue: 0, maxValue: 0};

    let [counterValues, setCounterValues] = useState<CounterValuesObjType>(counterValuesObj);
    let [counter, setCounter] = useState(counterValues.startValue);

    let [error, setError] = useState<string>('');
    let [editMode, setEditMode] = useState<boolean>(true);

    useEffect(() => {
        let saved = localStorage.getItem('set value');
        if(saved) {
            setCounterValues(JSON.parse(saved))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('set value', JSON.stringify(counterValues));
    }, [counterValues]);

    const settingsChanged = (newValues: CounterValuesObjType) => {
        setCounterValues(newValues);
        setCounter(newValues.startValue);
        setEditMode(false)
    }

    return (
        <div className="App">
            <SetCounter
                settingsChanged={settingsChanged}
                editMode={editMode}
                setEditMode={setEditMode}
                error={error}
                setError={setError}
                counterValue={counterValues}
            />
            <Counter
                error={error}
                counterValues={counterValues}
                counter={counter}
                setCounter={setCounter}
                editMode={editMode}
            />
        </div>
    );
}

export default App;
