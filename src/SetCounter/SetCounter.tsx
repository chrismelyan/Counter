import React from 'react';
import SetCounterDisplay from "./SetCounterDisplay";
import SetButton from "./SetButton";

type SetCounterType = {
    setMaxValue: () => void
    setStartValue: () => void
}

const SetCounter = (props: SetCounterType) => {
    return (
        <div className={'counter-wrapper'}>
            <SetCounterDisplay
                setMaxValue={props.setMaxValue}
                setStartValue={props.setStartValue}/>
            <SetButton/>
        </div>
    );
};

export default SetCounter;