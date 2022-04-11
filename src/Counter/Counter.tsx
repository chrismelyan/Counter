import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {CounterType, selectAllCounter} from "../redux/counter-reducer";
import {AppStateType} from "../redux/store";
import {incrementAC, resetAC} from "../redux/actions";

const Counter = () => {
    const {
        maxValue,
        startValue,
        error,
        value,
        editMode
    } = useSelector<AppStateType, CounterType>(selectAllCounter)

    const dispatch = useDispatch()

    const increment = () => {
        if (value < maxValue) {
            dispatch(incrementAC())
        }
    }
    const reset = () => {
        dispatch(resetAC(startValue))
    }


    return (
        <div className='counter-wrapper'>
            <CounterDisplay
                maxValue={maxValue}
                editMode={editMode}
                error={error}
                value={value}
            />
            <Buttons
                maxValue={maxValue}
                startValue={startValue}
                editMode={editMode}
                value={value}
                increment={increment}
                reset={reset}
            />
        </div>
    );
};

export default Counter;