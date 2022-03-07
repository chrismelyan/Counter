import React from 'react';
import SetInput from "./SetInput";

type SetCounterDisplayType = {
    setMaxValue: () => void
    setStartValue: () => void
}

const SetCounterDisplay = (props: SetCounterDisplayType) => {
    return (
        <div className={'set-input-display'}>
            <SetInput title={'max value: '} callBack={props.setMaxValue}/>
            <SetInput title={'start value: '} callBack={props.setStartValue}/>
        </div>
    );
};

export default SetCounterDisplay;