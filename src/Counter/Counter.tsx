import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";
import {useSelector} from "react-redux";
import {CounterType, selectAllCounter} from "../redux/counter-reducer";
import {AppStateType} from "../redux/store";

const Counter = () => {
    const {
        maxValue,
        startValue,
        error,
        counterValue,
        editMode
    } = useSelector<AppStateType, CounterType>(selectAllCounter)


    return (
        <div className='counter-wrapper'>
            <CounterDisplay
                maxValue={maxValue}
                editMode={editMode}
                error={error}
                counterValue={counterValue}
            />
            <Buttons
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
                counterValue={counterValue}
            />
        </div>
    );
};

export default Counter;