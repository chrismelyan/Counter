import React from 'react';
import CounterDisplay from "./CounterDisplay";
import Buttons from "./Buttons";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

const Counter = () => {
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)

    const error = useSelector<AppStateType, string>(state => state.counter.error)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)


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