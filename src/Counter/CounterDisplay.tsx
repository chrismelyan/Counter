import React from 'react';
import '../App.css';

type CounterDisplayType = {
    maxValue: number
    error: string
    editMode: boolean
    counterValue: number
}

const CounterDisplay = ({maxValue, error, editMode, counterValue}: CounterDisplayType) => {
    const setText = "enter value and press 'set'";

    const counterMessage = error
        ? <span className={'errorText'}>{error}</span>
        : <span className={'setText'}>{setText}</span>;

    const counterDisplay = `display counter ${counterValue === maxValue ? 'red' : ''}`
    return (
        <div className={'display'}>
            {editMode
                ? counterMessage
                : <span className={counterDisplay}>{counterValue}</span>}
        </div>
    );
};

export default CounterDisplay;