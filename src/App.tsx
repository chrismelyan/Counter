import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetCounter from "./SetCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {changeStartAndMaxValues} from "./redux/actions";

function App() {
    // const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    // const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    //
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     localStorage.setItem('set value', JSON.stringify({start: startValue, max: maxValue}));
    // }, [startValue, maxValue]);
    //
    //
    // useEffect(() => {
    //     let saved = localStorage.getItem('set value');
    //     if(saved) {
    //         let a = JSON.parse(saved)
    //         let startValue = a.start
    //         let maxValue = a.max
    //         dispatch(changeStartAndMaxValues(startValue, maxValue))
    //     }
    // }, [])


    return (
        <div className="App">
            <SetCounter />
            <Counter />
        </div>
    );
}

export default App;
