import React from 'react';
import SetCounterDisplay from "./SetCounterDisplay";
import SetButtons from "./SetButtons";


type SetCounterType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setValue: (start: number) => void
    maxValue: number
    startValue: number
    counter: number
}

const SetCounter = (props: SetCounterType) => {
    return (
        <div className={'counter-wrapper'}>
            <SetCounterDisplay
                setMaxValue={props.setMaxValue}
                setStartValue={props.setStartValue}
                maxValue={props.maxValue}
                startValue={props.startValue}
            />
            <SetButtons
                counter={props.counter}
                setValue={props.setValue}
                maxValue={props.maxValue}
                startValue={props.startValue}
            />
        </div>
    );
};

export default SetCounter;